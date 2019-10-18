import { LitElement, html, css } from 'lit-element'

export default class ScheduleCalendar extends LitElement {
  render () {
    return html`
    
    `
  }

  static get styles () {
    return css`

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
