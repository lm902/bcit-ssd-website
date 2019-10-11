import { LitElement, html, css } from 'lit-element'
import { pages } from '../config'
import ActionRegistry from '../ActionRegistry'
import '../pages/pages'

export default class AppContent extends LitElement {
  render () {
    return html`<slot></slot>`
  }

  static get styles () {
    return css`
      :host {
        display: block;
        padding-top: 40px;
        width: 100%;
        height: calc(100% - 40px);
        overflow: scroll;
      }
    `
  }

  connectedCallback () {
    super.connectedCallback()
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.updateContent.bind(this))
    this.updateContent()
  }

  updateContent () {
    const name = pages[window.location.hash.substr(3)].content
    console.log('Update content to ' + name)
    this.innerHTML = `<${name}></${name}>`
  }
}

window.customElements.define('app-content', AppContent)
