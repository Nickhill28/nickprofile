import React, { Component } from 'react';
export default class Intro extends Component {
    render() {
      return (
        <React.Fragment>
        {/*generated code*/}
            <section id="intro">   
            <div className="intro-overlay" />	
            <div className="intro-content">
            <div className="row">
                <div className="col-twelve">
                <h5>Hello, World.</h5>
                <h1>I'm Nick Hill Gupta.</h1>
                <p className="intro-position">
                    <span>Developer</span>
                    <span>Evangelist</span>
                    <span>Numerophile</span>  
                </p>
                <a className="button stroke smoothscroll" href="#about" title>Know Me</a>
                </div>  
            </div>   		 		
            </div> {/* /intro-content */} 
            <ul className="intro-social">        
            <li><a href="https://www.facebook.com/peddygriano/"><i className="fa fa-facebook" /></a></li>
            <li><a href="https://www.linkedin.com/in/nicknshe/"><i className="fa fa-linkedin" /></a></li>
            <li><a href="https://twitter.com/snickeret"><i className="fa fa-twitter" /></a></li>
            <li><a href="https://www.reddit.com/user/prawnick"><i className="fa fa-reddit" /></a></li>
            <li><a href="https://www.instagram.com/im_nicksome/"><i className="fa fa-instagram" /></a></li>
            </ul> {/* /intro-social */}      	
        </section> {/* /intro */}
        </React.Fragment>
      );
    }
  }