import * as fs from 'node:fs';
import * as path from 'node:path';
import type { VSCodeTheme, ColorMap, ColorUsage } from '@/types';

function stripJsonComments(jsonString: string): string {
  // Remove single-line comments (// ...)
  // Be careful not to remove // inside strings
  let result = '';
  let inString = false;
  let escapeNext = false;

  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString[i];
    const nextChar = jsonString[i + 1];

    if (escapeNext) {
      result += char;
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      result += char;
      escapeNext = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      result += char;
      continue;
    }

    if (!inString && char === '/' && nextChar === '/') {
      // Skip until end of line
      while (i < jsonString.length && jsonString[i] !== '\n') {
        i++;
      }
      // Include the newline
      if (jsonString[i] === '\n') {
        result += '\n';
      }
      continue;
    }

    if (!inString && char === '/' && nextChar === '*') {
      // Skip block comment
      i += 2;
      while (i < jsonString.length && !(jsonString[i] === '*' && jsonString[i + 1] === '/')) {
        if (jsonString[i] === '\n') {
          result += '\n';
        }
        i++;
      }
      i++; // Skip the closing */
      continue;
    }

    result += char;
  }

  return result;
}

function normalizeColor(color: string): string {
  // Normalize color to lowercase for consistent grouping
  return color.toLowerCase();
}

function parseTheme(filePath: string): ColorMap {
  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  const cleanedContent = stripJsonComments(fileContent);

  let theme: VSCodeTheme;
  try {
    theme = JSON.parse(cleanedContent);
  } catch (error) {
    throw new Error(`Failed to parse JSON: ${(error as Error).message}`);
  }

  const colorMap: ColorMap = {};

  // Helper function to add color usage
  const addColorUsage = (color: string, type: 'colors' | 'tokenColors', key: string) => {
    const normalizedColor = normalizeColor(color);

    if (!colorMap[normalizedColor]) {
      colorMap[normalizedColor] = {
        colors: [],
        tokenColors: [],
      };
    }

    if (!colorMap[normalizedColor][type].includes(key)) {
      colorMap[normalizedColor][type].push(key);
    }
  };

  // Process colors
  if (theme.colors) {
    for (const [colorKey, colorValue] of Object.entries(theme.colors)) {
      if (colorValue) {
        addColorUsage(colorValue, 'colors', colorKey);
      }
    }
  }

  // Process tokenColors
  if (theme.tokenColors) {
    for (const tokenColor of theme.tokenColors) {
      if (!tokenColor.settings) continue;

      const { foreground, background } = tokenColor.settings;
      const scopes = tokenColor.scope;

      if (!scopes) continue;

      // Normalize scopes to array
      const scopeList: string[] = Array.isArray(scopes)
        ? scopes
        : scopes.split(',').map((s) => s.trim());

      // Add foreground color usage
      if (foreground) {
        for (const scope of scopeList) {
          addColorUsage(foreground, 'tokenColors', scope);
        }
      }

      // Add background color usage
      if (background) {
        for (const scope of scopeList) {
          addColorUsage(background, 'tokenColors', scope);
        }
      }
    }
  }

  return colorMap;
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: npx ts-node disect-theme.ts <theme-file-path> [output-file-path]');
    console.error('Example: npx ts-node disect-theme.ts ../themes/Dark\\ Earth-color-theme.json');
    process.exit(1);
  }

  const inputPath = args[0];
  if (!inputPath) {
    console.error('Error: Theme file path is required.');
    process.exit(1);
  }

  const outputPath = args[1] || inputPath.replace(/\.jsonc?$/, '-dissected.json');

  try {
    console.log(`Parsing theme: ${inputPath}`);
    const colorMap = parseTheme(inputPath);

    // Sort colors by number of usages (descending)
    const sortedColorMap: ColorMap = {};
    const sortedKeys = Object.keys(colorMap).sort((a, b) => {
      if (colorMap[a] === undefined || colorMap[b] === undefined) {
        return 0;
      }
      const aCount = colorMap[a].colors.length + colorMap[a].tokenColors.length;
      const bCount = colorMap[b].colors.length + colorMap[b].tokenColors.length;
      return bCount - aCount;
    });

    for (const key of sortedKeys) {
      sortedColorMap[key] = colorMap[key] as ColorUsage;
    }

    const output = JSON.stringify(sortedColorMap, null, 2);

    fs.writeFileSync(outputPath, output, 'utf-8');
    console.log(`Output written to: ${outputPath}`);

    // Write color list file
    const colorListPath = inputPath.replace(/\.jsonc?$/, '-color-list.json');
    const colorList = JSON.stringify(sortedKeys, null, 2);
    fs.writeFileSync(colorListPath, colorList, 'utf-8');
    console.log(`Color list written to: ${colorListPath}`);

    // Print summary
    const totalColors = Object.keys(sortedColorMap).length;
    console.log(`\nSummary: Found ${totalColors} unique colors`);

    // Show top 5 most used colors
    console.log('\nTop 5 most used colors:');
    for (let i = 0; i < Math.min(5, sortedKeys.length); i++) {
      const color = sortedKeys[i];
      if (!color) continue;

      const usage = sortedColorMap[color];
      if (!usage) continue;

      const total = usage.colors.length + usage.tokenColors.length;
      console.log(
        `  ${color}: ${total} usages (${usage.colors.length} colors, ${usage.tokenColors.length} tokenColors)`,
      );
    }
  } catch (error) {
    console.error(`Error: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
