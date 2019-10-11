import { LitElement, html } from 'lit-element'
import '../components/page-content'

export default class PageHome extends LitElement {
  render () {
    return html`
      <page-content>
        <header>
          <h1>Software Systems Developer</h1>
          <h2>Web Programmer Option</h2>
        </header>
        <article>
          <h3>Code anything from scratch. Start your new career as a full stack web application developer.</h3>
          <p>For most people, learning to code cannot be rushed. Consider the Software System Developer (SSD) program for a proper coding education with enough time to actually learn the content. Study at an institution that is recognized and trusted by industry throughout Western Canada. Over 80% of SSD graduates are hired as web application developers.</p>
          <p>The SSD Web Programmer option is an eight-month, full-time web application development program offered at BCIT's the downtown Vancouver campus.</p>
          <p>SSD prepares individuals for high-demand careers in the technical areas of web application development. Train for a new career through extensive hands-on practice.</p>
          <p>Learn:</p>
          <ul>
            <li>HTML, CSS, Twitter Bootstrap, JavaScript, jQuery, XML, RESTFUL services</li>
            <li>Systems Analysis Design and Agile Methodology</li>
            <li>Relational Design, SQL, and NoSQL</li>
            <li>React, React Native, Angular, Ionic and Progressive Web Apps</li>
            <li>ASP.NET Core MVC and Web API</li>
            <li>Web Application Security</li>
            <li>NodeJS, Express and MongoDB</li>
            <li>Introductory Android and IOS</li>
            <li>PHP and Laravel</li>
            <li>Agile project methodology and code sharing with GitHub and Azure DevOps</li>
            <li>Introductory cloud services with Azure and Amazon Web Services</li>
            <li>Integration with other hosting services, tooling and API providers</li>
          </ul>
          <p>Graduates of this certificate program may apply for acceptance into the BCIT Bachelor of Technology in Computer Systems (additional prerequisites are required). Laddering into the Computer Systems Technology Diploma program is not an option.</p>
          <p>This program is delivered through classroom instruction, hands-on lab work and individual and team projects.</p>
          <p>While applicants are not required to have formal computer programming experience, they need to have a solid understanding of object-oriented programming. Applicants with no knowledge are advised to take a programming language course, such as introduction to object-oriented programming, C#, or Java. Speak with us today so we can help you prepare to join us.</p>
        </article>
        <table>
          <thead>
            <tr>
              <th colspan="2">SOFTWARE SYSTEMS DEVELOPER - Web Programmer Option</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>BCIT Credential:</td><td>Certificate</td></tr>
            <tr><td>Program Location:</td><td>Downtown Vancouver</td></tr>
            <tr><td>Program Length:</td><td>Eight months, Full-time</td></tr>
            <tr><td>Program Start / End:</td><td>September 14, 2020 - May 14, 2021</td></tr>
            <tr><td>Total Tuition/Cost:</td><td>Learn about <a href="https://www.bcit.ca/files/pdf/admission/2019-20-high-tech-tuition.pdf">Tuition & Fees</a></td></tr>
            <tr><td>Entry Requirements:</td><td><a href="https://www.bcit.ca/study/programs/699ccertt#entry">View Requirements</a></td></tr>
          </tbody>
        </table>
      </page-content>
    `
  }
}

window.customElements.define('page-home', PageHome)
