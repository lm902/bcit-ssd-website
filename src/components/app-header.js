import { LitElement, html, css } from 'lit-element'
import ActionRegistry from '../ActionRegistry.js'
import { pages } from '../config.js'

export default class AppHeader extends LitElement {
  connectedCallback () {
    super.connectedCallback()
    this.updateTitle()
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.updateTitle.bind(this))
  }

  updateTitle () {
    this.title = pages[window.location.hash.substr(3)].title
    console.log('Title update to ' + this.title)
    this.requestUpdate()
  }

  toggleMenu () {
    window.app.actionRegistry.dispatch(ActionRegistry.ActionType.MENU_BUTTON_INVOKE)
  }

  render () {
    return html`
      <a @click="${this.toggleMenu}">
        <svg width="40" height="40">
          <rect x="8" y="11" width="24" height="2" fill="black" />
          <rect x="8" y="19" width="24" height="2" fill="black" />
          <rect x="8" y="27" width="24" height="2" fill="black" />
        </svg>
      </a>
      <h1>${this.title}</h1>
    `
  }

  static get styles () {
    return css`
      :host {
        background: rgba(250, 250, 250, 0.8);
        display: grid;
        height: 40px;
      }
      h1 {
        font-size: 32px;
        font-weight: 300;
        font-family: sans-serif;
        line-height: 40px;
        margin: 0;
        grid-column: 2;
        padding-right: 40px;
      }
      a {
        width: 40px;
        height: 40px;
      }
      @media screen and (min-width: 500px) {
        a {
          display: none;
        }
      }
    `
  }
}

window.customElements.define('app-header', AppHeader)
