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
                                        <p><span className="title-s">Email: </span> <span>rusin.robertson@gmail.com</span></p>
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
                                        My name is Ruslan Rusin and I am a self-employed musician and actor.
                                    </p>
                                    <p className="lead">
                                        I started my musical journey in my home country of Ukraine. Upon graduating from the Odessa national conservatory, I joined the National Odessa Symphony Orchestra and was a member for 6 years.
                                    </p>
                                    <p className="lead">
                                        While I enjoyed working for NOSO I wanted to travel the world and it was at that time that I discovered cruise ships. It was an exciting moment of my life when I combined my passion for music and exploring the world. It was there that I met my future wife Rochelle and made the big move to Winnipeg. I have been living in Winnipeg for the past 7 years. I have been able to sustain my career as a musician in the city, however, I wanted to further my education in another area. That is when I decided to enroll in Robertson college. I have enjoyed my education immensely and look forward to exploring my career in IT.
                                    </p>
                                    <p className="lead">
                                        I would like to thank all my instructors who shared their knowledge and experience with me and helped me acquire the skills I will use to become an IT professional.
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