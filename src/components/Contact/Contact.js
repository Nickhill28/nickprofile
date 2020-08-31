import React, { Component } from 'react';
export default class Contact extends Component {
    render() {
      return (
        <React.Fragment>
        {/*generated code*/}
                <section id="contact">
                <div className="row section-intro">
                <div className="col-twelve">
                    <h5>Contact</h5>
                    <h1>I'd Love To Hear From You.</h1>
                    <blockquote><p className="lead">“No matter how good you think you are as a leader, my goodness, the people around you will have all kinds of ideas for how you can get better. So for me, the most fundamental thing about leadership is to have the humility to continue to get feedback and to try to get better – because your job is to try to help everybody else get better.” </p>
                    <cite>Jim Yong Kim</cite></blockquote><p>
                    Thanks for feedback . I will be Asserting to the Mistakes that were made.</p>
                </div> 
                </div> {/* /section-intro */}
                <div className="row contact-form">
                <div className="col-twelve">
                    {/* form */}
                    <form name="contactForm" id="contactForm" method="post" action>
                    <fieldset>
                        <div className="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" defaultValue={""} minLength={2} required />
                        </div>
                        <div className="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" defaultValue={""} required />
                        </div>
                        <div className="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" defaultValue={""} />
                        </div>                       
                        <div className="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="message" rows={10} cols={50} required defaultValue={""} />
                        </div>                      
                        <div className="form-field">
                        <button className="submitform">Submit</button>
                        <div id="submit-loader">
                            <div className="text-loader">Sending...</div>                             
                            <div className="s-loader">
                            <div className="bounce1" />
                            <div className="bounce2" />
                            <div className="bounce3" />
                            </div>
                        </div>
                        </div>
                    </fieldset>
                    </form> {/* Form End */}
                    {/* contact-warning */}
                    <div id="message-warning">            	
                    </div>            
                    {/* contact-success */}
                    <div id="message-success">
                    <i className="fa fa-check" />Your message was sent, thank you!<br />
                    </div>
                </div> {/* /col-twelve */}
                </div> {/* /contact-form */}
                <div className="row contact-info">
                <div className="col-four tab-full">
                    <div className="icon">
                    <i className="icon-pin" />
                    </div>
                    <h5><a href= "https://goo.gl/maps/tP5xP7SBgFAVbD4V7">Where to Find me</a></h5>
                </div>
                <div className="col-four tab-full collapse">
                    <div className="icon">
                    <i className="icon-mail" />
                    </div>
                    <h5><a href="mailto: snickpick7@gmail.com"> Write a Mail</a></h5>
                </div>
                <div className="col-four tab-full">
                    <div className="icon">
                    <i className="icon-phone" />
                    </div>
                    <h5><a href="tel:8601632675 " >Make a Call</a></h5>
                </div>
                </div> {/* /contact-info */}
            </section> {/* /contact */}
        </React.Fragment>
      );
    }
  }