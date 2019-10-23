import { LitElement, html, css } from 'lit-element'
import '@polymer/paper-card'
import '@material/mwc-icon'
import { students } from '../config'

export default class PageStudent extends LitElement {
  render () {
    return html`
      <page-content>
        ${students.map(student => html`
          <paper-card heading="${student.name}">
            <a class="card-content" href="mailto:${student.email}"><mwc-icon>email</mwc-icon>${student.email}</a>
          </paper-card>
        `)}
      </page-content>
    `
  }

  static get styles () {
    return css`
      page-content {
        margin: 10px 0;
      }
      a {
        color: var(--primary-color);
        text-decoration: none;
        line-height: 24px;
      }
      a mwc-icon {
        margin-right: 3px;
        vertical-align: middle;
      }
      paper-card {
        margin: 10px;
        padding-bottom: 15px;
      }
    `
  }
}

window.customElements.define('page-students', PageStudent)
