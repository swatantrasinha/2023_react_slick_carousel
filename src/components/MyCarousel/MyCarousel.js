import React, { Component } from 'react'
import Slider from 'react-slick';
import MySlide from '../MySlide/MySlide';

 class MyCarousel extends Component {

    constructor(props) {
      super(props);
      this.arrowRef = React.createRef();
    }

    getSlides = (data) =>  data.map((item, i) => (
        <MySlide item = {item} key={i}/>
    ));

  render() {

    const data = [
        {
            img : "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
            disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        },
        {
            img : "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
            disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        },
        {
            img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
            disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        },
        {
            img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
            disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        },
        {
            img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
            disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
        }
    ];
    
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7/2,
        slidesToScroll: 1,
        initialSlide: 1/2,
        arrows : false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode : false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode : false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode : false
            }
          }
        ]
      };

 
 

    return (
        <div className='carousel-container'>
            <Slider ref={this.arrowRef} {...settings}>
                {this.getSlides(data)}
            </Slider>

            <div className='buttons-container'>
                <button 
                onClick={() => this.arrowRef.current.slickPrev()}
                className='back'> <i class="arrow left"></i> </button>
                <button 
                onClick={() => this.arrowRef.current.slickNext()}
                className='next'>  <i class="arrow right"></i> </button>
            </div>
         </div>
    )
  }
}



export default MyCarousel;
