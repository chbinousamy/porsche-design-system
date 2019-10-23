/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  BreakpointCustomizable,
} from './utils';
import {
  TextColor,
  TextVariant,
} from './types';

export namespace Components {
  interface PButtonIcon {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * A visually hidden label text to improve accessibility which describes the function behind the button.
    */
    'label'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'ghost' | 'transparent' | 'default';
  }
  interface PButtonRegular {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'highlight' | 'ghost' | 'default';
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'display'?: BreakpointCustomizable<'block' | 'inline'>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<'normal' | 'zero'>;
  }
  interface PGridChild {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
  }
  interface PIcon {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: TextColor;
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies which icon to use.
    */
    'source': string;
  }
  interface PMarque {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage': number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * The number of pages between ellipsis. 'small' = mobile | 'large' = desktop | 'auto' = breakpoint specific
    */
    'pageRange'?: 'small' | 'large' | 'auto';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount': number;
  }
  interface PSpinner {
    /**
    * A visually hidden aria-label text to improve accessibility which describes the function behind the loader.
    */
    'allyLabel'?: string;
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'x-small' | 'small' | 'medium' | 'large';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'sup'
    | 'sub'
    | 'ul'
    | 'ol'
    | 'li'
    | 'legend';
    /**
    * Style of the text.
    */
    'variant'?: TextVariant;
  }
  interface PTextLink {
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: 'span' | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * The style of the text.
    */
    'variant'?: TextVariant;
  }
  interface PTextList {
    /**
    * Basic text list color variations.
    */
    'color'?: TextColor;
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
  }
  interface PTextListItem {}
}

declare global {


  interface HTMLPButtonIconElement extends Components.PButtonIcon, HTMLStencilElement {}
  var HTMLPButtonIconElement: {
    prototype: HTMLPButtonIconElement;
    new (): HTMLPButtonIconElement;
  };

  interface HTMLPButtonRegularElement extends Components.PButtonRegular, HTMLStencilElement {}
  var HTMLPButtonRegularElement: {
    prototype: HTMLPButtonRegularElement;
    new (): HTMLPButtonRegularElement;
  };

  interface HTMLPFlexElement extends Components.PFlex, HTMLStencilElement {}
  var HTMLPFlexElement: {
    prototype: HTMLPFlexElement;
    new (): HTMLPFlexElement;
  };

  interface HTMLPFlexItemElement extends Components.PFlexItem, HTMLStencilElement {}
  var HTMLPFlexItemElement: {
    prototype: HTMLPFlexItemElement;
    new (): HTMLPFlexItemElement;
  };

  interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {}
  var HTMLPGridElement: {
    prototype: HTMLPGridElement;
    new (): HTMLPGridElement;
  };

  interface HTMLPGridChildElement extends Components.PGridChild, HTMLStencilElement {}
  var HTMLPGridChildElement: {
    prototype: HTMLPGridChildElement;
    new (): HTMLPGridChildElement;
  };

  interface HTMLPHeadlineElement extends Components.PHeadline, HTMLStencilElement {}
  var HTMLPHeadlineElement: {
    prototype: HTMLPHeadlineElement;
    new (): HTMLPHeadlineElement;
  };

  interface HTMLPIconElement extends Components.PIcon, HTMLStencilElement {}
  var HTMLPIconElement: {
    prototype: HTMLPIconElement;
    new (): HTMLPIconElement;
  };

  interface HTMLPMarqueElement extends Components.PMarque, HTMLStencilElement {}
  var HTMLPMarqueElement: {
    prototype: HTMLPMarqueElement;
    new (): HTMLPMarqueElement;
  };

  interface HTMLPPaginationElement extends Components.PPagination, HTMLStencilElement {}
  var HTMLPPaginationElement: {
    prototype: HTMLPPaginationElement;
    new (): HTMLPPaginationElement;
  };

  interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {}
  var HTMLPSpinnerElement: {
    prototype: HTMLPSpinnerElement;
    new (): HTMLPSpinnerElement;
  };

  interface HTMLPTextElement extends Components.PText, HTMLStencilElement {}
  var HTMLPTextElement: {
    prototype: HTMLPTextElement;
    new (): HTMLPTextElement;
  };

  interface HTMLPTextLinkElement extends Components.PTextLink, HTMLStencilElement {}
  var HTMLPTextLinkElement: {
    prototype: HTMLPTextLinkElement;
    new (): HTMLPTextLinkElement;
  };

  interface HTMLPTextListElement extends Components.PTextList, HTMLStencilElement {}
  var HTMLPTextListElement: {
    prototype: HTMLPTextListElement;
    new (): HTMLPTextListElement;
  };

  interface HTMLPTextListItemElement extends Components.PTextListItem, HTMLStencilElement {}
  var HTMLPTextListItemElement: {
    prototype: HTMLPTextListItemElement;
    new (): HTMLPTextListItemElement;
  };
  interface HTMLElementTagNameMap {
    'p-button-icon': HTMLPButtonIconElement;
    'p-button-regular': HTMLPButtonRegularElement;
    'p-flex': HTMLPFlexElement;
    'p-flex-item': HTMLPFlexItemElement;
    'p-grid': HTMLPGridElement;
    'p-grid-child': HTMLPGridChildElement;
    'p-headline': HTMLPHeadlineElement;
    'p-icon': HTMLPIconElement;
    'p-marque': HTMLPMarqueElement;
    'p-pagination': HTMLPPaginationElement;
    'p-spinner': HTMLPSpinnerElement;
    'p-text': HTMLPTextElement;
    'p-text-link': HTMLPTextLinkElement;
    'p-text-list': HTMLPTextListElement;
    'p-text-list-item': HTMLPTextListItemElement;
  }
}

