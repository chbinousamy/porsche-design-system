import type { JssStyle, Styles } from 'jss';
import type { GetJssStyleFunction } from '../utils';
import { buildResponsiveStyles, hasVisibleIcon, mergeDeep } from '../utils';
import type { AlignLabel, BreakpointCustomizable, LinkButtonIconName, TextSize, Theme } from '../types';
import { addImportantToEachRule, getInsetJssStyle, getThemedColors, getTransition } from './';
import {
  borderRadiusSmall,
  borderWidthBase,
  fontLineHeight,
  frostedGlassMediumStyle,
  spacingStaticXSmall,
  textSmallStyle,
} from '@porsche-design-system/utilities-v2';
import { getFontSizeText } from './font-size-text-styles';
import { hoverMediaQuery } from './hover-media-query';

// Needed for slotted anchor and hidden label, which then enlarges the hidden label to equal host size and indents the text to be visually hidden.
const getVisibilityJssStyle: GetJssStyleFunction = (hideLabel: boolean): JssStyle => {
  return hideLabel
    ? {
        position: 'absolute',
        ...getInsetJssStyle(0),
        whiteSpace: 'nowrap',
        textIndent: '-999999px',
      }
    : {
        position: 'relative',
        ...getInsetJssStyle('auto'),
        whiteSpace: 'inherit',
        textIndent: 0,
      };
};

export const offsetVertical = '-2px';
export const offsetHorizontal = '-4px';

export const getLinkButtonPureStyles = (
  icon: LinkButtonIconName,
  iconSource: string,
  active: boolean,
  isDisabledOrLoading: boolean,
  stretch: BreakpointCustomizable<boolean>,
  size: BreakpointCustomizable<TextSize>,
  hideLabel: BreakpointCustomizable<boolean>,
  alignLabel: BreakpointCustomizable<AlignLabel>,
  hasSlottedAnchor: boolean,
  theme: Theme
): Styles => {
  const { primaryColor, disabledColor, hoverColor, focusColor } = getThemedColors(theme);
  const hasIcon = hasVisibleIcon(icon, iconSource);

  return {
    '@global': {
      ':host': {
        ...addImportantToEachRule({
          transform: 'translate3d(0,0,0)', // creates new stacking context
          outline: 0, // custom element is able to delegate the focus
        }),
        ...buildResponsiveStyles(stretch, (responsiveStretch: boolean) => ({
          display: responsiveStretch ? 'block' : 'inline-block',
          ...(!responsiveStretch && { verticalAlign: 'top' }),
        })),
      },
    },
    root: {
      display: 'flex',
      gap: spacingStaticXSmall,
      width: '100%',
      color: isDisabledOrLoading ? disabledColor : primaryColor,
      outline: 0,
      ...textSmallStyle,
      ...mergeDeep(
        buildResponsiveStyles(stretch, (stretchValue: boolean) => ({
          justifyContent: stretchValue ? 'space-between' : 'flex-start',
          alignItems: stretchValue ? 'center' : 'flex-start',
        })),
        buildResponsiveStyles(size, (sizeValue: TextSize) => ({
          fontSize: getFontSizeText(sizeValue),
        }))
      ),
      '&::before': {
        content: '""',
        position: 'fixed',
        top: offsetVertical,
        right: offsetHorizontal,
        bottom: offsetVertical,
        left: offsetHorizontal,
        borderRadius: borderRadiusSmall,
        transition: getTransition('background-color'),
        ...(active && {
          ...frostedGlassMediumStyle,
          backgroundColor: hoverColor,
        }),
      },
      ...(!isDisabledOrLoading &&
        hoverMediaQuery({
          '&:hover::before': {
            ...frostedGlassMediumStyle,
            backgroundColor: hoverColor,
          },
        })),
      ...(!hasSlottedAnchor && {
        '&:focus::before': {
          border: `${borderWidthBase} solid ${focusColor}`,
        },
        '&:not(:focus-visible)::before': {
          border: 0,
        },
      }),
    },
    label: {
      position: 'relative', // needed for hover state when icon="none" is set
    },
    ...(hasIcon && {
      icon: {
        position: 'relative',
        flexShrink: '0',
        width: fontLineHeight,
        height: fontLineHeight,
      },
      label: mergeDeep(
        buildResponsiveStyles(hideLabel, getVisibilityJssStyle),
        buildResponsiveStyles(alignLabel, (alignLabelValue: AlignLabel) => ({
          order: alignLabelValue === 'left' ? -1 : 0,
        }))
      ),
    }),
  };
};
