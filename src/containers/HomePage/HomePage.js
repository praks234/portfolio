import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';

import './HomePage.less';
import NavigationArrow from '../../components/Navigation/NavigationArrow/NavigationArrow';
import Button from '../../components/UI/Button/Button';
import SimpleMessage from '../../components/UI/SimpleMessage/SimpleMessage';
import ImageDisplay from '../../components/UI/ImageDisplay/ImageDisplay';
import ShareLinks from '../../components/ShareLinks/ShareLinks';

class HomePage extends Component {

  state= {
    currentInfo: -1,
    info: [
      {
        id: 0,
        message:"Fast load times and lag free interaction, my highest priority."
      }, 
      {
        id: 1,
        message:"My layouts will work on any device, big or small."
      }, 
      {
        id: 2,
        message:"Strong preference for easy to use, intuitive UX/UI."
      }, 
      {
        id: 3,
        message:"Websites don't have to be static, I love making pages come to life."
      }
    ],
    simpleMessageVisible: false,
    showPortfolioButton: false,
    currentInfos: [],
  }

  knowMore = () => {
    this.setState((prevState) => {
      let index = prevState.currentInfo + 1;
      let infoArray = [];
      for(let i =0;i<=index;i++){
        infoArray.push(prevState.info[i]);
      }
      if(index === prevState.info.length -1) {
        return {
          currentInfos: infoArray,
          simpleMessageVisible: true,
          showPortfolioButton: true
        }
      }
      return {
        currentInfo: index,
        currentInfos: infoArray,
        simpleMessageVisible: true
      }
    })
  };

  goToPortfolio = () => {
    this.props.history.push('/portfolio');
  }

  render () {
    const title = "Hello, my name is Prakhar Shukla.";
    const para = "I am a front end developer with experience of over 6 years.";

    let messages = null;
    if(this.state.simpleMessageVisible) {
      messages = this.state.currentInfos.map((message, ind) => {
        let element = null;
        if(ind % 2 === 0) {
          element = <SimpleMessage key={message.id} from ="right">{message.message}</SimpleMessage>
        } else {
          element = <SimpleMessage key={message.id} from="left" >{message.message}</SimpleMessage>
        }
        return element;
      })
    }
    let button = <Button clicked={()=>this.knowMore()}>Want to know More?</Button>
    if(this.state.showPortfolioButton) {
      button = <Button clicked={()=>this.goToPortfolio()}>Go To Portfolio</Button>
    }
    return (
      <Zoom>
        <div className="home">
          <ImageDisplay />
          <Zoom>
              <h1>{title}</h1>
              <p>{para}</p>
          </Zoom>
          {messages}
          {button}
          <ShareLinks />
        </div>
        <NavigationArrow class="Right" link="/portfolio" />
      </Zoom>
    )
  }
}

export default HomePage;