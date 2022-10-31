import React, { Component } from 'react';
class Experience extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="experience" className="experience-mf pt-5 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                <h3 className="title-a">
                                    Experience
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-4">
                            <div className="service-box">
                                <div className="service-ico">
                                    <span className="ico-circle"><i className="bi bi-briefcase"></i></span>
                                </div>
                                <div className="service-content">
                                    <h2 className="s-title">Web Development</h2>
                                    <p className="s-description text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-card-checklist"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Music</h2>
                                <p className="s-description text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                provident vitae! Magni
                                tempora perferendis eum non provident.
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="bi bi-bar-chart"></i></span>
                            </div>
                            <div className="service-content">
                                <h2 className="s-title">Films</h2>
                                <p className="s-description text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                provident vitae! Magni
                                tempora perferendis eum non provident.
                                </p>
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
 
export default Experience;