import React, { Component } from 'react';
import About from './about';
import Education from './education';
import Experience from './experience';
import Footer from './footer';
// import Header from './header';
// import Hero from './hero';
import Skills from './skills';
class Portfolio extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                {/* <Header></Header>
                <Hero></Hero> */}
                <About></About>
                <Skills></Skills>
                <Experience></Experience>
                <Education></Education>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
 
export default Portfolio;