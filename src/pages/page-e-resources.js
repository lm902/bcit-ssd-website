import { LitElement, html, css } from 'lit-element'
import { eResources } from '../config'

export default class PageEResources extends LitElement {
  render () {
    return html`
      <page-content>
        <dl>
        ${eResources.map(eResource => html`
          <dt><a href="${eResources.link}">${eResource.name}</a></dt>
          <dd>
            ${eResource.description}
          </dd>
        `)}
        </dl>
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
    `
  }
}

window.customElements.define('page-e-resources', PageEResources)
