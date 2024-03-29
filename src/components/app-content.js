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
        padding: 40px 0;
        width: 100%;
        height: calc(100% - 80px);
        overflow-y: scroll;
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
    this.scrollTop = 0
  }
}

window.customElements.define('app-content', AppContent)
