import { html, fixture, expect } from '@open-wc/testing';

import { CamaoWebPrototype } from '../src/CamaoWebPrototype.js';
import '../src/camao-web-prototype.js';

describe('CamaoWebPrototype', () => {
  let element: CamaoWebPrototype;
  beforeEach(async () => {
    element = await fixture(html`<camao-web-prototype></camao-web-prototype>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
