import React from 'react';
import {SocialIcon } from 'react-social-icons';

import './ShareLinks.less'

const shareLinks = (props) => {
    let classes = "shareLinks";
    if(props.vertical) {
        classes += " vertical";
    }
    return (
        <div className={classes}>
            <div className="shareText">Follow me @</div>
            <SocialIcon url="https://www.facebook.com/prakhar0001" network="facebook" style={{ height: 25, width: 25 }} />
            <SocialIcon network="github" url="https://github.com/praks234" style={{ height: 25, width: 25 }} />
            <SocialIcon network="google" url="https://plus.google.com/110290369383365704887" style={{ height: 25, width: 25 }} />
        </div>
    )
}

export default shareLinks;