import { LitElement, html, css } from 'lit-element'
import '../components/page-content'

export default class PageSchedule extends LitElement {
  render () {
    return html`
      <page-content>
        
      </page-content>
    `
  }

  static get styles () {
    return css`
    `
  }
}

window.customElements.define('page-schedule', PageSchedule)
