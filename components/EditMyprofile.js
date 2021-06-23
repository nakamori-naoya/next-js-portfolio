// import React from "react";
// import { useState } from "react";
// import Cookie from "universal-cookie";
// import fightclub1 from "../img/fightClub1.jpeg";
// import SimpleButton from "../UIkit/SimpleButton";

// const cookie = new Cookie();

// export default function EditMyprofile() {
//   const token = cookie.get("access_token");
//   const createProfile = async () => {
//     try {
//       await fetch(`http://localhost:3000/api/v1/users/3/profiles`, {
//         method: "POST",
//         body: JSON.stringify({
//           nickName: "nigg",
//           image_data: fightclub1,
//         }), //JSON.stringfy()について：https://qiita.com/qoAop/items/57d35a41ef9629351c3c
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }).then((res) => {
//         return console.log(res.json());
//       });
//     } catch (err) {
//       alert(err);
//     }
//   };
//   return (
//     <div>
//       <SimpleButton onClick={() => createProfile()} />
//     </div>
//   );
// }
