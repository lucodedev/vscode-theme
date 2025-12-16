import * as defaults from '@/defaults';
import forestDusk from '@/themes/forest-dusk';
import forestDuskIntense from '@/themes/forest-dusk-intense';
import type { Theme, VSCodeTheme } from '@/types';
import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';

const themes: Theme[] = [
  forestDusk,
  forestDuskIntense,
  // ... other themes in the future
];

/** Builds the VSCode theme JSON files from the defined themes. */
const buildThemes = () => {
  const themesDir = path.join(__dirname, '..', 'themes');
  if (!fs.existsSync(themesDir)) {
    fs.mkdirSync(themesDir);
  }

  const themeFiles: { fileName: string; content: VSCodeTheme }[] = themes.map((theme) => {
    const fileName = `${theme.name.replace(/\s+/g, '-').toLowerCase()}-color-theme.json`;
    const content: VSCodeTheme = {
      $schema: 'vscode://schemas/color-theme',
      type: theme.type,
      name: theme.name,
      semanticHighlighting: theme.semanticHighlighting ?? false,
      colors: theme.colors,
      tokenColors: defaults.tokenColors(theme.tokenColorsReplacement),
    };
    return { fileName, content };
  });

  themeFiles.forEach(({ fileName, content }) => {
    const filePath = path.join(themesDir, fileName);
    fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf-8');
    console.log(`Built theme: ${fileName}`);
  });

  return themeFiles;
};

/** updates the package.json contributes.themes field with the built themes */
const updatePackageJsonThemes = (themeFiles: ReturnType<typeof buildThemes>) => {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');

  // build the new themes array from our theme files
  const newThemes = themeFiles.map(({ fileName, content }) => {
    const uiTheme =
      content.type === 'light' ? 'vs' : content.type === 'hc' ? 'hc-black' : 'vs-dark';
    return {
      id: `Lucode's ${content.name}`,
      label: content.name!,
      uiTheme,
      path: `./themes/${fileName}`,
    };
  });

  // replace the themes array with unformatted JSON
  const themesJson = JSON.stringify(newThemes);
  const themesArrayRegex = /("themes":\s*)\[[\s\S]*?\n(\s*)\]/;

  if (!themesArrayRegex.test(packageJsonContent)) {
    throw new Error('Could not find contributes.themes array in package.json');
  }

  const newPackageJsonContent = packageJsonContent.replace(themesArrayRegex, `$1${themesJson}`);
  fs.writeFileSync(packageJsonPath, newPackageJsonContent, 'utf-8');

  // run prettier to format the file
  execSync(`bun prettier --write "${packageJsonPath}"`, { cwd: path.join(__dirname, '..') });
  console.log('Updated package.json contributes.themes');
};

const createdThemes = buildThemes();
updatePackageJsonThemes(createdThemes);
