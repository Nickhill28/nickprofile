import React, { Component } from 'react';
export default class About extends Component {
    render() {
      return (
        <React.Fragment>
        {/*generated code*/}
                <section id="about">  
                <div className="row section-intro">
                <div className="col-twelve">
                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>
                    <div className="intro-info">
                    <img src="images/profile-pic.jpg" alt="Profile Picture" />
                    <aside class = "pull-quote">
                    <blockquote>
                    <p className="lead">I am a Results-driven Computer Science student with good technical skills, firm grasp of business needs with crisp
                    understanding of user requirements . My approach includes Assessing risks, troubleshooting problems and conducting tests.
                    Garnered with Impressive communication and planning abilities.</p></blockquote></aside>
                    </div>   			
                </div>   		
                </div> {/* /section-intro */}
                <div className="row about-content">
                <div className="col-six tab-full">
                    <h3>Profile</h3>
                    <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
                    <ul className="info-list">
                    <li>
                        <strong>Fullname:</strong>
                        <span>Nikhil Gupta</span>
                    </li>
                    <li>
                        <strong>Birth Date:</strong>
                        <span>February 20, 1999</span>
                    </li>
                    <li>
                        <strong>Job:</strong>
                        <span>Freelancer | Job-seeker</span>
                    </li>
                    <li>
                        <strong>Website:</strong>
                        <span>www.HiNickin.com</span>
                    </li>
                    <li>
                        <strong>Email:</strong>
                        <span>snickpick7@gmail.com</span>
                    </li>
                    </ul> {/* /info-list */}
                </div>
                <div className="col-six tab-full">
                    <h3>Skills</h3>
                    <p>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>
                    <ul className="skill-bars">
                    <li>
                        <div className="progress percent90"><span>90%</span></div>
                        <strong>Web Development</strong>
                    </li>
                    <li>
                        <div className="progress percent85"><span>85%</span></div>
                        <strong>Machine Learning</strong>
                    </li>
                    <li>
                        <div className="progress percent80"><span>80%</span></div>
                        <strong>Data Visualization</strong>
                    </li>
                    <li>
                        <div className="progress percent75"><span>75%</span></div>
                        <strong>Automation Testing</strong>
                    </li>
                    <li>
                        <div className="progress percent70"><span>70%</span></div>
                        <strong>Programming</strong>
                    </li>
                    </ul> {/* /skill-bars */}		
                </div>
                </div>
                <div className="row button-section">
                <div className="col-twelve">

                    <a href="https://join.skype.com/invite/VI0CNb9Aeiwh"><i className="fa fa-skype fa-3x" /></a>
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    <a href="https://drive.google.com/file/d/1cMI21Oip6ri_VPJDLjlE03wbmrdzadhp/view?usp=sharing" title="Download CV" className="button stroke smoothscroll">Download CV</a>
                    <a href="https://www.github.com/nickhill28"><i className="fa fa-github fa-3x" /></a>
                </div>
                </div>
            </section> {/* /process*/}
      
        </React.Fragment>
      );
    }
  }