/* Auto Generated File */
import type { NextPage } from 'next';
import { PLink } from '@porsche-design-system/components-react/ssr';

const LinkPage: NextPage = (): JSX.Element => {
  const style = `
    @media only screen and (min-width: 760px) {
      #app,
      :host {
        display: grid;
        grid-template-columns: repeat(2, 50%);
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />

      <div className="playground light auto-layout" title="should render primary with label only">
        <PLink variant="primary" href="https://www.porsche.com">Some label</PLink>
        <PLink variant="primary"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary with label only on dark theme">
        <PLink variant="primary" href="https://www.porsche.com" theme="dark">Some label</PLink>
        <PLink variant="primary" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render primary with label and icon">
        <PLink variant="primary" href="https://www.porsche.com" icon="arrow-right">Some label</PLink>
        <PLink variant="primary" icon="arrow-right"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary with label and icon on dark theme">
        <PLink variant="primary" href="https://www.porsche.com" icon="arrow-right" theme="dark">Some label</PLink>
        <PLink variant="primary" icon="arrow-right" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render primary without label">
        <PLink variant="primary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right">Some label</PLink>
        <PLink variant="primary" hideLabel={true} icon="arrow-right">
          <a href="https://www.porsche.com">Some label</a>
        </PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary without label on dark theme">
        <PLink variant="primary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right" theme="dark"
          >Some label
        </PLink>
        <PLink variant="primary" hideLabel={true} icon="arrow-right" theme="dark">
          <a href="https://www.porsche.com">Some label</a>
        </PLink>
      </div>

      <div className="playground light auto-layout" title="should render primary as default with label only">
        <PLink href="https://www.porsche.com">Some label</PLink>
        <PLink><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary as default with label only on dark theme">
        <PLink href="https://www.porsche.com" theme="dark">Some label</PLink>
        <PLink theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render primary as default with label and icon">
        <PLink href="https://www.porsche.com" icon="arrow-right">Some label</PLink>
        <PLink icon="arrow-right"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary as default with label and icon on dark theme">
        <PLink href="https://www.porsche.com" icon="arrow-right" theme="dark">Some label</PLink>
        <PLink icon="arrow-right" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render primary as default without label">
        <PLink href="https://www.porsche.com" hideLabel={true} icon="arrow-right">Some label</PLink>
        <PLink hideLabel={true} icon="arrow-right"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render primary as default without label on dark theme">
        <PLink theme="dark" href="https://www.porsche.com" hideLabel={true} icon="arrow-right">Some label</PLink>
        <PLink hideLabel={true} icon="arrow-right" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>

      <div className="playground light auto-layout" title="should render secondary with label only">
        <PLink variant="secondary" href="https://www.porsche.com">Some label</PLink>
        <PLink variant="secondary"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render secondary with label only on dark theme">
        <PLink variant="secondary" href="https://www.porsche.com" theme="dark">Some label</PLink>
        <PLink variant="secondary" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render secondary with label and icon">
        <PLink variant="secondary" href="https://www.porsche.com" icon="arrow-right">Some label</PLink>
        <PLink variant="secondary" icon="arrow-right"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground dark auto-layout" title="should render secondary with label and icon on dark theme">
        <PLink variant="secondary" href="https://www.porsche.com" icon="arrow-right" theme="dark">Some label</PLink>
        <PLink variant="secondary" icon="arrow-right" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div className="playground light auto-layout" title="should render secondary without label">
        <PLink variant="secondary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right">Some label</PLink>
        <PLink variant="secondary" hideLabel={true} icon="arrow-right"
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>
      <div className="playground dark auto-layout" title="should render secondary without label on dark theme">
        <PLink variant="secondary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right" theme="dark"
          >Some label
        </PLink>
        <PLink variant="secondary" hideLabel={true} icon="arrow-right" theme="dark"
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>

      <div
        className="playground light auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) with label only"
      >
        <PLink variant="tertiary" href="https://www.porsche.com">Some label</PLink>
        <PLink variant="tertiary"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div
        className="playground dark auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) with label only on dark theme"
      >
        <PLink variant="tertiary" href="https://www.porsche.com" theme="dark">Some label</PLink>
        <PLink variant="tertiary" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div
        className="playground light auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) with label and icon"
      >
        <PLink variant="tertiary" href="https://www.porsche.com" icon="arrow-right">Some label</PLink>
        <PLink variant="tertiary" icon="arrow-right"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div
        className="playground dark auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) with label and icon on dark theme"
      >
        <PLink variant="tertiary" href="https://www.porsche.com" icon="arrow-right" theme="dark">Some label</PLink>
        <PLink variant="tertiary" icon="arrow-right" theme="dark"><a href="https://www.porsche.com">Some label</a></PLink>
      </div>
      <div
        className="playground light auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) without label"
      >
        <PLink variant="tertiary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right">Some label</PLink>
        <PLink variant="tertiary" hideLabel={true} icon="arrow-right"
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>
      <div
        className="playground dark auto-layout"
        title="should render secondary if tertiary prop is set (deprecated) without label on dark theme"
      >
        <PLink variant="tertiary" href="https://www.porsche.com" hideLabel={true} icon="arrow-right" theme="dark"
          >Some label
        </PLink>
        <PLink variant="tertiary" hideLabel={true} icon="arrow-right" theme="dark"
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>

      <div className="playground light auto-layout" title="should render primary with responsive label">
        <PLink
          variant="primary"
          hideLabel={{ base: true, xs: false, s: true, m: false, l: true, xl: false }}
          icon="arrow-right"
          href="https://www.porsche.com"
        >
          Some label
        </PLink>
      </div>

      <div className="playground dark auto-layout" title="should render primary with responsive label on dark theme">
        <PLink
          theme="dark"
          variant="primary"
          hideLabel={{ base: true, xs: false, s: true, m: false, l: true, xl: false }}
          icon="arrow-right"
          href="https://www.porsche.com"
        >
          Some label
        </PLink>
      </div>

      <div className="playground light auto-layout" title="should render link with specific icon">
        <PLink icon="phone" href="https://www.porsche.com">Some label</PLink>
        <PLink iconSource="./assets/icon-custom-kaixin.svg" href="https://www.porsche.com">Some label</PLink>
        <PLink icon="phone" href="https://www.porsche.com">Some label</PLink>
        <PLink iconSource="./assets/icon-custom-kaixin.svg" href="https://www.porsche.com">Some label</PLink>
        <PLink icon="phone" variant="secondary" href="https://www.porsche.com">Some label</PLink>
        <PLink iconSource="./assets/icon-custom-kaixin.svg" variant="secondary" href="https://www.porsche.com"
          >Some label
        </PLink>
      </div>

      <div className="playground dark auto-layout" title="should render link with specific icon on dark theme">
        <PLink theme="dark" icon="phone" href="https://www.porsche.com">Some label</PLink>
        <PLink theme="dark" iconSource="./assets/icon-custom-kaixin.svg" href="https://www.porsche.com">Some label</PLink>
        <PLink theme="dark" icon="phone" href="https://www.porsche.com">Some label</PLink>
        <PLink theme="dark" iconSource="./assets/icon-custom-kaixin.svg" href="https://www.porsche.com">Some label</PLink>
        <PLink theme="dark" icon="phone" variant="secondary" href="https://www.porsche.com">Some label</PLink>
        <PLink theme="dark" iconSource="./assets/icon-custom-kaixin.svg" variant="secondary" href="https://www.porsche.com"
          >Some label
        </PLink>
      </div>

      <div className="playground light auto-layout" title="should render with multiline label with icon">
        <PLink style={{ width: '15rem' }} icon="arrow-right" href="https://www.porsche.com"
          >Lorem ipsum dolor sit amet, consetetur sadipscing
        </PLink>
        <PLink style={{ width: '15rem' }} icon="arrow-right">
          <a href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
        </PLink>
      </div>

      <div className="playground dark auto-layout" title="should render with multiline label with icon on dark theme">
        <PLink theme="dark" style={{ width: '15rem' }} icon="arrow-right" href="https://www.porsche.com"
          >Lorem ipsum dolor sit amet, consetetur sadipscing
        </PLink>
        <PLink theme="dark" style={{ width: '15rem' }} icon="arrow-right">
          <a href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
        </PLink>
      </div>

      <div className="playground light auto-layout" title="should render with multiline label without icon">
        <PLink style={{ width: '15rem' }} href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing</PLink>
        <PLink style={{ width: '15rem' }}>
          <a href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
        </PLink>
      </div>

      <div className="playground dark auto-layout" title="should render with multiline label without icon on dark theme">
        <PLink theme="dark" style={{ width: '15rem' }} href="https://www.porsche.com"
          >Lorem ipsum dolor sit amet, consetetur sadipscing</PLink
        >
        <PLink theme="dark" style={{ width: '15rem' }}>
          <a href="https://www.porsche.com">Lorem ipsum dolor sit amet, consetetur sadipscing</a>
        </PLink>
      </div>

      <div className="playground light auto-layout" title="should render with centered text/icon if set to 100% width">
        <PLink variant="primary" href="https://www.porsche.com" style={{ width: '100%' }}>Some label</PLink>
        <PLink variant="primary" style={{ width: '100%' }}><a href="https://www.porsche.com">Some label</a></PLink>
        <PLink variant="primary" icon="arrow-right" href="https://www.porsche.com" style={{ width: '100%' }}>Some label</PLink>
        <PLink variant="primary" icon="arrow-right" style={{ width: '100%' }}
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
        <PLink variant="primary" hideLabel={true} icon="arrow-right" href="https://www.porsche.com" style={{ width: '100%' }}
          >Some label
        </PLink>
        <PLink variant="primary" hideLabel={true} icon="arrow-right" style={{ width: '100%' }}
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>

      <div
        className="playground dark auto-layout"
        title="should render with centered text/icon if set to 100% width on dark theme"
      >
        <PLink theme="dark" variant="primary" href="https://www.porsche.com" style={{ width: '100%' }}>Some label</PLink>
        <PLink theme="dark" variant="primary" style={{ width: '100%' }}><a href="https://www.porsche.com">Some label</a></PLink>
        <PLink theme="dark" variant="primary" icon="arrow-right" href="https://www.porsche.com" style={{ width: '100%' }}
          >Some label</PLink
        >
        <PLink theme="dark" variant="primary" icon="arrow-right" style={{ width: '100%' }}
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
        <PLink
          theme="dark"
          variant="primary"
          hideLabel={true}
          icon="arrow-right"
          href="https://www.porsche.com"
          style={{ width: '100%' }}
          >Some label
        </PLink>
        <PLink theme="dark" variant="primary" hideLabel={true} icon="arrow-right" style={{ width: '100%' }}
          ><a href="https://www.porsche.com">Some label</a></PLink
        >
      </div>
    </>
  );
};

export default LinkPage;
