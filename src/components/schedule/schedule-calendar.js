import { LitElement, html, css } from 'lit-element'
import { schedule } from '../../config'

export default class ScheduleCalendar extends LitElement {
  render () {
    const rows = schedule[this.set].reduce((prev, next, i) => {
      if (!(prev[0] instanceof Array)) {
        prev = [[prev]]
      }
      if (i % 6 === 0) {
        prev.push([])
      }
      prev[prev.length - 1].push(next)
      return prev
    })
    for (const row of rows) {
      for (let i = 0; i < 6; i++) {
        if (!row[i]) {
          row[i] = []
        }
      }
    }
    switch (this.view) {
      case 'calendar':
        return html`
          <table class="calendar">
            <thead>
              <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(row => html`
                <tr>
                  ${row.map(col => html`<td>${col.map(line => line && html`<span>${line}</span><br />`)}</td>`)}
                </tr>
              `)}
            </tbody>
          </table>
        `
      case 'list':
        return html`
          <table class="list">
            ${schedule[this.set].map(row => html`
              <tr>
                <td>${row.map(line => line && html`<span>${line}</span><br />`)}</td>
              </tr>
            `)}
          </table>
        `
    }
  }

  static get styles () {
    return css`
      table {
        border-spacing: 0;
      }
      table.list {
        width: 100%;
        max-width: 800px;
      }
      th, td {
        vertical-align: top;
        border: 1px solid #777;
        padding: 5px;
      }
      table.calendar td {
        height: 90px;
      }
      td span:first-child {
        font-weight: 500;
      }
    `
  }

  static get properties () {
    return {
      view: String,
      set: String
    }
  }
}

window.customElements.define('schedule-calendar', ScheduleCalendar)
