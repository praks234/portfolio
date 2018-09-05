import React from 'react';

import './Button.less';

const button = (props) => {
    let classes = "Button " + props.classes;
    return (
        <div className="buttonContainer">
            <button className={classes} onClick={props.clicked}>{props.children}</button>
        </div>
    )
}

export default button;