import { getVisualRegressionStatesTester, getVisualRegressionTester, testOptions } from '../helpers';
import {
  CSS_ANIMATION_DURATION,
  forceFocused,
  forceFocusedHovered,
  forceHovered,
  setContentWithDesignSystem,
} from '../../e2e/helpers';
import { Theme } from '@porsche-design-system/utilities';

describe('Link Social', () => {
  it('should have no visual regression', async () => {
    const vrt = getVisualRegressionTester();
    expect(
      await vrt.test(
        'link-social',
        async () => {
          await vrt.goTo('/#link-social');
        },
        testOptions
      )
    ).toBeFalsy();
  });
  it('should have no visual regression for :hover + :focus-visible', async () => {
    const vrt = getVisualRegressionStatesTester();
    expect(
      await vrt.test('link-social-states', async () => {
        const page = await vrt.getPage();

        const head = `
          <link rel="stylesheet" href="styles.css" />
          <style type="text/css">p-link-social { margin-right: 16px; margin-top: 16px; }</style>`;

        const getElements = (theme: Theme = 'light') => `
          <p-link-social theme="${theme}" href="https://www.facebook.com/" icon="logo-facebook"target="_blank" rel="nofollow noopener">Facebook</p-link-social>
          <p-link-social theme="${theme}" href="https://www.google.com/" icon="logo-google"target="_blank" rel="nofollow noopener">Google</p-link-social>
          <p-link-social theme="${theme}" href="https://www.instagram.com/" icon="logo-instagram"target="_blank" rel="nofollow noopener">Instagram</p-link-social>
          <p-link-social theme="${theme}" href="https://www.linkedin.com/" icon="logo-linkedin"target="_blank" rel="nofollow noopener">LinkedIn</p-link-social>
          <p-link-social theme="${theme}" href="https://www.pinterest.com/" icon="logo-pinterest"target="_blank" rel="nofollow noopener">Pinterest</p-link-social>
          <p-link-social theme="${theme}" href="https://www.twitter.com/" icon="logo-twitter"target="_blank" rel="nofollow noopener">Twitter</p-link-social>
          <p-link-social theme="${theme}" href="https://www.wechat.com/" icon="logo-wechat"target="_blank" rel="nofollow noopener">Wechat</p-link-social>
          <p-link-social theme="${theme}" href="https://wa.me/491525557912" icon="logo-whatsapp"target="_blank" rel="nofollow noopener">Whatsapp</p-link-social>
          <p-link-social theme="${theme}" href="https://www.xing.com" icon="logo-xing"target="_blank" rel="nofollow noopener">XING</p-link-social>
          <p-link-social theme="${theme}" href="https://www.youtube.com" icon="logo-youtube"target="_blank" rel="nofollow noopener">Youtube</p-link-social>`;

        const body = `
          <div class="playground light hovered">
           ${getElements()}
          </div>
          <div class="playground dark hovered">
            ${getElements('dark')}
          </div>
          <div class="playground light focused">
            ${getElements()}
          </div>
          <div class="playground dark focused">
            ${getElements('dark')}
          </div>
          <div class="playground light focused-hovered">
            ${getElements()}
          </div>
          <div class="playground dark focused-hovered">
            ${getElements('dark')}
          </div>`;

        await setContentWithDesignSystem(page, body, { injectIntoHead: head });

        await forceHovered(page, '.hovered > p-link-social >>> a');
        await forceFocused(page, '.focused > p-link-social >>> a');
        await forceFocusedHovered(page, '.focused-hovered > p-link-social >>> a');

        //wait for all style transitions to finish
        await page.waitForTimeout(CSS_ANIMATION_DURATION);
      })
    ).toBeFalsy();
  });
});
