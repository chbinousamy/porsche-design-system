import { Component, Element, h, Host, JSX } from '@stencil/core';
import { attachComponentCss } from '../../../../utils';
import { throwIfParentIsNotOfKind } from '../../../../utils/dom'; // required for lifecycle validation test
import { getComponentCss } from './table-row-styles';

@Component({
  tag: 'p-table-row',
  shadow: true,
})
export class TableRow {
  @Element() public host!: HTMLElement;

  public connectedCallback(): void {
    throwIfParentIsNotOfKind(this.host, 'pTableBody');
    attachComponentCss(this.host, getComponentCss);
  }

  public render(): JSX.Element {
    return (
      <Host role="row">
        <slot />
      </Host>
    );
  }
}
