import { LitElement, html, css } from 'lit-element'
import '@polymer/paper-card'
import { students } from '../config'

export default class PageStudent extends LitElement {
  render () {
    return html`
      <page-content>
        ${students.map(student => html`
          <paper-card heading="${student.name}">
            <a class="card-content" href="mailto:${student.email}">${student.email}</a>
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
      }
      paper-card {
        margin: 10px;
        padding-bottom: 15px;
      }
    `
  }
}

window.customElements.define('page-students', PageStudent)
