import React from 'react';
import 'tachyons';


function Footer(props) {
    return(
    <div className="footer ma0">  
            <div className="row justify-content-center bg-light-silver">             
                <div className="col-12 col-sm-3 col-md-2 align-self-center" style={{color: "black"}}>
                    <div className="ma3" style={{fontFamily: "jasmine", fontStyle: "bold", fontSize: "7em"}}>
                        <h5>Sorting Visualizer</h5>
                    </div>
                    <div style={{fontStyle: "italic"}}>
		              Abdur Rakib<br />
		              B.E. in Information Technology'23<br/>
                      Jadavpur University<br />
                      <p className="footer__text">
                        © 2022 - developed by
                        <a rel="noreferrer" href="https://github.com/Rakib12345678/" target="_blank">Abdur Rakib</a>
                      </p>
                    </div>
                </div>

                {/* this div is for contact info-> mail, linkedin, github */}
                <div className="col-12 col-sm-3 col-md-2 mt-3 align-self-center">
                    <div>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/abdur-rakib-094888193/"><i className="fa fa-linkedin"></i></a>{' '}
                        <br /> <br /> <a className="btn btn-social-icon" href="mailto:abdurrakib9089@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        <br /> <br /> <a className="btn btn-social-icon" rel="noreferrer" href="https://github.com/Rakib12345678/" target="_blank"> <i class="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;