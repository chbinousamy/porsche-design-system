import type { ConsoleMessage, ElementHandle, Page } from 'puppeteer';
import { waitForComponentsReady } from './stencil';

export const selectNode = async (page: Page, selector: string): Promise<ElementHandle> => {
  const selectorParts = selector.split('>>>');
  const shadowRootSelectors =
    selectorParts.length > 1
      ? selectorParts
          .slice(1)
          .map((x) => `.shadowRoot.querySelector('${x.trim()}')`)
          .join('')
      : '';
  return (
    await page.evaluateHandle(`document.querySelector('${selectorParts[0].trim()}')${shadowRootSelectors}`)
  ).asElement() as ElementHandle;
};

export const getOuterHTML = (el: ElementHandle): Promise<string> => el.evaluate((el) => el.outerHTML);

const BASE_URL = 'http://localhost:5173';

export const goto = async (page: Page, url: string) => {
  await page.goto(`${BASE_URL}/${url}`);
  await page.waitForSelector('html.hydrated');
  await waitForComponentsReady(page);

  // it looks like vue event binding is a bit unreliable and happens after onMounted
  await new Promise((resolve) => setTimeout(resolve, 100));
};

const consoleMessages: ConsoleMessage[] = [];

export const initConsoleObserver = (page: Page): void => {
  consoleMessages.length = 0; // reset

  page.on('console', (msg) => {
    consoleMessages.push(msg);
    if (msg.type() === 'error') {
      const { description } = msg.args()[0].remoteObject();
      if (description) {
        console.error(description);
      }
    }
  });
};
export const getConsoleErrorsAmount = () => consoleMessages.filter((x) => x.type() === 'error').length;
export const getConsoleWarningsAmount = () => consoleMessages.filter((x) => x.type() === 'warning').length;
