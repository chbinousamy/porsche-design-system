import { Component, Element, Event, type EventEmitter, forceUpdate, h, type JSX, Prop } from '@stencil/core';
import {
  FLYOUT_ARIA_ATTRIBUTES,
  FLYOUT_POSITIONS,
  type FlyoutAriaAttribute,
  type FlyoutPosition,
  type FlyoutPositionDeprecated,
} from './flyout-utils';
import { getComponentCss } from './flyout-styles';
import {
  AllowedTypes,
  applyConstructableStylesheetStyles,
  attachComponentCss,
  getHasConstructableStylesheetSupport,
  getPrefixedTagNames,
  hasNamedSlot,
  hasPropValueChanged,
  observeChildren,
  onCancelDialog,
  onClickDialog,
  parseAndGetAriaAttributes,
  setDialogVisibility,
  setScrollLock,
  THEMES,
  unobserveChildren,
  validateProps,
  warnIfDeprecatedPropValueIsUsed,
} from '../../utils';
import type { PropTypes, SelectedAriaAttributes, Theme } from '../../types';
import { getSlottedAnchorStyles } from '../../styles';
import { observeStickyArea } from '../../utils/dialog/observer';

const propTypes: PropTypes<typeof Flyout> = {
  open: AllowedTypes.boolean,
  position: AllowedTypes.oneOf<FlyoutPosition>(FLYOUT_POSITIONS),
  disableBackdropClick: AllowedTypes.boolean,
  theme: AllowedTypes.oneOf<Theme>(THEMES),
  aria: AllowedTypes.aria<FlyoutAriaAttribute>(FLYOUT_ARIA_ATTRIBUTES),
};

@Component({
  tag: 'p-flyout',
  shadow: true,
})
export class Flyout {
  @Element() public host!: HTMLElement;

  /** If true, the flyout is open. */
  @Prop() public open: boolean = false; // eslint-disable-line @typescript-eslint/no-inferrable-types

  /** The position of the flyout */
  @Prop() public position?: FlyoutPosition = 'end';

  /** If true, the flyout will not be closable via backdrop click. */
  @Prop() public disableBackdropClick?: boolean = false;

  /** Adapts the flyout color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  /** Add ARIA attributes. */
  @Prop() public aria?: SelectedAriaAttributes<FlyoutAriaAttribute>;

  /** Emitted when the component requests to be dismissed. */
  @Event({ bubbles: false }) public dismiss?: EventEmitter<void>;

  private dialog: HTMLDialogElement;
  private scroller: HTMLDivElement;
  private header: HTMLSlotElement;
  private footer: HTMLSlotElement;
  private hasHeader: boolean;
  private hasFooter: boolean;
  private hasSubFooter: boolean;

  public componentShouldUpdate(newVal: unknown, oldVal: unknown): boolean {
    return hasPropValueChanged(newVal, oldVal);
  }

  public connectedCallback(): void {
    applyConstructableStylesheetStyles(this.host, getSlottedAnchorStyles);
    // Observe dynamic slot changes
    observeChildren(this.host, () => {
      forceUpdate(this.host);
    });
  }

  public componentWillRender(): void {
    setScrollLock(this.open);
  }

  public componentDidRender(): void {
    setDialogVisibility(this.open, this.dialog, this.scroller);
  }

  public componentDidLoad(): void {
    if (this.hasHeader) {
      observeStickyArea(this.scroller, this.header);
    }
    if (this.hasFooter) {
      observeStickyArea(this.scroller, this.footer);
    }

    if (getHasConstructableStylesheetSupport()) {
      // It's very important to create and push the stylesheet after `attachComponentCss()` has been called, otherwise styles might replace each other.
      const sheet = new CSSStyleSheet();
      // TODO: for some reason unit test in Docker environment throws TS2339: Property 'push' does not exist on type 'readonly CSSStyleSheet[]'
      /* eslint-disable @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      this.host.shadowRoot.adoptedStyleSheets.push(sheet);

      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          // EXPERIMENTAL CSS variable
          sheet.replaceSync(`:host{--p-flyout-sticky-top:${Math.ceil(entry.target.getBoundingClientRect().height)}px}`);
        }
      });

      if (this.hasHeader) {
        ro.observe(this.header);
      }
    }
  }

  // When slots change dynamically the intersection observer for the scroll shadows has to be added
  public componentDidUpdate(): void {
    if (this.hasHeader) {
      observeStickyArea(this.scroller, this.header);
    }
    if (this.hasFooter) {
      observeStickyArea(this.scroller, this.footer);
    }
  }

  public disconnectedCallback(): void {
    setScrollLock(false);
    unobserveChildren(this.host);
  }

  public render(): JSX.Element {
    validateProps(this, propTypes);

    const positionDeprecationMap: Record<
      FlyoutPositionDeprecated,
      Exclude<FlyoutPosition, FlyoutPositionDeprecated>
    > = {
      left: 'start',
      right: 'end',
    };
    warnIfDeprecatedPropValueIsUsed<typeof Flyout, FlyoutPositionDeprecated, FlyoutPosition>(
      this,
      'position',
      positionDeprecationMap
    );

    this.hasHeader = hasNamedSlot(this.host, 'header');
    this.hasFooter = hasNamedSlot(this.host, 'footer');
    this.hasSubFooter = hasNamedSlot(this.host, 'sub-footer');

    attachComponentCss(
      this.host,
      getComponentCss,
      this.open,
      (positionDeprecationMap[this.position] || this.position) as Exclude<FlyoutPosition, FlyoutPositionDeprecated>,
      this.hasHeader,
      this.hasFooter,
      this.hasSubFooter,
      this.theme
    );

    const PrefixedTagNames = getPrefixedTagNames(this.host);

    return (
      <dialog
        inert={this.open ? null : true} // prevents focusable elements during fade-out transition + prevents focusable elements within nested open accordion
        tabIndex={-1} // dialog always has a dismiss button to be focused
        ref={(el) => (this.dialog = el)}
        onCancel={(e) => onCancelDialog(e, this.dismissDialog)}
        onMouseDown={(e) => onClickDialog(e, this.dismissDialog, this.disableBackdropClick)}
        {...parseAndGetAriaAttributes({
          'aria-modal': true,
          'aria-hidden': !this.open,
          ...parseAndGetAriaAttributes(this.aria),
        })}
      >
        <div class="scroller" ref={(el) => (this.scroller = el)}>
          <div class="flyout">
            <PrefixedTagNames.pButtonPure
              class="dismiss"
              type="button"
              hideLabel
              icon="close"
              theme={this.theme}
              onClick={this.dismissDialog}
            >
              Dismiss flyout
            </PrefixedTagNames.pButtonPure>
            {this.hasHeader && <slot name="header" ref={(el: HTMLSlotElement) => (this.header = el)} />}
            <slot />
            {this.hasFooter && <slot name="footer" ref={(el: HTMLSlotElement) => (this.footer = el)} />}
            {this.hasSubFooter && <slot name="sub-footer" />}
          </div>
        </div>
      </dialog>
    );
  }

  private dismissDialog = (): void => {
    this.dismiss.emit();
  };
}
