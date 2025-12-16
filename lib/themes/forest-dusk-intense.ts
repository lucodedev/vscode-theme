import type { Theme } from '@/types';
import forestDusk from './forest-dusk';

export default {
  name: 'Forest Dusk Intense',
  type: 'dark',
  semanticHighlighting: true,
  colors: forestDusk.colors,
  tokenColorsReplacement: {},
} satisfies Theme;
