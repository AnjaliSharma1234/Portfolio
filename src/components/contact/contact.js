import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
       <section id="contact" className="s-contact target-section">
        <div className="overlay" />
        <div className="row narrow section-intro">
          <div className="col-full">
            <h3>Contact</h3>
            <h1>Say Hello.</h1>
            <p className="lead">Feel free to reach out for any queries or feedback.</p>
          </div>
        </div>
        <div className="row contact__main">
          <div className="col-eight tab-full contact__form">
            <form name="contactForm" id="contactForm" method="post" action>
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue minLength={2} required aria-required="true" className="full-width" defaultValue={""}/>
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue required aria-required="true" className="full-width" defaultValue={""}/>
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue className="full-width" defaultValue={""}/>
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required aria-required="true" className="full-width" defaultValue={""} />
                </div>
                <div className="form-field">
                  <button className="full-width btn--primary">Submit</button>
                  <div className="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1" />
                      <div className="bounce2" />
                      <div className="bounce3" />
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {/* contact-warning */}
            <div className="message-warning">
              Something went wrong. Please try again.
            </div> 
            {/* contact-success */}
            <div className="message-success">
              Your message was sent, thank you!<br />
            </div>
          </div>
          <div className="col-four tab-full contact__infos">
          </div>
        </div>
      </section> {/* end s-contact */}
      </React.Fragment>
    );
  }
}