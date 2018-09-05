import React from 'react';

import Bounce from 'react-reveal/Bounce';
import './Project.less';

const project = (props) => {
    let technologies = props.techStack.join(", ");
    return (
        <Bounce left>
            <div className="Project">
                <h2><a href={props.url} target="_blank">{props.name}</a></h2>
                <div className="section">
                    <img src={props.imgsrc} alt={props.name}/>
                </div>
                {/* <div className="section">
                    <span className="label">Technologies: </span>
                    <span>{technologies}</span>
                </div>
                <div className="section">
                    <span className="label">Description : </span>
                    <span>{props.description}</span>
                </div> */}
            </div>
        </Bounce>
    )
};

export default project;