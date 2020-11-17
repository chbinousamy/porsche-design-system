import {
  addEventListener,
  getAttribute,
  getBrowser,
  getCssClasses,
  getElementIndex,
  getElementStyle,
  getProperty,
  initAddEventListener,
  reattachElement,
  selectNode,
  setContentWithDesignSystem,
  waitForStencilLifecycle
} from '../helpers';
import { devices, Page } from 'puppeteer';

describe('select-wrapper fake-select', () => {
  let page: Page;

  beforeEach(async () => {
    page = await getBrowser().newPage();
    await initAddEventListener(page);
  });
  afterEach(async () => await page.close());

  const getSelectComponent = () => selectNode(page, 'p-select-wrapper');
  const getSelectFakeInput = () => selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-select');
  const getSelectRealInput = () => selectNode(page, 'p-select-wrapper select');
  const getSelectLabel = () => selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__label');
  const getSelectOptionList = () => selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-option-list');
  const fakeOptionInPosOne = () => selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-option:nth-child(1)');
  const fakeOptionInPosTwo = () => selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-option:nth-child(2)');

  describe('hover state', () => {
    it('should change box-shadow color when fake select is hovered', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );

      const fakeSelect = await getSelectFakeInput();
      const initialBoxShadow = await getElementStyle(fakeSelect, 'boxShadow');

      await fakeSelect.hover();

      expect(await getElementStyle(fakeSelect, 'boxShadow', { waitForTransition: true })).not.toBe(initialBoxShadow);
    });

    it('should change box-shadow color of fake select when label text is hovered', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );

      const fakeSelect = await getSelectFakeInput();
      const labelText = await getSelectLabel();
      const initialBoxShadow = await getElementStyle(fakeSelect, 'boxShadow');

      await labelText.hover();

      expect(await getElementStyle(fakeSelect, 'boxShadow', { waitForTransition: true })).not.toBe(initialBoxShadow);
    });
  });

  describe('custom drop down', () => {
    it('should render', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b" disabled>Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );

      const fakeOptionList = await getSelectOptionList();
      const fakeOptionDisabled = await selectNode(
        page,
        'p-select-wrapper >>> .p-select-wrapper__fake-option--disabled'
      );
      const fakeOptionSelected = await selectNode(
        page,
        'p-select-wrapper >>> .p-select-wrapper__fake-option--selected'
      );
      const activeDescendant = await getAttribute(fakeOptionList, 'aria-activedescendant');
      const selectedDescendantId = (await getProperty(fakeOptionSelected, 'id')) as string;

      expect(fakeOptionList).not.toBeNull();
      expect(fakeOptionDisabled).not.toBeNull();
      expect(await getElementIndex(fakeOptionList, '[aria-selected=true]')).toBe(0);
      expect(await getElementIndex(fakeOptionList, '[aria-disabled=true]')).toBe(1);
      expect(activeDescendant).toEqual(selectedDescendantId);
    });

    it('should render with optgroups', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <optgroup label="Some optgroup label 1">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
            </optgroup>
            <optgroup label="Some optgroup label 1">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
            </optgroup>
          </select>
        </p-select-wrapper>`
      );

      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const fakeOptgroup = await selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-optgroup-label');
      const fakeOptionSelected = await selectNode(
        page,
        'p-select-wrapper >>> .p-select-wrapper__fake-option--selected'
      );
      const activeDescendant = await getAttribute(fakeOptionList, 'aria-activedescendant');
      const selectedDescendantId = (await getProperty(fakeOptionSelected, 'id')) as string;

      const numberOfOptgroups = await select.evaluate((el: HTMLElement) => {
        return el.querySelectorAll('optgroup').length;
      });
      const numberOfFakeOptgroups = await fakeOptionList.evaluate((el: HTMLElement) => {
        return el.querySelectorAll('.p-select-wrapper__fake-optgroup-label').length;
      });

      expect(fakeOptionList).not.toBeNull();
      expect(fakeOptgroup).not.toBeNull();
      expect(await getElementIndex(fakeOptionList, '[aria-selected=true]')).toBe(1);
      expect(activeDescendant).toEqual(selectedDescendantId);
      expect(numberOfOptgroups).toEqual(numberOfFakeOptgroups);
    });

    it('should render with mix of options and optgroup', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <optgroup label="Some optgroup label 2">
              <option value="c">Option C</option>
              <option value="d">Option D</option>
            </optgroup>
          </select>
        </p-select-wrapper>`
      );

      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const fakeOptgroup = await selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-optgroup-label');

      const numberOfOptgroups = await select.evaluate((el: HTMLElement) => {
        return el.querySelectorAll('optgroup').length;
      });
      const numberOfFakeOptgroups = await fakeOptionList.evaluate((el: HTMLElement) => {
        return el.querySelectorAll('.p-select-wrapper__fake-optgroup-label').length;
      });

      expect(fakeOptionList).not.toBeNull();
      expect(fakeOptgroup).not.toBeNull();
      expect(numberOfOptgroups).toEqual(numberOfFakeOptgroups);
    });

    it('should not render if touch support is detected', async () => {
      await page.emulate(devices['iPhone X']);
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const fakeOptionList = await getSelectOptionList();
      expect(fakeOptionList).toBeNull();
    });

    it('should not render if touch support is detected and native is set to false', async () => {
      await page.emulate(devices['iPhone X']);
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label" native="false">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const fakeOptionList = await getSelectOptionList();
      expect(fakeOptionList).toBeNull();
    });

    it('should not render if native prop is set to true', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label" native="true">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const fakeOptionList = await getSelectOptionList();
      expect(fakeOptionList).toBeNull();
    });

    it('should be visible if select is clicked and hidden if clicked outside', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-text>Some text</p-text>
        <p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const select = await getSelectRealInput();
      const text = await selectNode(page, 'p-text');
      const fakeOptionList = await getSelectOptionList();
      const getOpacity = () => getElementStyle(fakeOptionList, 'opacity');

      expect(await getOpacity()).toBe('0');

      await select.click();
      await waitForStencilLifecycle(page);

      expect(await getOpacity()).toBe('1');

      await text.click();
      await waitForStencilLifecycle(page);

      expect(await getOpacity()).toBe('0');

      await select.click();
      await waitForStencilLifecycle(page);

      expect(await getOpacity()).toBe('1');

      await select.click();
      await waitForStencilLifecycle(page);

      expect(await getOpacity()).toBe('0');
    });

    it('should add fake option item if added to native select programmatically', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const getNumberOfOptions = async () =>
        await select.evaluate((el: HTMLElement) => {
          return el.childElementCount;
        });
      const getNumberOfFakeOptions = async () =>
        await fakeOptionList.evaluate((el: HTMLElement) => {
          return el.childElementCount;
        });
      expect(fakeOptionList).not.toBeNull();
      expect(await getNumberOfFakeOptions()).toEqual(await getNumberOfOptions());

      await select.evaluate((el: HTMLSelectElement) => {
        const option = document.createElement('option');
        option.text = 'Test';
        el.add(option, 0);
      });
      const text = await getProperty(
        await selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-option:first-child'),
        'innerHTML'
      );
      expect(text).toContain('Test');
      await waitForStencilLifecycle(page);
      expect(await getNumberOfOptions()).toEqual(await getNumberOfFakeOptions());
    });

    it('should add/remove disabled state to fake option item if added/removed to native select programmatically', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const select = await getSelectRealInput();
      const fakeOptionList = async () => await getSelectOptionList();
      const fakeOption = await selectNode(page, 'p-select-wrapper >>> .p-select-wrapper__fake-option:nth-child(2)');

      await select.evaluate((el: HTMLSelectElement) => (el.options[1].disabled = true));
      await waitForStencilLifecycle(page);

      expect(await getCssClasses(fakeOption)).toContain('p-select-wrapper__fake-option--disabled');
      expect(await getElementIndex(await fakeOptionList(), '.p-select-wrapper__fake-option--disabled')).toBe(1);
    });

    it('should synchronize fake option and native select if selected attribute is set programmatically', async () => {
      await setContentWithDesignSystem(
        page,
        `
      <p-select-wrapper label="Some label">
        <select name="some-name">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
        </select>
      </p-select-wrapper>
    `
      );
      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const fakeOptionA = await fakeOptionInPosOne();
      const fakeOptionB = await fakeOptionInPosTwo();
      const selectedClass = 'p-select-wrapper__fake-option--selected';

      expect(await getCssClasses(fakeOptionA)).toContain(selectedClass);
      expect(await getElementIndex(fakeOptionList, `.${selectedClass}`)).toBe(0);

      await select.evaluate((el: HTMLSelectElement) => (el.options[1].setAttribute('selected', 'selected')));
      await waitForStencilLifecycle(page);

      expect(await getCssClasses(fakeOptionA)).not.toContain(selectedClass);
      expect(await getCssClasses(fakeOptionB)).toContain(selectedClass);
      expect(await getElementIndex(fakeOptionList, `.${selectedClass}`)).toBe(1);

    });

    it('should not add selected state to fake option item if added to native select programmatically as JS prop', async () => {
      /**
       * This test is for Browser specific behaviour which does not reflect the "selected" property as attribute and will therefore not be observed by the MutationObserver
       */
      await setContentWithDesignSystem(
        page,
        `
      <p-select-wrapper label="Some label">
        <select name="some-name">
          <option value="a">Option A</option>
          <option value="b">Option B</option>
          <option value="c">Option C</option>
        </select>
      </p-select-wrapper>
    `
      );
      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const fakeOptionA = await fakeOptionInPosOne();
      const fakeOptionB = await fakeOptionInPosTwo();
      const selectedClass = 'p-select-wrapper__fake-option--selected';

      expect(await getCssClasses(fakeOptionA)).toContain(selectedClass);
      expect(await getElementIndex(fakeOptionList, `.${selectedClass}`)).toBe(0);

      await select.evaluate((el: HTMLSelectElement) => (el.options[0].selected = false));
      await select.evaluate((el: HTMLSelectElement) => (el.options[1].selected = true));
      await waitForStencilLifecycle(page);

      expect(await getCssClasses(fakeOptionA)).toContain(selectedClass);
      expect(await getCssClasses(fakeOptionB)).not.toContain(selectedClass);
      expect(await getElementIndex(fakeOptionList, `.${selectedClass}`)).toBe(0);

    });

    it('should hide/show fake option item if hidden attribute is added/removed to native select programmatically', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">Option A</option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const select = await getSelectRealInput();
      const fakeOptionList = await getSelectOptionList();
      const fakeOption = await fakeOptionInPosTwo();

      await select.evaluate((el: HTMLSelectElement) => (el.options[1].hidden = true));
      await waitForStencilLifecycle(page);

      expect(await getCssClasses(fakeOption)).toContain('p-select-wrapper__fake-option--hidden');
      expect(await getElementIndex(fakeOptionList, '.p-select-wrapper__fake-option--hidden')).toBe(1);

      await select.evaluate((el: HTMLSelectElement) => (el.options[1].hidden = false));
      await waitForStencilLifecycle(page);

      expect(await getCssClasses(fakeOption)).not.toContain('p-select-wrapper__fake-option--hidden');
    });

    it('should not render initial hidden option fields', async () => {
      await setContentWithDesignSystem(
        page,
        `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value hidden></option>
            <option value="b">Option B</option>
            <option value="c">Option C</option>
          </select>
        </p-select-wrapper>`
      );
      const fakeOption = await fakeOptionInPosOne();

      expect(await getCssClasses(fakeOption)).toContain('p-select-wrapper__fake-option--hidden');
    });

    describe('dropdown position', () => {
      it('should set direction to up', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label" dropdown-direction="up">
            <select name="some-name">
              <option value="a">Option A</option>
              <option value="b" disabled>Option B</option>
              <option value="c">Option C</option>
            </select>
          </p-select-wrapper>`
        );

        const fakeOptionListDirectionUp = await selectNode(
          page,
          'p-select-wrapper >>> .p-select-wrapper__fake-option-list--direction-up'
        );

        expect(fakeOptionListDirectionUp).not.toBeNull();
      });

      it('should set direction to down', async () => {
        await page.setViewport({
          width: 800,
          height: 600
        });
        await setContentWithDesignSystem(
          page,
          `
      <div style="height: 500px;"></div>
      <p-select-wrapper label="Some label" dropdown-direction="down">
        <select name="some-name">
          <option value="a">Option A</option>
          <option value="b" disabled>Option B</option>
          <option value="c">Option C</option>
        </select>
      </p-select-wrapper>`
        );

        const fakeOptionListDirectionDown = await selectNode(
          page,
          'p-select-wrapper >>> .p-select-wrapper__fake-option-list--direction-down'
        );

        expect(fakeOptionListDirectionDown).not.toBeNull();
      });

      it('should auto position to top if bottom space is less than dropdown height', async () => {
        await page.setViewport({
          width: 800,
          height: 600
        });
        await setContentWithDesignSystem(
          page,
          `<div style="height: 400px;"></div>
          <p-select-wrapper label="Some label">
            <select name="some-name">
              <option value="a">Option A</option>
              <option value="b" disabled>Option B</option>
              <option value="c">Option C</option>
              <option value="d">Option D</option>
              <option value="e">Option E</option>
              <option value="f">Option F</option>
              <option value="g">Option G</option>
              <option value="h">Option H</option>
            </select>
          </p-select-wrapper>`
        );

        const select = await getSelectRealInput();
        await select.click();
        await waitForStencilLifecycle(page);

        const fakeOptionListDirectionUp = await selectNode(
          page,
          'p-select-wrapper >>> .p-select-wrapper__fake-option-list--direction-up'
        );

        expect(fakeOptionListDirectionUp).not.toBeNull();
      });
    });

    describe('keyboard and click events', () => {
      const getActiveDescendant = async () => await getAttribute(await getSelectOptionList(), 'aria-activedescendant');
      const getOpacity = async () => await getElementStyle(await getSelectOptionList(), 'opacity');
      const selectHasFocus = () => page.evaluate(() => document.activeElement === document.querySelector('select'));
      const getSelectedIndex = () =>
        page.evaluate(() => {
          return document.querySelector('select').selectedIndex;
        });
      const getHighlightedFakeOption = async () =>
        await getElementIndex(await getSelectOptionList(), '.p-select-wrapper__fake-option--highlighted');
      const getSelectedFakeOption = async () =>
        await getElementIndex(await getSelectOptionList(), '.p-select-wrapper__fake-option--selected');

      it('should highlight first position on arrow down', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
          <select name="some-name">
            <option value="a">A Option</option>
            <option value="b">B Option</option>
            <option value="c">C Option</option>
          </select>
        </p-select-wrapper>`
        );
        const select = await getSelectRealInput();

        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(0);

        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('1');
        expect(await getHighlightedFakeOption()).toBe(1);
        expect(await getSelectedIndex()).toBe(0);

        await page.keyboard.press('Enter');
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('0');
        expect(await getHighlightedFakeOption()).toBe(1);
        expect(await getSelectedFakeOption()).toBe(1);
        expect(await getElementIndex(await getSelectOptionList(), '[aria-selected=true]')).toBe(1);
        expect(await getSelectedIndex()).toBe(1);

        expect(calls).toBe(1);
        expect(await getActiveDescendant()).toEqual(`option-${await getSelectedFakeOption()}`);
      });

      it('should have the correct aria-expanded value if open/closed', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </select>
          </p-select-wrapper>`
        );

        const host = await selectNode(page, 'p-select-wrapper');
        const fakeInput = await getSelectOptionList();

        expect(await getAttribute(fakeInput, 'aria-expanded')).toBe('false');

        await host.click();
        await waitForStencilLifecycle(page);

        expect(await getAttribute(fakeInput, 'aria-expanded')).toBe('true');
      });

      it('should show aria-selected attribute on selected fake option on click', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name">
              <option value="a">Option A</option>
              <option value="b">Option B</option>
              <option value="c">Option C</option>
            </select>
          </p-select-wrapper>`
        );

        const select = await getSelectRealInput();
        const fakeOptionA = await fakeOptionInPosOne();
        const fakeOptionB = await fakeOptionInPosTwo();

        expect(await getAttribute(fakeOptionA, 'aria-selected')).toBe('true');
        expect(await getAttribute(fakeOptionB, 'aria-selected')).toBeNull();

        await select.click();
        await fakeOptionB.click();
        await waitForStencilLifecycle(page);

        expect(await getAttribute(fakeOptionA, 'aria-selected')).toBeNull();
        expect(await getAttribute(fakeOptionB, 'aria-selected')).toBe('true');
      });

      it('should skip disabled option on arrow down', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name">
              <option value="a">A Option</option>
              <option value="b" disabled>B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );

        await page.keyboard.press('Tab');
        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
      });

      it('should skip disabled option on arrow up', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b" disabled>B Option</option>
              <option value="c" selected>C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await waitForStencilLifecycle(page);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);

        await page.keyboard.press('ArrowUp');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
      });

      // TODO: remove duplicate?
      it('should skip disabled option on arrow up', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b" disabled>B Option</option>
              <option value="c" selected>C Option</option>
            </select>
          </p-select-wrapper>`
        );

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);

        await page.keyboard.press('ArrowUp');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
      });

      it('should highlight correct position on multiple key actions', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b" disabled>B Option</option>
              <option value="c">C Option</option>
              <option value="d">D Option</option>
              <option value="e">E Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);

        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('1');
        expect(await getHighlightedFakeOption()).toBe(3);

        await page.keyboard.press('ArrowUp');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
      });

      it('should open fake select with spacebar', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();

        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        expect(await getOpacity()).toBe('0');

        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        expect(await getOpacity()).toBe('1');
        expect(calls).toBe(0);
      });

      it('should select correct option with spacebar', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();

        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        expect(await getOpacity()).toBe('0');

        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        expect(await getOpacity()).toBe('1');

        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);
        expect(await getHighlightedFakeOption()).toBe(1);

        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        expect(calls).toBe(1);
        expect(await getSelectedIndex()).toBe(1);
      });

      it('should change selected option on ArrowLeft while list is hidden', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();
        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowLeft');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
        expect(await getSelectedFakeOption()).toBe(2);
        expect(await getSelectedIndex()).toBe(2);
        expect(calls).toBe(1);
      });

      it('should change selected option on ArrowRight while list is hidden', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();
        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowRight');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(1);
        expect(await getSelectedFakeOption()).toBe(1);
        expect(await getSelectedIndex()).toBe(1);
        expect(calls).toBe(1);
      });

      it('should change selected option on ArrowLeft while list is open and should close the list', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();
        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowLeft');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
        expect(await getSelectedFakeOption()).toBe(2);
        expect(await getSelectedIndex()).toBe(2);
        expect(await getOpacity()).toBe('0');
        expect(calls).toBe(1);
      });

      it('should change selected option on ArrowRight while list is open and should close the list', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();
        let calls = 0;
        await addEventListener(select, 'change', () => calls++);

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowRight');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(1);
        expect(await getSelectedFakeOption()).toBe(1);
        expect(await getSelectedIndex()).toBe(1);
        expect(await getOpacity()).toBe('0');
        expect(calls).toBe(1);
      });

      it('should not select option on Escape', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);
        expect(await getHighlightedFakeOption()).toBe(1);

        await page.keyboard.press('Escape');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(0);
        expect(await getSelectedIndex()).toBe(0);
        expect(await getOpacity()).toBe('0');
      });

      it('should not select option on PageDown while list is hidden', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('PageDown');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(0);
        expect(await getSelectedIndex()).toBe(0);
      });

      it('should not select option on PageUp while list is hidden', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('PageUp');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(0);
        expect(await getSelectedIndex()).toBe(0);
      });

      it('should highlight and select last option on PageDown while list is visible', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('PageDown');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
        expect(await getSelectedFakeOption()).toBe(0);
        expect(await getSelectedIndex()).toBe(0);

        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(2);
        expect(await getSelectedFakeOption()).toBe(2);
        expect(await getSelectedIndex()).toBe(2);
      });

      it('should highlight and select first option on PageUp while list is visible', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c" selected>C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('PageUp');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(2);
        expect(await getSelectedIndex()).toBe(2);

        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);

        expect(await getHighlightedFakeOption()).toBe(0);
        expect(await getSelectedFakeOption()).toBe(0);
        expect(await getSelectedIndex()).toBe(0);
      });

      it('should select option through keyboard search', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('c');
        await page.waitForTimeout(120);

        expect(await getHighlightedFakeOption()).toBe(2);
        expect(await getSelectedFakeOption()).toBe(2);
        expect(await getSelectedIndex()).toBe(2);
      });

      it('should open/close fake select on mouseclick', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();

        await select.click();
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('1');
        expect(await getHighlightedFakeOption()).toBe(0);

        await select.click();
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('0');
        expect(await getHighlightedFakeOption()).toBe(0);
      });

      it('should select second option on mouseclick', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();
        const fakeOptionB = await fakeOptionInPosTwo();

        await select.click();
        await fakeOptionB.click();
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('0');
        expect(await getHighlightedFakeOption()).toBe(1);
        expect(await getSelectedFakeOption()).toBe(1);
        expect(await getSelectedIndex()).toBe(1);
      });

      it('should close fakeSelect on Tab', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('Space');
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('1');

        await page.keyboard.press('Tab');
        await waitForStencilLifecycle(page);

        expect(await getOpacity()).toBe('0');
        expect(await selectHasFocus()).toBe(false);
      });

      it('should remove and re-attach events', async () => {
        await setContentWithDesignSystem(
          page,
          `<p-select-wrapper label="Some label">
            <select name="some-name" id="realSelect">
              <option value="a">A Option</option>
              <option value="b">B Option</option>
              <option value="c">C Option</option>
            </select>
          </p-select-wrapper>`
        );
        const select = await getSelectRealInput();

        let mouseDownEventCounter = 0;
        let keyDownEventCounter = 0;
        await addEventListener(select, 'mousedown', () => mouseDownEventCounter++);
        await addEventListener(select, 'keydown', () => keyDownEventCounter++);

        // Remove and re-attach component to check if events are duplicated / fire at all
        await reattachElement(page, 'p-select-wrapper');

        await select.click();
        await waitForStencilLifecycle(page);

        expect(mouseDownEventCounter).toBe(1);

        await select.click();
        await waitForStencilLifecycle(page);

        expect(mouseDownEventCounter).toBe(2);

        await page.keyboard.press('ArrowDown');
        await waitForStencilLifecycle(page);
        await page.keyboard.press('ArrowDown');

        expect(keyDownEventCounter).toBe(2);
      });
    });
  });
});
