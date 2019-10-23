import { LitElement, html, css } from 'lit-element'
import ActionRegistry from '../ActionRegistry'

export default class AppLayout extends LitElement {
  render () {
    return html`
      <header><slot name="header"></slot></header>
      <nav><slot name="menu"></slot></nav>
      <main><slot name="content"></slot></main>
    `
  }

  connectedCallback () {
    super.connectedCallback()
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.toggleMenu.bind(this))
    window.app.actionRegistry.register(ActionRegistry.ActionType.MENU_BUTTON_INVOKE, this.toggleMenu.bind(this))
    window.app.actionRegistry.register(ActionRegistry.ActionType.GLOBAL_DIALOG_OPEN, this.dialogOpen.bind(this))
    window.app.actionRegistry.register(ActionRegistry.ActionType.GLOBAL_DIALOG_CLOSE, this.dialogClose.bind(this))
  }

  toggleMenu () {
    this.shadowRoot.querySelector('nav').classList.toggle('show')
  }

  dialogOpen () {
    this.shadowRoot.querySelector('nav').classList.add('low')
  }

  dialogClose () {
    this.shadowRoot.querySelector('nav').classList.remove('low')
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
      * {
        font-family: Roboto;
      }
      header {
        z-index: 1001;
      }
      nav {
        z-index: 1000;
        transition: right 0.3s;
      }
      @media screen and (min-width: 800px) {
        :host {
          grid-template-columns: 300px 1fr;
        }
        header {
          grid-row: 1;
          grid-column: 1 / 3;
          box-shadow: 0 0 3px #777;
        }
        nav {
          grid-row: 2;
          grid-column: 1;
          border-right: 1px solid #eee;
        }
        nav.low {
          z-index: -1;
        }
        main {
          grid-row: 1 / 3;
          grid-column: 2;
        }
      }
      @media screen and (max-width: 799px) {
        header {
          grid-row: 1;
          grid-column: 1;
          box-shadow: 0 0 8px #777;
        }
        nav {
          grid-row: 2;
          grid-column: 1;
          position: relative;
          right: 100vw;
          height: 100%;
        }
        nav.show {
          right: 0;
        }
        main {
          grid-row: 1 / 3;
          grid-column: 1;
        }
      }
    `
  }
}

window.customElements.define('app-layout', AppLayout)
