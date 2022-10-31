import React, { Component } from 'react';
class About extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="about" className="about-mf sect-pt4 route">
                    <div className="container">
                        <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5">
                                    <div className="about-img">
                                        <img src="assets/img/rusin.jpg" className="img-fluid rounded b-shadow-a" alt=""></img>
                                    </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                    <div className="about-info">
                                        <p><span className="title-s">Name: </span> <span>Ruslan Rusin</span></p>
                                        <p><span className="title-s">Profile: </span> <span>Full Stack Developer</span></p>
                                        <p><span className="title-s">Email: </span> <span>contact.me@example.com</span></p>
                                        <p><span className="title-s">Phone: </span> <span>(204) 123-4567</span></p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="about-me pt-4 pt-md-0">
                                    <div className="title-box-2">
                                    <h5 className="title-left">
                                        About me
                                    </h5>
                                    </div>
                                    <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                    <p className="lead">
                                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default About;