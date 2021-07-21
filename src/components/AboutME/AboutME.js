import React, { Component } from 'react';
export default class AboutME extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="aboutME" className="s-about target-section">
                    <div className="row narrow section-intro has-bottom-sep">
                        <div className="col-full text-center">
                            <h3>NEWSLETTER</h3>
                            <h1>Great Question</h1>
                            <p className="lead">Not news, definitely not a letter, just decoding careers, products, startups, and life by answering one great question at a time!</p>
                        </div>
                        <div>
                         <a href="https://anjalisharma.substack.com/welcome"
                className="btn btn--primary full-width"
              >
                Subscribe to my Newsletter
              </a>
            </div>
                    </div>
                </section> {/* end about */}
                
            </React.Fragment>
        );
    }
}
