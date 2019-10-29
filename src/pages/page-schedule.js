import { LitElement, html, css } from 'lit-element'
import '@material/mwc-formfield'
import '@material/mwc-radio'
import '@material/mwc-fab'
import '../components/page-content'
import '../components/schedule/schedule-calendar'

export default class PageSchedule extends LitElement {
  render () {
    return html`
      <page-content>
        <mwc-formfield label="Set A">
          <mwc-radio name="set" value="setA" @change=${this.changeSet.bind(this)} checked></mwc-radio>
        </mwc-formfield>
        <mwc-formfield label="Set B">
          <mwc-radio name="set" value="setB" @change=${this.changeSet.bind(this)}></mwc-radio>
        </mwc-formfield>
        <mwc-fab extended @click=${this.toggleCalendarView.bind(this)} icon="${this.calendarView ? 'calendar_today' : 'list_alt'}" label="${this.calendarView ? 'Calendar' : 'List'}"></mwc-fab>
        <schedule-calendar set="setA" view="${this.calendarView ? 'calendar' : 'list'}"></schedule-calendar>
      </page-content>
    `
  }

  static get styles () {
    return css`
      @media screen and (max-width: 999px) {
        mwc-fab {
          display: none;
        }
      }
      mwc-radio {
        transform: translateY(2px);
      }
      mwc-fab {
        position: fixed;
        bottom: 20px;
        right: 30px;
      }
    `
  }

  changeSet (event) {
    if (event.target.checked) {
      this.shadowRoot.querySelector('schedule-calendar').set = event.target.value
    }
  }

  toggleCalendarView () {
    this.calendarView = !this.calendarView
  }

  set calendarView (value) {
    console.log('Change calendar view to ' + value)
    this._calendarView = value
    this.requestUpdate()
  }

  get calendarView () {
    return this._calendarView
  }

  connectedCallback () {
    super.connectedCallback()
    if (window.innerWidth < 1000) {
      this.calendarView = false
    } else {
      this.calendarView = true
    }
    this.bindedResize = this.resize.bind(this)
    window.addEventListener('resize', this.bindedResize)
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    window.removeEventListener('resize', this.bindedResize)
  }

  resize () {
    if (window.innerWidth < 1000 && this.calendarView) {
      this.calendarView = false
    }
  }
}

window.customElements.define('page-schedule', PageSchedule)
