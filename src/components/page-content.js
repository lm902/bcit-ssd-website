import { LitElement, html, css } from 'lit-element'

export default class PageContent extends LitElement {
  render () {
    return html`
      <slot></slot>
      <footer>
        <p>Programs and courses are subject to change without notice.</p>
      </footer>
    `
  }

  static get styles () {
    return css`
      :host {
        display: block;
        padding: 0 20px;
      }
    `
  }
}

window.customElements.define('page-content', PageContent)
