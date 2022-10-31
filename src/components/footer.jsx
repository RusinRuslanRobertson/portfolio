import React, { Component } from 'react';
class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                            Robertson College, Winnipeg &copy; 2022
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </React.Fragment>
        );
    }
}
 
export default Footer;