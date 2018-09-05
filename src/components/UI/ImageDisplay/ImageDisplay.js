import React, { Component } from 'react';

import './ImageDisplay.less';
import image1 from '../../../assets/images/me_1.jpg';
import image2 from '../../../assets/images/me_2.jpg';
import image3 from '../../../assets/images/me_3.jpg';
import image4 from '../../../assets/images/me_4.jpg';

class ImageDisplay extends Component {
    
    state= {
        images:[image1, image2, image3, image4],
        currentImage: image1,
        currentIndex: 0
    }
    timer;

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    componentDidMount () {
        this.timer = setInterval(() => {
            this.setState((prevState) => {
                let index = prevState.currentIndex + 1;
                if(index === prevState.images.length) {
                    index = 0;
                }
                return {
                    currentIndex: index,
                    currentImage: prevState.images[index]
                }
            })
        },3000);
    }

    render () {
        
        return (
            <div className="Images">
                <img src={this.state.currentImage} alt="myself" />
            </div>   
        );
    }
}

export default ImageDisplay;