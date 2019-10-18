import { LitElement, html, css } from 'lit-element'
import { courses } from '../config'
import '../components/page-content'

export default class PageCoursesOverview extends LitElement {
  render () {
    return html`
      <page-content>
        <dl>
        ${courses.map(course => html`
          <dt>${course.name}</dt>
          <dd>
            ${course.description}
            <br />
            <a href="${course.link}">Course Outline</a>
          </dd>
        `)}
        </dl>
      </page-content>
    `
  }

  static get styles () {
    return css`
      dt {
        margin: 10px 20px;
        font-weight: bold;
      }
      a {
        color: var(--primary-color);
        text-decoration: none;
      }
    `
  }
}

window.customElements.define('page-courses-overview', PageCoursesOverview)
