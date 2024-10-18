import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-canvas-example',
  styles: [
    `
      body {
        overflow-x: hidden;
      }

      .-col-span-full-1 {
        grid-column: 1 / -1;
      }

      .-col-span-full-2 {
        grid-column: 2 / -2;
      }

      .-col-span-full-3 {
        grid-column: 3 / -3;
      }

      .-col-span-4 {
        grid-column: span 4;
      }

      .tile {
        margin-top: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        background: lightpink;
      }
    `,
  ],
  template: `
    <p-canvas>
      <a slot="title" href="#">App Name</a>

      <p-text class="-col-span-full-1">Content</p-text>

      <div class="tile -col-span-4">Grid span 4x</div>
      <div class="tile -col-span-4">Grid span 4x</div>
      <div class="tile -col-span-4">Grid span 4x</div>

      <div class="tile -col-span-full-1">12 Grid columns</div>
      <div class="tile -col-span-full-2">10 Grid columns</div>
      <div class="tile -col-span-full-3">8 Grid columns</div>

      <p-text slot="footer" class="-col-span-full-1">Footer</p-text>
      <div slot="footer" class="tile -col-span-full-1">12 Grid columns</div>

      <div slot="sidebar-start">
        <p-text>Sidebar Start</p-text>
      </div>

      <div slot="sidebar-end">
        <p-text>Sidebar End</p-text>
      </div>
    </p-canvas>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasExampleComponent {}
