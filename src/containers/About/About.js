import React, { Component } from 'react';

import ShareLinks from '../../components/ShareLinks/ShareLinks';
import NavigationArrow from '../../components/Navigation/NavigationArrow/NavigationArrow';
import Zoom from 'react-reveal/Zoom';
import './About.less';

class About extends Component {
    render () {
        return (
            <div className="about">
                <div className="section">
                    <Zoom>
                        <h1>Contact Details</h1>
                        <div className="section-content">
                            <div>
                                <span className="label">Email: </span><span>Prakhar234@gmail.com</span>
                            </div>
                            <div>
                                <span className="label">Phone: </span><span>+919900817390</span>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className="section">
                    <Zoom>
                        <h1>Hobbies/Interest</h1>
                        <div className="section-content">
                            <ul>
                                <li>Learning cutting edge technologoies</li>
                                <li>Playing Cricket</li>
                                <li>Playing Football</li>
                                <li>Playing Table Tenis</li>
                                <li>Playing PS4</li>
                                <li>Travelling</li>
                                <li>Adventurous Sports</li>
                            </ul>
                        </div>
                    </Zoom>
                </div>
                <div className="section">
                    <Zoom>
                        <h1>Awards and Achievements</h1>
                        <div className="section-content">
                            <ul>
                                <li>Applause award for delivering quality project deliverables</li>
                                <li>Stellar award for great performance.</li>
                                <li>Apex Award for firm initiatives</li>
                                <li>ACE award for handling project release</li>
                            </ul>
                        </div>
                    </Zoom>
                </div>
                <ShareLinks vertical />
                <NavigationArrow class="Left" link="/portfolio" />
            </div>
        )
    }
};

export default About;