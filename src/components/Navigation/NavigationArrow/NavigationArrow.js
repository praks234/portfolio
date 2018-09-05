import React from 'react'
import {NavLink} from 'react-router-dom';

import './NavigationArrow.less';

const navigationArrow = (props) => (
    <NavLink to={props.link} exact={props.exact}>
        <i className={props.class}></i>
    </NavLink>
)

export default navigationArrow;