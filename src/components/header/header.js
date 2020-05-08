import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="s-header">
                    <div className="header-logo">
                        <a className="site-logo" href="index.html"><img src="images/logo.png" alt="Homepage" /></a>
                    </div>
                    <nav className="header-nav-wrap">
                        <ul className="header-nav">
                            <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
                            <li><a className="smoothscroll" href="#works" title="works">Highlights</a></li>
                            <li><a className="smoothscroll" href="#blog" title="blog">Blog</a></li>
                            <li><a className="smoothscroll" href="#about" title="about">Experience</a></li>

                            <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
                        </ul>
                    </nav>
                    {/* <a className="header-menu-toggle" href="#header"><span>Menu</span></a> */}
                </header> {/* end s-header */}
            </React.Fragment>
        );
    }
}