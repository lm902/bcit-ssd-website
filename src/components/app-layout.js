import { LitElement, html, css } from 'lit-element'

export default class AppLayout extends LitElement {
  render () {
    return html`
      <slot name="header" id="header"></slot>
      <slot name="menu" id="menu"></slot>
      <slot name="content" id="content"></slot>
    `
  }

  static get properties () {
    return {
      routedata: { type: Object },
      subroute: { type: Object }
    }
  }

  static get styles () {
    return css`
      :host {
        display: grid;
        height: 100vh;
        width: 100vw;
        grid-template-rows: 40px 1fr;
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
