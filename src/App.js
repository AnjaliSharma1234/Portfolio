import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/home/home'
import AboutME from './components/AboutME/AboutME'
import About from './components/about/about';
import Works from './components/works/works';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Experience from './components/experience/experience';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Works />
        <AboutME />
        <About />
        {/* <Experience /> */}
        <Blog />
        <Footer />
      </div>
    );
  }
}
export default App;
