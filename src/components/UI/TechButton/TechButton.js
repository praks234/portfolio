import React from 'react';

import './TechButton.less';

const techButton = (props) => {
    let classes = "TechButton " + props.classes;
    let id = props.techId;
    return (
            <button className={classes} onClick={() => props.clicked(id)}>{props.children}</button>
    )
}

export default techButton;