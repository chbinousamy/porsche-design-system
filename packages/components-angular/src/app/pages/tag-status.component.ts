/* Auto Generated File */
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-tag-status',
  styles: [
    `
      p-tag-status:not(:last-child) {
        margin-right: 0.5rem;
      }
    `,
  ],
  template: `
    <div class="playground light" title="should show different background colors on light background">
      <p-tag-status>Tag with default props</p-tag-status>
      <p-tag-status [color]="'default'">Tag default</p-tag-status>
      <p-tag-status [color]="'background-surface'">Tag background-surface</p-tag-status>
      <p-tag-status [color]="'neutral-contrast-high'">Tag neutral-contrast-high</p-tag-status>
      <p-tag-status [color]="'notification-neutral'">Tag notification-neutral</p-tag-status>
      <p-tag-status [color]="'notification-success'">Tag notification-success</p-tag-status>
      <p-tag-status [color]="'notification-error'">Tag notification-error</p-tag-status>
      <p-tag-status [color]="'notification-warning'">Tag notification-warning</p-tag-status>
    </div>

    <div class="playground dark" title="should show different background colors on dark background">
      <p-tag-status [theme]="'dark'">Tag with default props</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'default'">Tag default</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'background-surface'">Tag background-surface</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'neutral-contrast-high'">Tag neutral-contrast-high</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'notification-neutral'">Tag notification-neutral</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'notification-success'">Tag notification-success</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'notification-error'">Tag notification-error</p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'notification-warning'">Tag notification-warning</p-tag-status>
    </div>

    <div class="playground light" title="should show different background colors and icons on light background">
      <p-tag-status [icon]="'car'" [color]="'default'">Tag default</p-tag-status>
      <p-tag-status [icon]="'highway'" [color]="'background-surface'">Tag background-surface</p-tag-status>
      <p-tag-status [iconSource]="'./assets/icon-custom-kaixin.svg'">Tag custom icon</p-tag-status>
    </div>

    <div class="playground dark" title="should show different background colors and icons on dark background">
      <p-tag-status [theme]="'dark'" [icon]="'car'" [color]="'default'">Tag default</p-tag-status>
      <p-tag-status [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'">Tag background-surface</p-tag-status>
      <p-tag-status [theme]="'dark'" [iconSource]="'./assets/icon-custom-kaixin.svg'">Tag custom icon</p-tag-status>
    </div>

    <div class="playground light" title="should show different background colors with link on light background">
      <p-tag-status [color]="'default'"><a [href]="'#'">Tag default with link</a></p-tag-status>
      <p-tag-status [color]="'background-surface'"><a [href]="'#'">Tag background-surface with link</a></p-tag-status>
    </div>

    <div class="playground dark" title="should show different background colors with link on dark background">
      <p-tag-status [theme]="'dark'" [color]="'default'"><a [href]="'#'">Tag default with link</a></p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'background-surface'"><a [href]="'#'">Tag background-surface with link</a></p-tag-status>
    </div>

    <div class="playground light" title="should show different background colors with link and icon on light background">
      <p-tag-status [icon]="'car'" [color]="'default'"><a [href]="'#'">Tag default with link</a></p-tag-status>
      <p-tag-status [icon]="'highway'" [color]="'background-surface'"
        ><a [href]="'#'">Tag background-surface with link</a></p-tag-status
      >
    </div>

    <div class="playground dark" title="should show different background colors with link and icon on dark background">
      <p-tag-status [theme]="'dark'" [icon]="'car'" [color]="'default'"><a [href]="'#'">Tag default with link</a></p-tag-status>
      <p-tag-status [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'"
        ><a [href]="'#'">Tag background-surface with link</a></p-tag-status
      >
    </div>

    <div class="playground light" title="should show different background colors with button on light background">
      <p-tag-status [color]="'default'"><button>Tag default with button</button></p-tag-status>
      <p-tag-status [color]="'background-surface'"><button>Tag background-surface with button</button></p-tag-status>
    </div>

    <div class="playground dark" title="should show different background colors with button on dark background">
      <p-tag-status [theme]="'dark'" [color]="'default'"><button>Tag default with button</button></p-tag-status>
      <p-tag-status [theme]="'dark'" [color]="'background-surface'"
        ><button>Tag background-surface with button</button></p-tag-status
      >
    </div>

    <div class="playground light" title="should show different background colors with button and icon on light background">
      <p-tag-status [icon]="'car'" [color]="'default'"><button>Tag default with button</button></p-tag-status>
      <p-tag-status [icon]="'highway'" [color]="'background-surface'"
        ><button>Tag background-surface with button</button></p-tag-status
      >
    </div>

    <div class="playground dark" title="should show different background colors with button and icon on dark background">
      <p-tag-status [theme]="'dark'" [icon]="'car'" [color]="'default'"><button>Tag default with button</button></p-tag-status>
      <p-tag-status [theme]="'dark'" [icon]="'highway'" [color]="'background-surface'"
        ><button>Tag background-surface with button</button></p-tag-status
      >
    </div>

    <div class="playground light" title="should show different multiline tags on light background">
      <div style="width: 100px">
        <p-tag-status [color]="'neutral-contrast-high'">Some multiline tag</p-tag-status>
        <p-tag-status [color]="'neutral-contrast-high'" [icon]="'car'">Some multiline tag</p-tag-status>
        <p-tag-status [color]="'notification-success'"><a [href]="'#'">Some multiline Link</a></p-tag-status>
        <p-tag-status [color]="'notification-success'" [icon]="'car'"><button>Some multiline button</button></p-tag-status>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagStatusComponent {}
