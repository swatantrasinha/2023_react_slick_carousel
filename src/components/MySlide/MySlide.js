import React, { Component } from 'react'

class MySlide extends Component {
  render() {
    
    const { img, disc } = this.props.item;
    return (
        <div className='my-slide project'>
         
            <img src={img} alt="project" />
        <div className="disc">
            
            <p>
                {disc}
                <a href="#">demo</a>
            </p>
        </div>
        </div>
    )
  }
}

export default MySlide;

