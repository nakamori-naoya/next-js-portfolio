import React from 'react'
import Swiper from "react-id-swiper"
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation,Pagination,Autoplay} from "swiper"
SwiperCore.use([Navigation,Pagination,Autoplay])

//         https://react-id-swiper.ashernguyen.site/doc/get-started
//サンプル： https://react-id-swiper.ashernguyen.site/example/three-d-flip-effect

export const ImageSwiper = (props) => {
  console.log(props)
  const params = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }  
  const images = props.images instanceof Array ? images: [props.images]
  
  return(
    <Swiper {...params} >
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
