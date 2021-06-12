// import React from 'react'
// import Swiper from "react-id-swiper"
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import SwiperCore, { Navigation,Pagination,Autoplay} from "swiper"
// SwiperCore.use([Navigation,Pagination,Autoplay])

// //npm install -S swiper@5.4.2 react-id-swiper@3.0.0  
// //         https://react-id-swiper.ashernguyen.site/doc/get-started
// //サンプル： https://react-id-swiper.ashernguyen.site/example/three-d-flip-effect

// export const ImageSwiper = (props) => {
//   const params = {
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'fraction',
//     },
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   }
//   const fightclub2 = "/static/fightClub2.jpeg"
//   const nullAvatar = "/static/null_avatar.jpeg"
  
//   const images = [fightclub2, fightclub2, fightclub2 , nullAvatar]
//   return(
//     <div className="w-11/12 h-11/12 my-auto">
//     <Swiper {...params} >
//       {images.length === 0 ? (
//           <img src="/static/fightClub1.jpeg" alt="画像がありません" />
//       ) : (
//         images.map(image => (
//             <img src={image} alt="アプリ画像" />
//         ))
//       )}
//     </Swiper>
//     </div>
//   )
// }
