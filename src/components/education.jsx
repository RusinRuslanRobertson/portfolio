import React, { Component } from 'react';
class Education extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="education" className="education-mf pt-5 route">
                    <div className="container">
                        <div className="row">
                                <div className="col-sm-12">
                                    <div className="title-box text-center">
                                    <h3 className="title-a">
                                        Education
                                    </h3>
                                    <p className="subtitle-a">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{"width": "25rem"}}>
                            <div className="card-body">
                                <img src="assets/img/robertson_logo.jpg" style={{"width": "50px", "paddingRight": "15px"}} alt="Roberson college logo" className="rounded float-start"></img>
                                <h5 className="card-title">Robertson College</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Diploma, Full Stack Web Developer </h6>
                                <p className="card-text">2021-2022</p>
                            </div>
                        </div>
                        <p className="s-description text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                provident vitae! Magni
                                tempora perferendis eum non provident.
                        </p>
                        <p className="s-description text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                        </p>
                        <p className="s-description text-left">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia,
                                    provident vitae! Magni
                                    tempora perferendis eum non provident.
                        </p>
                        
                    </div>
                    
                </section>
            </React.Fragment>
        );
    }
}
 
export default Education;