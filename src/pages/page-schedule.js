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
        <schedule-calendar set="setA" view="calendar"></schedule-calendar>
        <mwc-formfield label="Set A">
          <mwc-radio name="set" value="setA" @change=${this.changeSet.bind(this)} checked></mwc-radio>
        </mwc-formfield>
        <mwc-formfield label="Set B">
          <mwc-radio name="set" value="setB" @change=${this.changeSet.bind(this)}></mwc-radio>
        </mwc-formfield>
        <mwc-formfield label="Calendar view">
          <mwc-checkbox checked></mwc-checkbox>
        </mwc-formfield>
      </page-content>
    `
  }

  static get styles () {
    return css`
    `
  }

  changeSet (event) {
    if (event.target.checked) {
      this.shadowRoot.querySelector('schedule-calendar').set = event.target.value
    }
  }
}

window.customElements.define('page-schedule', PageSchedule)
