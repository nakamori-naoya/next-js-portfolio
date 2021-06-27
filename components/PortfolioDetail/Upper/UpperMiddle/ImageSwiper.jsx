import React from 'react'
import Swiper from "react-id-swiper"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

//         https://react-id-swiper.ashernguyen.site/doc/get-started
//サンプル： https://react-id-swiper.ashernguyen.site/example/three-d-flip-effect

export const ImageSwiper = (props) => {
  const images = props.images instanceof Array ? images: [props.images]
  
  return(
    <Swiper  >
      {images.length === 0 ? (
        <img src="/static/null_avatar.jpeg" alt="N"/> 
      ): (
      images.map(image => (
        <img src={image} alt="/static/null_avatar.jpeg"/>
        ))
      )}
    </Swiper>
  )
}
