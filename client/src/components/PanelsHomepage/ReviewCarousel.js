import React from 'react'
import Slider from "react-slick";

export default function ReviewCarousel() {
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,

    };
    return (
        <div className="reviewCarousel" style={{background: '#E8F7F2', padding: '5%'}}>
       
        <Slider {...settings}>
          <div>
            <p className="fontTest">Fusce feugiat ipsum sed justo molestie aliquet ut eu arcu. Vivamus at finibus nulla. Proin varius leo nec velit commodo, vitae ornare nunc molestie. Praesent nulla quam, convallis non venenatis id, sodales sit amet dui. Cras semper mauris vel congue vestibulum. Mauris varius tellus pellentesque nulla interdum porta. Nunc tincidunt a nulla malesuada dignissim. Ut mattis dolor libero, vel tempus odio malesuada </p>
          </div>
          <div>
            <p className="fontTest">Fusce feugiat ipsum sed justo molestie aliquet ut eu arcu. Vivamus at finibus nulla. Proin varius leo nec velit commodo, vitae ornare nunc molestie. Praesent nulla quam, convallis non venenatis id, sodales sit amet dui. Cras semper mauris vel congue vestibulum. Mauris varius tellus pellentesque nulla interdum porta. Nunc tincidunt a nulla malesuada dignissim. Ut mattis dolor libero, vel tempus odio malesuada </p>
          </div>
          <div>
            <p className="fontTest">Fusce feugiat ipsum sed justo molestie aliquet ut eu arcu. Vivamus at finibus nulla. Proin varius leo nec velit commodo, vitae ornare nunc molestie. Praesent nulla quam, convallis non venenatis id, sodales sit amet dui. Cras semper mauris vel congue vestibulum. Mauris varius tellus pellentesque nulla interdum porta. Nunc tincidunt a nulla malesuada dignissim. Ut mattis dolor libero, vel tempus odio malesuada </p>
            <footer className="blockquote-footer">
                <i>Quote </i>
            </footer>
          </div>
        </Slider>
      </div>

    )
}
