import { getMinifiedCss } from '@porsche-design-system/shared-src/src/styles/getMinifiedCss';
import { pxToRemWithUnit } from '../common-styles';
import {
  BUTTON_LINK_SKELETON_WIDTH,
  ELEMENT_SKELETON_DIMENSION,
  extendPseudoWithTheme,
  getBaseSkeletonStyles,
  getThemedPseudoStyles,
} from './skeleton-base-styles';

export const getCheckboxRadioWrapperSkeletonCss = (): string => {
  return getMinifiedCss({
    '@global': {
      'p-checkbox-wrapper, p-radio-button-wrapper': {
        '&:not(.hydrated)': {
          ...extendPseudoWithTheme({
            stylesFunction: () => getBaseSkeletonStyles(false, ELEMENT_SKELETON_DIMENSION / 2),
          }),
          display: 'block',
          minWidth: pxToRemWithUnit(BUTTON_LINK_SKELETON_WIDTH),
          ...getThemedPseudoStyles(),
        },
      },
    },
  });
};
