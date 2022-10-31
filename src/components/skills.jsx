import React, { Component } from 'react';
class Skills extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="skills" className="experience-mf pt-5 route">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="title-box text-center">
                                <h3 className="title-a">
                                    Skills
                                </h3>
                                <p className="subtitle-a">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="skill-mf">
                            <span>HTML</span> <span className="pull-right">85%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>CSS3</span> <span className="pull-right">75%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>C#</span> <span className="pull-right">50%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>JAVASCRIPT</span> <span className="pull-right">90%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>MySql</span> <span className="pull-right">90%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <span>Git/GitHab</span> <span className="pull-right">90%</span>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{"width": "62%"}} aria-valuenow="62" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div>
                                <p>
                                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Skills;