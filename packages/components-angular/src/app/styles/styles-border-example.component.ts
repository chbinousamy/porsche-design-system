import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-styles-border-example',
  styles: [
    `
      @use '@porsche-design-system/components-angular/styles' as *;

      // Wrapper
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: $pds-grid-gap;
        padding: $pds-spacing-fluid-medium;
      }

      // Typography
      .heading {
        @include pds-heading-medium;
        color: $pds-theme-light-primary;
        text-align: center;
        width: 100%;
        margin: 0;
      }

      // Tile
      .tile {
        @include pds-text-small;
        color: $pds-theme-dark-primary;
        background: $pds-theme-dark-background-base;
        padding: $pds-spacing-fluid-medium;
      }

      // Border Radius
      .border-radius-small {
        border-radius: $pds-border-radius-small;
      }

      .border-radius-medium {
        border-radius: $pds-border-radius-medium;
      }

      .border-radius-large {
        border-radius: $pds-border-radius-large;
      }

      // Border Width
      .border-width-base {
        width: 100%;
        border-bottom: $pds-border-width-base solid $pds-theme-light-primary;
        &::before {
          @include pds-text-x-small;
          content: 'Base';
          color: $pds-theme-light-primary;
        }
      }

      .border-width-thin {
        width: 100%;
        border-bottom: $pds-border-width-thin solid $pds-theme-light-primary;
        &::before {
          @include pds-text-x-small;
          content: 'Thin';
          color: $pds-theme-light-primary;
        }
      }
    `,
  ],
  template: `
    <div class="wrapper">
      <h3 class="heading">Border Radius</h3>
      <div class="border-radius-small tile">Small</div>
      <div class="border-radius-medium tile">Medium</div>
      <div class="border-radius-large tile">Large</div>
    </div>
    <div class="wrapper">
      <h3 class="heading">Border Width</h3>
      <div class="border-width-base"></div>
      <div class="border-width-thin"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class StylesBorderExampleComponent {}
