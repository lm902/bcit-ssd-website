import { LitElement, html, css } from 'lit-element'
import { eResources } from '../config'

export default class PageEResources extends LitElement {
  render () {
    return html`
      <page-content>
        ${Object.entries(eResources).map(category => html`
          <h1>${category[0]}</h1>
          <dl>
            ${category[1].map(eResource => html`
              <dt><a href="${eResource.link}">${eResource.name}</a></dt>
              <dd>
                ${eResource.description}
              </dd>
            `)}
          </dl>
        `)}
      </page-content>
    `
  }

  static get styles () {
    return css`
      dt {
        margin: 10px 20px;
        font-weight: bold;
      }
      a {
        color: var(--primary-color);
        text-decoration: none;
      }
      h1 {
        font-weight: normal;
      }
    `
  }
}

window.customElements.define('page-e-resources', PageEResources)
