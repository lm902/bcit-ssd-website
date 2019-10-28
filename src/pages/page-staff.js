import { LitElement, html, css } from 'lit-element'
import '@polymer/paper-card'
import '@material/mwc-icon'
import '../components/page-content'
import { facultyStaffs } from '../config'

export default class PageStaff extends LitElement {
  render () {
    return html`
      <page-content>
        <h1>Faculty Staffs</h1>
        ${facultyStaffs.map(staff => html`
          <paper-card heading="${staff.name}">
            <a class="card-content" href="mailto:${staff.email}"><mwc-icon>email</mwc-icon>${staff.email}</a>
            <br />
            ${staff.social.map(social => html`
              <a class="card-content" href="${social.url}"><mwc-icon>share</mwc-icon>${social.name}</a>
            `)}
            <br />
            <ul class="card-content">
              ${staff.courses.map(course => html`
                <li>${course}</li>
              `)}
            </ul>
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
        vertical-align: top;
      }
      h1 {
        font-weight: normal;
      }
      ul {
        margin: 0;
      }
      li {
        list-style: none;
      }
    `
  }
}

window.customElements.define('page-staff', PageStaff)
