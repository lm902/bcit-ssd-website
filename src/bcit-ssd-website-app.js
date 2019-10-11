import { LitElement, html } from 'lit-element'
import './components/app-layout.js'
import './components/app-header.js'
import './components/navigation-menu.js'
import './components/app-content.js'
import ActionRegistry from './ActionRegistry.js'

export default class BcitSsdWebsiteApp extends LitElement {
  constructor () {
    super()
    window.app = this
    this.actionRegistry = new ActionRegistry()
    window.onpopstate = function (event) {
      window.app.actionRegistry.dispatch(ActionRegistry.ActionType.BROWSER_NAVIGATION, event.state)
    }
  }

  connectedCallback () {
    super.connectedCallback()
    if (!window.location.hash) {
      window.location.hash = '#!/Home'
    }
  }

  render () {
    return html`
      <app-layout>
        <app-header slot="header"></app-header>
        <navigation-menu slot="menu"></navigation-menu>
        <app-content slot="content"></app-content>
      </app-layout>
    `
  }
}

window.customElements.define('bcit-ssd-website-app', BcitSsdWebsiteApp)
