import { LitElement, html, css } from 'lit-element'
import { pages } from '../config'
import ActionRegistry from '../ActionRegistry'

export default class NavigationMenu extends LitElement {
  render () {
    return html`
      <ul>
        ${Object.entries(pages).map(x => {
          const [key, value] = x
          return html`<li><a href="#!/${key}">${value.title}</a></li>`
        })}
      </ul>
    `
  }

  connectedCallback () {
    super.connectedCallback()
    setTimeout(() => this.updateActiveItem(true), 0)
    window.app.actionRegistry.register(ActionRegistry.ActionType.MENU_BUTTON_INVOKE, this.toggle.bind(this))
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.updateActiveItem.bind(this))
  }

  updateActiveItem (doNotToggle) {
    for (const a of this.shadowRoot.querySelectorAll('a')) {
      if (a.href === window.location.href) {
        a.classList.add('current')
      } else {
        a.classList.remove('current')
      }
    }
    if (!doNotToggle) { this.toggle() }
  }

  toggle () {
    this.classList.toggle('show')
  }

  static get styles () {
    return css`
      :host {
        display: block;
        background: #fcfcfc;
        transition: transform 0.3s;
      }
      ul {
        margin: 0;
        padding: 10px 0;
      }
      li {
        list-style: none;
      }
      a {
        text-decoration: none;
        color: black;
        padding: 10px;
        display: block;
        font-size: 17px;
        transition: all 0.15s;
      }
      a:hover {
        background: #eee;
      }
      a:active {
        background: #ddd;
        transform: scale(0.95);
      }
      a.current {
        background: #ddd;
      }
      @media screen and (max-width: 499px) {
        :host {
          transform: translateX(-100vw);
          height: 100%;
        }
        :host(.show) {
          transform: none;
        }
      }
    `
  }
}

window.customElements.define('navigation-menu', NavigationMenu)
