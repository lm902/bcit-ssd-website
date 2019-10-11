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
    setTimeout(() => this.updateActiveItem(), 0)
    window.app.actionRegistry.register(ActionRegistry.ActionType.BROWSER_NAVIGATION, this.updateActiveItem.bind(this))
  }

  updateActiveItem () {
    for (const a of this.shadowRoot.querySelectorAll('a')) {
      if (a.href === window.location.href) {
        a.classList.add('current')
      } else {
        a.classList.remove('current')
      }
    }
  }

  static get styles () {
    return css`
      :host {
        display: block;
        background: rgba(250, 250, 250, 0.95);
        backdrop-filter: blur(4px);
        height: 100%;
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
    `
  }
}

window.customElements.define('navigation-menu', NavigationMenu)
