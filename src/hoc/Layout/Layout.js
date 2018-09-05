import React, { Component } from 'react';

import Container from '../ContainerElement/containerElement';
import './Layout.less';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerToggleHadler =() => {
        this.setState((prevState, props) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        })
    }

    sideDrawerClosedHadler = () => {
        this.setState({showSideDrawer:false});
    }
    render () {
        return (
            <Container>
                <Toolbar
                    open={this.sideDrawerToggleHadler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHadler} />
                
                <div className = "Content">
                    {this.props.children}
                </div>
            </Container>
        )
    }
};

export default Layout;