import type { Theme, TokenColor, TokenColorsTheme } from '@/types';

export const defaultThemeColors: TokenColorsTheme = {
  gray: '#abb2bf',
  lilac: '#c678dd',
  rose: '#e06c75',
  yellow: '#e5c07b',
  teal: '#56b6c2',
  darkYellow: '#d19a66',
  lightBlue: '#61afef',
  green: '#98c379',
  white: '#ffffff',
  darkGray: '#5c6370',
  midGray: '#7f848e',
  red: '#f44747',
  darkRed: '#be5046',
  purple: '#996ddd',
  blue: '#0000ff',
};

export const tokenColors = (replacements: Partial<TokenColorsTheme> = {}): TokenColor[] => {
  const colors: TokenColorsTheme = { ...defaultThemeColors, ...replacements };

  return [
    {
      scope: 'meta.embedded',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope:
        'punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'variable.other.generic-type.haskell',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'storage.type.haskell',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'support.variable.magic.python',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'variable.parameter.function.language.special.self.python',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'variable.parameter.function.language.special.cls.python',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'storage.modifier.lifetime.rust',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'support.function.std.rust',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'entity.name.lifetime.rust',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'variable.language.rust',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'support.constant.edge',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['keyword.operator.word'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'variable.parameter.function',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'comment markup.link',
      settings: {
        foreground: colors.darkGray,
      },
    },
    {
      scope: 'markup.changed.diff',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope:
        'meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'markup.inserted.diff',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'markup.deleted.diff',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'meta.function.c,meta.function.cpp',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'support.constant.math',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'support.constant.property.math',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'variable.other.constant',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['storage.type.annotation.java', 'storage.type.object.array.java'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'source.java',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'meta.method.java',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'keyword.operator.instanceof.java',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'keyword.operator.logical',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.channel',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'support.constant.property-value.scss,support.constant.property-value.css',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope:
        'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'punctuation.separator.list.comma.css',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'support.constant.color.w3c-standard-color-name.css',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'entity.name.type.module',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope:
        'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'support.constant.json',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional',
        'keyword.operator.expression.keyof',
      ],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'support.type.object.console',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'support.variable.property.process',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'entity.name.function,support.function.console',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'keyword.operator.misc.rust',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'keyword.operator.sigil.rust',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'keyword.operator.delete',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'support.type.object.dom',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'punctuation.separator.c,punctuation.separator.cpp',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'variable.parameter.function.language.python',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'support.type.python',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.logical.python',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'variable.parameter.function.python',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope:
        'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'meta.function-call.generic.python',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'constant.character.format.placeholder.other.python',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'keyword.operator',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'entity.name.namespace',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'variable',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'variable.c',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'variable.language',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'import.storage.java',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'token.package.keyword',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'token.package',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function.any-method',
        'variable.function',
      ],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'support.class, entity.name.type.class',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['entity.name.class', 'variable.other.class.js', 'variable.other.class.ts'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'variable.other.class.php',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'entity.name.type',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'keyword.control',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'control.elements, keyword.operator.less',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'keyword.other.special-method',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'storage',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'token.storage',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'token.storage.type.java',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'support.function',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'support.type.property-name',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope:
        'support.type.property-name.toml, support.type.property-name.table.toml, support.type.property-name.array.toml',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'support.constant.property-value',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'support.constant.font-name',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'meta.tag',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'string',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'constant.other.symbol',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'constant.numeric',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'constant',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'entity.name.tag',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'entity.other.attribute-name.class.css',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'meta.selector',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'markup.heading',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'markup.heading punctuation.definition.heading, entity.name.section',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'keyword.other.unit',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'markup.bold,todo.bold',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'emphasis md',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'punctuation.definition.heading.markdown',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'markup.heading.setext',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'punctuation.definition.bold.markdown',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'markup.inline.raw.markdown',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'punctuation.definition.raw.markdown',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'punctuation.definition.list.markdown',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: [
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
        'punctuation.definition.metadata.markdown',
      ],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['beginning.punctuation.definition.list.markdown'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'punctuation.definition.metadata.markdown',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'markup.underline.link.markdown,markup.underline.link.image.markdown',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'string.other.link.title.markdown,string.other.link.description.markdown',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'markup.raw.monospace.asciidoc',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'punctuation.definition.asciidoc',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'markup.list.asciidoc',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'markup.link.asciidoc,markup.other.url.asciidoc',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'string.unquoted.asciidoc,markup.other.url.asciidoc',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'string.regexp',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'punctuation.section.embedded, variable.interpolation',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'punctuation.section.embedded.begin,punctuation.section.embedded.end',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: 'invalid.illegal.bad-ampersand.html',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'invalid.illegal.unrecognized-tag.html',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: 'invalid.deprecated.entity.other.attribute-name.html',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope:
        'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'support.type.property-name.json',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'support.type.property-name.json punctuation',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'invalid.illegal.non-null-typehinted.php',
      settings: {
        foreground: colors.red,
      },
    },
    {
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'support.constant.core.rust',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'meta.function.decorator.python',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'support.token.decorator.python,meta.function.decorator.identifier.python',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'function.parameter',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'function.brace',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'function.parameter.ruby, function.parameter.cs',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'constant.language.symbol.hashkey.ruby',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'rgb-value',
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: 'inline-color-decoration rgb-value',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'less rgb-value',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'selector.sass',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'storage.type.cs',
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors.red,
      },
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded',
      ],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['meta.template.expression'],
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: ['keyword.operator.module'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: ['support.type.primitive'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['meta.property.object'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['variable.parameter.function.js'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['keyword.other.template.begin'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['keyword.other.template.end'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['keyword.other.substitution.begin'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['keyword.other.substitution.end'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['keyword.operator.assignment.go'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['keyword.operator.arithmetic.go', 'keyword.operator.address.go'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['keyword.operator.arithmetic.c', 'keyword.operator.arithmetic.cpp'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['entity.name.package.go'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['support.constant.elm'],
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['constant.character.entity'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class',
      ],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['entity.global.clojure'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['source.ini'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['source.makefile'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['meta.method.groovy'],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl',
      ],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['entity.name.function.xi'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['entity.name.class.xi'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['constant.character.character-class.regexp.xi'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['constant.regexp.xi'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['keyword.control.xi'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['invalid.xi'],
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: ['beginning.punctuation.definition.quote.markdown.xi'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['beginning.punctuation.definition.list.markdown.xi'],
      settings: {
        foreground: colors.midGray,
      },
    },
    {
      scope: ['constant.character.xi'],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: ['accent.xi'],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: ['wikiword.xi'],
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: ['constant.other.color.rgb-value.xi'],
      settings: {
        foreground: colors.white,
      },
    },
    {
      scope: ['punctuation.definition.tag.xi'],
      settings: {
        foreground: colors.darkGray,
      },
    },
    {
      scope: [
        'entity.name.label.cs',
        'entity.name.scope-resolution.function.call',
        'entity.name.scope-resolution.function.definition',
      ],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: [
        'entity.name.label.cs',
        'markup.heading.setext.1.markdown',
        'markup.heading.setext.2.markdown',
      ],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: [' meta.brace.square'],
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: 'comment, punctuation.definition.comment',
      settings: {
        foreground: colors.midGray,
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.quote.markdown',
      settings: {
        foreground: colors.darkGray,
      },
    },
    {
      scope: 'punctuation.definition.block.sequence.item.yaml',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: ['constant.language.symbol.elixir', 'constant.language.symbol.double-quoted.elixir'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['entity.name.variable.parameter.cs'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['entity.name.variable.field.cs'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'markup.deleted',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'markup.inserted',
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: ['punctuation.section.embedded.begin.php', 'punctuation.section.embedded.end.php'],
      settings: {
        foreground: colors.darkRed,
      },
    },
    {
      scope: ['support.other.namespace.php'],
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: ['variable.parameter.function.latex'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['variable.other.object'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['variable.other.constant.property'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['entity.other.inherited-class'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: 'variable.other.readwrite.c',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope:
        'entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php',
      settings: {
        foreground: colors.gray,
      },
    },
    {
      scope: ['constant.numeric.decimal.asm.x86_64'],
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: ['support.other.parenthesis.regexp'],
      settings: {
        foreground: colors.darkYellow,
      },
    },
    {
      scope: ['constant.character.escape'],
      settings: {
        foreground: colors.teal,
      },
    },
    {
      scope: ['string.regexp'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['log.info'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope: ['log.warning'],
      settings: {
        foreground: colors.yellow,
      },
    },
    {
      scope: ['log.error'],
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: 'keyword.operator.expression.is',
      settings: {
        foreground: colors.lilac,
      },
    },
    {
      scope: 'entity.name.label',
      settings: {
        foreground: colors.rose,
      },
    },
    {
      scope: ['support.class.math.block.environment.latex', 'constant.other.general.math.tex'],
      settings: {
        foreground: colors.lightBlue,
      },
    },
    {
      scope: ['constant.character.math.tex'],
      settings: {
        foreground: colors.green,
      },
    },
    {
      scope:
        'entity.other.attribute-name.js,entity.other.attribute-name.ts,entity.other.attribute-name.jsx,entity.other.attribute-name.tsx,variable.parameter,variable.language.super',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'comment.line.double-slash,comment.block.documentation',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.italic.markdown',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'log.debug',
      settings: {
        foreground: colors.purple,
        fontStyle: 'bold',
      },
    },
    {
      scope: 'log.info',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'string.comment.unbuffered.block.jade',
      settings: {
        foreground: colors.blue,
      },
    },
  ];
};
