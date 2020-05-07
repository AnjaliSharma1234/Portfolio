import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="col-full">
            <div className="footer-logo">
              <a className="footer-site-logo" href="#0"><img src="images/logo.png" alt="Homepage" /></a>
            </div>
            <ul className="footer-social">
            <li><a href="https://www.linkedin.com/in/anjalisharmaaa/">
                  <i className="im im-linkedin" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a></li>
                <li><a href="https://twitter.com/AnjaliiSharmaaa">
                  <i className="im im-twitter" aria-hidden="true" />
                  <span>Twitter</span>
                </a></li>
              <li><a href="https://github.com/AnjaliSharma1234">
                  <i className="im im-github" aria-hidden="true" />
                  <span>Github</span>
                </a></li>
              <li><a href="https://www.instagram.com/anjali.sharma276/">
                  <i className="im im-instagram" aria-hidden="true" />
                  <span>Instagram</span>
                </a></li>
                <li><a href="https://www.facebook.com/anjali.sharma276">
                  <i className="im im-facebook" aria-hidden="true" />
                  <span>Facebook</span>
                </a></li>
                <li><a href="https://medium.com/@anjalisharmaaa">
                  <i className="im im-link" aria-hidden="true" />
                  <span>Blog</span>
                </a></li>
              
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-twelve">
            <div className="copyright">
              <span>© Made with ❤ by Anjali Sharma</span>
            </div>
            <div className="go-top">
              <a className="smoothscroll" title="Back to Top" href="#top"><i className="im im-arrow-up" aria-hidden="true" /></a>
            </div>
          </div>
        </div> {/* end footer-bottom */}
      </footer> {/* end footer */}
      </React.Fragment>
    );
  }
}