import { LitElement, html, css } from 'lit-element'
import ActionRegistry from '../ActionRegistry'

export default class AppLayout extends LitElement {
  render () {
    return html`
      <slot name="header" id="header"></slot>
      <slot name="menu" id="menu"></slot>
      <slot name="content" id="content"></slot>
    `
  }

  connectedCallback () {
    super.connectedCallback()
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.toggleMenu.bind(this))
    window.app.actionRegistry.register(ActionRegistry.ActionType.MENU_BUTTON_INVOKE, this.toggleMenu.bind(this))
  }

  toggleMenu () {
    this.shadowRoot.getElementById('menu').classList.toggle('show')
  }

  static get styles () {
    return css`
      :host {
        display: grid;
        height: 100vh;
        width: 100vw;
        grid-template-rows: 40px 1fr;
        touch-action: manipulation;
      }
      slot {
        display: block;
      }
      #header, #menu {
        z-index: 1000;
      }
      @media screen and (min-width: 500px) {
        :host {
          grid-template-columns: 300px 1fr;
        }
        #header {
          grid-row: 1;
          grid-column: 1 / 3;
        }
        #menu {
          grid-row: 2;
          grid-column: 1;
        }
        #content {
          grid-row: 1 / 3;
          grid-column: 2;
        }
      }
      @media screen and (max-width: 499px) {
        #header {
          grid-row: 1;
          grid-column: 1;
        }
        #menu {
          grid-row: 2;
          grid-column: 1;
          position: relative;
          right: 100vw;
          height: 100%;
          transition: right 0.3s;
        }
        #menu.show {
          right: 0;
        }
        #content {
          grid-row: 1 / 3;
          grid-column: 1;
        }
      }
    `
  }
}

window.customElements.define('app-layout', AppLayout)
