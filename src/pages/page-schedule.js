import { LitElement, html, css } from 'lit-element'
import '@material/mwc-formfield'
import '@material/mwc-checkbox'
import '@material/mwc-radio'
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
        <mwc-formfield label="Calendar view">
          <mwc-checkbox checked @change=${this.toggleCalendarView.bind(this)}></mwc-checkbox>
        </mwc-formfield>
        <schedule-calendar set="setA" view="calendar"></schedule-calendar>
      </page-content>
    `
  }

  static get styles () {
    return css`
      @media screen and (max-width: 949px) {
        mwc-formfield[label="Calendar view"] {
          display: none;
        }
      }
      mwc-radio {
        transform: translateY(2px);
      }
    `
  }

  changeSet (event) {
    if (event.target.checked) {
      this.shadowRoot.querySelector('schedule-calendar').set = event.target.value
    }
  }

  toggleCalendarView (event) {
    this.shadowRoot.querySelector('schedule-calendar').view = event.target.checked ? 'calendar' : 'list'
  }

  connectedCallback () {
    super.connectedCallback()
    this.bindedResize = this.resize.bind(this)
    window.addEventListener('resize', this.bindedResize)
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    window.removeEventListener('resize', this.bindedResize)
  }

  resize () {
    if (window.innerWidth < 950) {
      this.shadowRoot.querySelector('mwc-checkbox').checked = false
      this.shadowRoot.querySelector('mwc-checkbox').dispatchEvent(new window.Event('change'))
    }
  }
}

window.customElements.define('page-schedule', PageSchedule)
