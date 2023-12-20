import React from 'react';
import { Carousel } from 'antd';

const Slider = () => (
  <div>
    <Carousel autoplay>
      <div>
      <img
          src={`${process.env.PUBLIC_URL}/public/assets/img/backgrounds/background-testimonials.jpg`}
          alt="Image 2"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />
        
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/public/assets/img/backgrounds/background-testimonials.jpg`}
          alt="Image 2"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/path/to/image3.jpg`}
          alt="Image 3"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/path/to/image4.jpg`}
          alt="Image 4"
          style={{ width: '100%', height: '550px', objectFit: 'cover' }}
        />
      </div>
    </Carousel>
    <br />
  </div>
);

export default Slider;
