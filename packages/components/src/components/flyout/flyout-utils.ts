// 'left' is deprecated and will be mapped to 'start'
// 'right' is deprecated and will be mapped to 'end'

import { getHasConstructableStylesheetSupport } from '../../utils';

/** @deprecated */
export const FLYOUT_POSITIONS_DEPRECATED = ['left', 'right'] as const;
/** @deprecated */
export type FlyoutPositionDeprecated = (typeof FLYOUT_POSITIONS_DEPRECATED)[number];

export const FLYOUT_POSITIONS = ['start', 'end', ...FLYOUT_POSITIONS_DEPRECATED] as const;
export type FlyoutPosition = (typeof FLYOUT_POSITIONS)[number];

export const FLYOUT_ARIA_ATTRIBUTES = ['aria-label'] as const;
export type FlyoutAriaAttribute = (typeof FLYOUT_ARIA_ATTRIBUTES)[number];

export let stickyTopCssVarResizeObserver: ResizeObserver;
export let stickyTopCssVarStyleSheet: CSSStyleSheet;

// Called once in didLoad for setup
export const addStickyTopCssVarStyleSheet = (host: HTMLElement) => {
  if (getHasConstructableStylesheetSupport()) {
    stickyTopCssVarStyleSheet = new CSSStyleSheet();
    // It's very important to create and push the stylesheet after `attachComponentCss()` has been called, otherwise styles might replace each other.
    // TODO: for some reason unit test in Docker environment throws TS2339: Property 'push' does not exist on type 'readonly CSSStyleSheet[]'
    /* eslint-disable @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment */
    // @ts-ignore
    host.shadowRoot.adoptedStyleSheets.push(stickyTopCssVarStyleSheet);
    updateStickyTopCssVarStyleSheet(0);
  }
};

// Called whenever component updates
export const handleUpdateStickyTopCssVar = (hasHeader: boolean, header: HTMLElement) => {
  if (getHasConstructableStylesheetSupport()) {
    // Create resize observer if none exists but is needed (State changes from !hasHeader -> hasHeader or initially)
    if (hasHeader && !stickyTopCssVarResizeObserver) {
      stickyTopCssVarResizeObserver = getStickyTopResizeObserver();
      stickyTopCssVarResizeObserver.observe(header);
    }
    // Remove resize observer if one exists but isn't needed anymore (State changes from hasHeader -> !hasHeader)
    else if (!hasHeader && stickyTopCssVarResizeObserver) {
      updateStickyTopCssVarStyleSheet(0);
      stickyTopCssVarResizeObserver.disconnect();
      // TODO: Keep ro instance if needed again?
      stickyTopCssVarResizeObserver = undefined;
    }
  }
};

export const updateStickyTopCssVarStyleSheet = (value: number) => {
  // EXPERIMENTAL CSS variable
  stickyTopCssVarStyleSheet.replaceSync(`:host{--p-flyout-sticky-top:${value}px}`);
};

export const getStickyTopResizeObserver = (): ResizeObserver => {
  return new ResizeObserver((entries) => {
    for (const entry of entries) {
      updateStickyTopCssVarStyleSheet(Math.ceil(entry.target.getBoundingClientRect().height));
    }
  });
};
