import React, { Component } from 'react';
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="home" className="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width={3000} data-natural-height={2000} data-position-y="center">
                    <div className="overlay" />
                    <div className="shadow-overlay" />
                    <div className="home-content">
                        <div className="row home-content__main">
                            <h3>Hello There</h3>
                            <h1>I am Anjali Sharma. <br />
                            I am an Associate Product Manager & a Storyteller.
                            </h1>
                            <div className="home-content__buttons">
                                <a href="https://anjalisharma.substack.com/welcome" className="smoothscroll btn btn--stroke">
                                    Highlights
                                </a>
                                <a href="#blog" className="smoothscroll btn btn--stroke">
                                    Recent Blogs
                                </a>
                            </div>
                            <div className="home-content__scroll">
                                <a href="#about" className="scroll-link smoothscroll">
                                    <span>Scroll Down</span>
                                </a>
                            </div>
                        </div>
                    </div> {/* end home-content */}
                    <ul className="home-social">
                        <li>
                            <a href="https://www.linkedin.com/in/anjalisharmaaa/"><i className="im im-linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/anjalisharmaaa_"><i className="im im-twitter" aria-hidden="true" /><span>Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/AnjaliSharma1234"><i className="im im-github" aria-hidden="true" /><span>Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/anjali.sharma276/"><i className="im im-instagram" aria-hidden="true" /><span>Instagram</span></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/anjali.sharma276"><i className="im im-facebook" aria-hidden="true" /><span>Facebook</span></a>
                        </li>
                        <li>
                            <a href="https://medium.com/@anjalisharmaaa"><i className="im im-link" aria-hidden="true" /><span>Blog</span></a>
                        </li>
                        
        
                    </ul>
                    {/* end home-social */}
                </section> {/* end s-home */}
            </React.Fragment>
        );
    }
}
