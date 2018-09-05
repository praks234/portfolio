import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.less'

const navigationItems = (props) => {
    return (
        <ul className="NavigationItems">
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/portfolio" >Portfolio</NavigationItem>
            <NavigationItem link="/about" >About</NavigationItem>
           
        </ul>
    )
}

export default navigationItems;