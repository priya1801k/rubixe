import React from 'react';
import BannerImg from '../../Images/bannerImg.jpg';
import './Banner.css';
function Banner() {
  return (
    <div>
        <img src={BannerImg} alt='bannerImg'></img>
    </div>
  )
}

export default Banner