import type { Direction } from '../table/table-utils';
import { getCss } from '../../../utils';
import {
  addImportantToEachRule,
  getFocusJssStyle,
  getHoverJssStyle,
  getTextHiddenJssStyle,
  pxToRemWithUnit,
  getThemedColors,
  hostHiddenStyles,
  hoverMediaQuery,
} from '../../../styles';
import { fontWeight, spacingStaticXSmall, textSmallStyle } from '@porsche-design-system/utilities-v2';
import { isDirectionAsc, isSortable } from './table-head-cell-utils';

const { contrastMediumColor, primaryColor } = getThemedColors('light');
const { semiBold: fontWeightSemiBold } = fontWeight;

export const getComponentCss = (
  active: boolean,
  direction: Direction,
  hideLabel: boolean,
  multiline: boolean
): string => {
  const sortable = isSortable(active, direction);

  return getCss({
    '@global': {
      ':host': addImportantToEachRule({
        display: 'table-cell',
        padding: `${pxToRemWithUnit(2)} ${pxToRemWithUnit(12)} ${pxToRemWithUnit(8)}`,
        borderBottom: `1px solid ${contrastMediumColor}`,
        verticalAlign: 'bottom',
        fontWeight: fontWeightSemiBold,
        whiteSpace: multiline ? 'normal' : 'nowrap',
        ...hostHiddenStyles,
      }),
      ...(sortable
        ? {
            button: {
              display: 'flex',
              alignItems: 'flex-end',
              padding: 0,
              boxSizing: 'border-box',
              appearance: 'none',
              border: 'none',
              ...textSmallStyle,
              fontWeight: fontWeightSemiBold,
              color: primaryColor,
              textDecoration: 'none',
              textAlign: 'left',
              background: 'transparent',
              cursor: 'pointer',
              ...getFocusJssStyle({ offset: 1 }),
              ...hoverMediaQuery({
                ...getHoverJssStyle(),
                '&:hover, &:focus': {
                  '& .icon': {
                    opacity: 1,
                  },
                },
              }),
            },
          }
        : hideLabel && {
            span: {
              ...getTextHiddenJssStyle(true),
              display: 'block',
              border: 0,
            },
          }),
    },
    ...(sortable && {
      icon: {
        marginLeft: spacingStaticXSmall,
        opacity: active ? 1 : 0,
        transform: `rotate3d(0,0,1,${isDirectionAsc(direction) ? 0 : 180}deg)`,
        transformOrigin: '50% 50%', // for iOS
      },
    }),
  });
};
