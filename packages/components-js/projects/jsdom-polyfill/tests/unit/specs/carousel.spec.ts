import { componentsReady } from '@porsche-design-system/components-js';
import { getByRoleShadowed } from '@porsche-design-system/components-js/testing';
import userEvent from '@testing-library/user-event';

const getMarkup = (): string => {
  return `<p-carousel heading="Some heading">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</p-carousel>`;
};

it('should have initialized shadow dom', async () => {
  document.body.innerHTML = getMarkup();
  expect(await componentsReady()).toBe(1);

  const el = document.body.firstElementChild;
  expect(el.shadowRoot).not.toBeNull();
  expect(el.className).toBe('hydrated');
});

it('should have working events', async () => {
  document.body.innerHTML = getMarkup() + `<div id="debug">Event Counter: <span>0</span></div>`;
  await componentsReady();

  const el = document.body.firstElementChild;
  el.addEventListener('carouselChange', () => {
    debugEl.querySelector('span').innerHTML = '1';
  });

  const debugEl = document.querySelector('#debug');
  expect(debugEl.innerHTML).toBe('Event Counter: <span>0</span>');

  const button = getByRoleShadowed('button');
  await userEvent.click(button);
  expect(debugEl.innerHTML).toBe('Event Counter: <span>1</span>');
});
