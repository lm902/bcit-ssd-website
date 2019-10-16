import { LitElement, html, css } from 'lit-element'
import '@polymer/paper-card'
import '@material/mwc-textfield'
import '@material/mwc-button'

export default class PageContact extends LitElement {
  render () {
    return html`
      <paper-card heading="Contact Us">
        <form class="card-content">
          <mwc-textfield fullwidth placeholder="First name" required validationMessage="This field is required"></mwc-textfield>
          <mwc-textfield fullwidth placeholder="Last name" required validationMessage="This field is required"></mwc-textfield>
          <mwc-textfield type="email" fullwidth placeholder="Email" required validationMessage="You must enter an email address" helper="someone@example.com"></mwc-textfield>
          <mwc-textfield type="tel" fullwidth placeholder="Phone number" helper="+15550123456" pattern="\\+\\d+" validationMessage="The phone number entered is not valid"></mwc-textfield>
        </form>
        <div class="card-actions">
          <mwc-button>Send</mwc-button>
        </div>
      </paper-card>
    `
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

      mwc-textfield {
        margin-bottom: 15px;
      }
    `
  }
}

window.customElements.define('page-contact', PageContact)