declare namespace LocalJSX {
  interface PButtonIcon extends JSXBase.HTMLAttributes<HTMLPButtonIconElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: string;
    /**
    * A visually hidden label text to improve accessibility which describes the function behind the button.
    */
    'label'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'ghost' | 'transparent' | 'default';
  }
  interface PButtonRegular extends JSXBase.HTMLAttributes<HTMLPButtonRegularElement> {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * When providing an url then the component will be rendered as `<a>` instead of `<button>` tag.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Emitted when the button loses focus.
    */
    'onPBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the button has focus.
    */
    'onPFocus'?: (event: CustomEvent<void>) => void;
    /**
    * Displays the button smaller.
    */
    'small'?: boolean;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * Adapts the button color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * Specifies the type of the button when no href prop is defined.
    */
    'type'?: 'button' | 'submit' | 'reset';
    /**
    * The style variant of the button.
    */
    'variant'?: 'highlight' | 'ghost' | 'default';
  }
  interface PFlex extends JSXBase.HTMLAttributes<HTMLPFlexElement> {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'display'?: BreakpointCustomizable<'block' | 'inline'>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem extends JSXBase.HTMLAttributes<HTMLPFlexItemElement> {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid extends JSXBase.HTMLAttributes<HTMLPGridElement> {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {"base": "column", "l": "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. Also defines the gap for specific breakpoints, like {"base": "zero", "l": "normal"}. You always need to provide a base value when doing this.
    */
    'gap'?: BreakpointCustomizable<'normal' | 'zero'>;
  }
  interface PGridChild extends JSXBase.HTMLAttributes<HTMLPGridChildElement> {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline extends JSXBase.HTMLAttributes<HTMLPHeadlineElement> {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
  }
  interface PIcon extends JSXBase.HTMLAttributes<HTMLPIconElement> {
    /**
    * Specifies the label to use for accessibility. Defaults to the icon name.
    */
    'ariaLabel'?: string;
    /**
    * Basic color variations.
    */
    'color'?: TextColor;
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies which icon to use.
    */
    'source'?: string;
  }
  interface PMarque extends JSXBase.HTMLAttributes<HTMLPMarqueElement> {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination extends JSXBase.HTMLAttributes<HTMLPPaginationElement> {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage'?: number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<any>) => void;
    /**
    * The number of pages between ellipsis. 'small' = mobile | 'large' = desktop | 'auto' = breakpoint specific
    */
    'pageRange'?: 'small' | 'large' | 'auto';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount'?: number;
  }
  interface PSpinner extends JSXBase.HTMLAttributes<HTMLPSpinnerElement> {
    /**
    * A visually hidden aria-label text to improve accessibility which describes the function behind the loader.
    */
    'allyLabel'?: string;
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'x-small' | 'small' | 'medium' | 'large';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText extends JSXBase.HTMLAttributes<HTMLPTextElement> {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'label'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'sup'
    | 'sub'
    | 'ul'
    | 'ol'
    | 'li'
    | 'legend';
    /**
    * Style of the text.
    */
    'variant'?: TextVariant;
  }
  interface PTextLink extends JSXBase.HTMLAttributes<HTMLPTextLinkElement> {
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: 'span' | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
    /**
    * The style of the text.
    */
    'variant'?: TextVariant;
  }
  interface PTextList extends JSXBase.HTMLAttributes<HTMLPTextListElement> {
    /**
    * Basic text list color variations.
    */
    'color'?: TextColor;
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
  }
  interface PTextListItem extends JSXBase.HTMLAttributes<HTMLPTextListItemElement> {}

  interface IntrinsicElements {
    'p-button-icon': PButtonIcon;
    'p-button-regular': PButtonRegular;
    'p-flex': PFlex;
    'p-flex-item': PFlexItem;
    'p-grid': PGrid;
    'p-grid-child': PGridChild;
    'p-headline': PHeadline;
    'p-icon': PIcon;
    'p-marque': PMarque;
    'p-pagination': PPagination;
    'p-spinner': PSpinner;
    'p-text': PText;
    'p-text-link': PTextLink;
    'p-text-list': PTextList;
    'p-text-list-item': PTextListItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


