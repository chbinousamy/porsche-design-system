import { Component, Element, h, type JSX, Prop } from '@stencil/core';
import { AllowedTypes, attachComponentCss, getPrefixedTagNames, validateProps } from '../../../utils';
import { MultiSelectOptionInternalHTMLProps } from './multi-select-option-utils';
import type { PropTypes } from '../../../types';
import { getComponentCss } from './multi-select-option-styles';
import { getOptionAriaAttributes } from '../../../utils/a11y/select/select-aria';
import { ValidatorFunction } from '../../../types';

const propTypes: PropTypes<typeof MultiSelectOption> = {
  value: AllowedTypes.oneOf<ValidatorFunction>([AllowedTypes.string, AllowedTypes.number]),
  selected: AllowedTypes.boolean,
  disabled: AllowedTypes.boolean,
};

@Component({
  tag: 'p-multi-select-option',
  shadow: true,
})
export class MultiSelectOption {
  @Element() public host!: HTMLElement & MultiSelectOptionInternalHTMLProps;

  /** The option value. */
  @Prop() public value: string | number;

  /** The option selected state. */
  @Prop({ mutable: true }) public selected?: boolean = false; // eslint-disable-line @typescript-eslint/no-inferrable-types

  /** Disables the option. */
  @Prop() public disabled?: boolean = false; // eslint-disable-line @typescript-eslint/no-inferrable-types

  public componentDidUpdate(): void {
    this.host.dispatchEvent(
      new CustomEvent('internalOptionUpdate', {
        bubbles: true,
      })
    );
  }

  public render(): JSX.Element {
    validateProps(this, propTypes);
    attachComponentCss(this.host, getComponentCss, this.host.theme || 'light');

    const PrefixedTagNames = getPrefixedTagNames(this.host);

    return (
      <li
        role="option"
        class={{
          option: true,
          'option--selected': this.selected,
          'option--highlighted': this.host.highlighted,
          'option--disabled': this.disabled,
          'option--hidden': this.host.hidden,
        }}
        onClick={this.onClick}
        {...getOptionAriaAttributes(this.selected, this.disabled, this.host.hidden, !!this.value)}
      >
        <PrefixedTagNames.pCheckboxWrapper class="checkbox" theme={this.host.theme || 'light'}>
          <input type="checkbox" checked={this.selected} disabled={this.disabled} />
          <slot slot="label" />
        </PrefixedTagNames.pCheckboxWrapper>
      </li>
    );
  }

  private onClick = (): void => {
    this.selected = !this.selected;
  };
}
