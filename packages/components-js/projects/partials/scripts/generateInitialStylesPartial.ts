import { INTERNAL_TAG_NAMES, TAG_NAMES, getMinifiedCss } from '@porsche-design-system/shared';
import { fontFamily, fontHyphenationStyle, fontLineHeight, fontWeight } from '@porsche-design-system/styles';
import type { Styles } from 'jss';
import { joinArrayElementsToString } from './utils';

const tagNames = joinArrayElementsToString(TAG_NAMES.filter((x) => !INTERNAL_TAG_NAMES.includes(x)));

const normalizeStyles: Styles = {
  '@global': {
    'html, body': {
      margin: 0,
      padding: 0,
      fontFamily,
      lineHeight: fontLineHeight,
      letterSpacing: 'normal',
      textSizeAdjust: 'none',
      WebkitTextSizeAdjust: 'none', // stop iOS safari from adjusting font size when screen rotation is changing
    },

    'h1, h2, h3, h4, h5, h6': {
      fontWeight: fontWeight.semiBold,
    },

    p: {
      fontWeight: fontWeight.regular,
      ...fontHyphenationStyle,
    },

    'b, strong': {
      fontWeight: fontWeight.bold,
    },
  },
};

export const generateInitialStylesPartial = (): string => {
  const types = `type GetInitialStylesOptions = {
  prefix?: string | string[];
  format?: FormatWithCSP;
  globalStyles?: boolean;
};`;

  const initialStylesFunction = `export function getInitialStyles(opts: GetInitialStylesOptions & { format: 'jsx' }): JSX.Element;
export function getInitialStyles(opts?: GetInitialStylesOptions): string;
export function getInitialStyles(opts?: GetInitialStylesOptions): string | JSX.Element {
  const { prefix, format, globalStyles }: GetInitialStylesOptions = {
    prefix: '',
    format: 'html',
    globalStyles: true,
    ...opts,
  };

  const tagNames = [${tagNames}];
  const prefixedTagNames = getPrefixedTagNames(tagNames, prefix);

  throwIfRunInBrowser('getInitialStyles');

  const styleProps = { ['data-pds-initial-styles']: '' };
  const styleAttributes = convertPropsToAttributeString(styleProps);

  const normalizeStyles = \`${getMinifiedCss(normalizeStyles)}\`;
  const hydrationStyles = ':is('+ prefixedTagNames.join() + '):not(:defined,.ssr,[data-ssr]){visibility:hidden}';


  const styles = globalStyles ? normalizeStyles.concat(hydrationStyles) : hydrationStyles;

  if (format === 'sha256') {
    return getSha256Hash(styles);
  } else if (format === 'html') {
    return \`<style \$\{styleAttributes\}>\${styles}</style>\`;
  } else {
    const jsxRuntime = require('react/jsx-runtime');
    return jsxRuntime.jsx("style", { ...styleProps, dangerouslySetInnerHTML: { __html: styles } });
  }
}`;

  const helperFunction = `const getPrefixedTagNames = (tagNames: string[], prefix?: string | string[]): string[] => {
    if (prefix && typeof prefix === 'string') {
      return tagNames.map((tagName) => \`\${prefix}-\${tagName}\`);
    } else if (Array.isArray(prefix) && prefix.length) {
      return prefix.map((_prefix) => tagNames.map((tagName) => \`\${_prefix ? _prefix + '-' : ''}\${tagName}\`)).flat();
    } else {
      return tagNames;
    }
  };`;

  return [types, initialStylesFunction, helperFunction].join('\n\n');
};
