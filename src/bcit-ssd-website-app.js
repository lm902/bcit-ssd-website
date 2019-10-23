import { LitElement, html } from 'lit-element'
import './components/app-layout'
import './components/app-header'
import './components/navigation-menu'
import './components/app-content'
import ActionRegistry from './ActionRegistry'

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
    setInterval(() => {
      for (const e of document.querySelectorAll('html>*, body>*')) {
        if (!['head', 'body', 'bcit-ssd-website-app'].includes(e.tagName.toLowerCase())) {
          console.log('Malicious injected element removed', e)
          e.remove()
        }
      }
    }, 200)
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
