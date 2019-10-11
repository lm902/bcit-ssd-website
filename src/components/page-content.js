import { LitElement, html } from 'lit-element'

export default class PageContent extends LitElement {
  render () {
    return html`
      <slot></slot>
      <footer>
        <p>Programs and courses are subject to change without notice.</p>
      </footer>
    `
  }
}
