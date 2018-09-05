import React from 'react';
import Rotate from 'react-reveal/Rotate';

import './SimpleMessage.less';

const simpleMessage = (props) => {
    let from = props.from;
    let element = null;
    if(from === "right") {
        element = (
            <Rotate top right>
                <div className="MessageContainer right">{props.children}</div>
            </Rotate>
        );
    } else {
        element = (
            <Rotate top left>
                <div className="MessageContainer left">{props.children}</div>
            </Rotate>
        );
    }
    return element;
}

export default simpleMessage;