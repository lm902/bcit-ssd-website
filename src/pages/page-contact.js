import { LitElement, html, css } from 'lit-element'
import ActionRegistry from '../ActionRegistry'
import '@polymer/paper-card'
import '@material/mwc-textfield'
import '@material/mwc-button'
import '@material/mwc-radio'
import '@material/mwc-textarea'
import '@material/mwc-dialog'
import '@material/mwc-formfield'
import '../components/page-content'

export default class PageContact extends LitElement {
  render () {
    return html`
      <page-content>
        <paper-card heading="Contact Us">
          <form class="card-content">
            <mwc-textfield id="firstname" fullwidth placeholder="First name" required validationMessage="This field is required"></mwc-textfield>
            <mwc-textfield id="lastname" fullwidth placeholder="Last name" required validationMessage="This field is required"></mwc-textfield>
            <mwc-textfield id="email" type="email" fullwidth placeholder="Email" required validationMessage="You must enter an email address" helper="someone@example.com"></mwc-textfield>
            <mwc-textfield id="phone" type="tel" fullwidth placeholder="Phone number" helper="+15550123456" pattern="\\+\\d+" validationMessage="The phone number entered is not valid"></mwc-textfield>
            <div id="status-container">
              <h3>Your status</h3>
              <mwc-formfield label="Current Student">
                <mwc-radio checked name="status" id="currentstudent" value="Current Student"></mwc-radio>
              </mwc-formfield>
              <mwc-formfield label="Prospective Student">
                <mwc-radio name="status" id="prospectivestudent" value="Prospective Student"></mwc-radio>
                </mwc-formfield>
              <mwc-formfield label="Instructor">
                <mwc-radio name="status" id="instructor" value="Instructor"></mwc-radio>
              </mwc-formfield>
            </div>
            <mwc-textarea id="message" fullwidth placeholder="Message" required validationMessage="Message cannot be blank"></mwc-textarea>
          </form>
          <div class="card-actions">
            <mwc-button id="submit" @click=${this.submitForm}>Send</mwc-button>
          </div>
        </paper-card>
        <mwc-dialog id="success" title="Thank you" @closed=${this.dialogClosed}>
          <div>We have received your information and will contact you shortly.</div>
          <mwc-button slot="primaryAction" dialogAction="ok">
            ok
          </mwc-button>
        </mwc-dialog>
        <mwc-dialog id="fail" title="Error" @closed=${this.dialogClosed}>
          <div>We have encountered an unexpected error, please try again later.</div>
          <mwc-button slot="primaryAction" dialogAction="ok">
            ok
          </mwc-button>
        </mwc-dialog>
      </page-content>
    `
  }

  submitForm () {
    const data = {}
    for (const field of this.shadowRoot.querySelectorAll('mwc-textfield, mwc-textarea')) {
      if (field.reportValidity()) {
        data[field.id] = field.value
      } else {
        return
      }
    }
    data.status = this.shadowRoot.querySelector('mwc-radio[name="status"][checked]').value
    this.shadowRoot.getElementById('submit').disabled = 'disabled'
    this.uploadFormData(data).then(this.showResultSuccess.bind(this), this.showResultFail.bind(this))
  }

  uploadFormData (data) {
    return new Promise((resolve, reject) => {
      // Do something with data here
      setTimeout(() => resolve(data), 1000)
    })
  }

  showResult (status) {
    this.shadowRoot.getElementById('submit').disabled = undefined
    this.shadowRoot.getElementById(status).open = 'open'
    window.app.actionRegistry.dispatch(ActionRegistry.ActionType.GLOBAL_DIALOG_OPEN)
  }

  showResultSuccess (data) {
    this.shadowRoot.getElementById('success').title = 'Thank you, ' + data.firstname
    this.showResult('success')
  }

  showResultFail (data) {
    this.showResult('fail')
  }

  dialogClosed () {
    window.app.actionRegistry.dispatch(ActionRegistry.ActionType.GLOBAL_DIALOG_CLOSE)
  }

  static get styles () {
    return css`
      paper-card {
        margin: 20px;
        width: -moz-fill-available;
        width: -webkit-fill-available;
        width: fill-available;
        max-width: 700px;
      }

      mwc-textfield, #status-container {
        margin-bottom: 15px;
      }

      label {
        color: var(--google-green-700);
        position: relative;
        bottom: 14px;
      }

      #status-container {
        display: grid;
      }

      h3 {
        margin-top: 0;
      }

      mwc-button {
        padding: 8px 0;
      }
    `
  }
}

window.customElements.define('page-contact', PageContact)
