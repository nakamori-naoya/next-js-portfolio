// import { useState } from "react";
// import { useRouter } from "next/router";
// import Cookie from "universal-cookie";

// //universal-cookieの使用方法：https://www.npmjs.com/package/universal-cookie
// const cookie = new Cookie();

// //Auth.jsはLayout.jsでラップされている。
// const Auth = () => {
//   const router = useRouter(); //関数の中からページ遷移したいときに使う  login()の末尾で使用
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true); //defaultではログインページを表示させる

//   const login = async () => {
//     //JWTトークンの取得
//     try {
//       await fetch(
//         `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create/`,
//         {
//           method: "POST",
//           body: JSON.stringify({ email: email, password: password }), //JSON.stringfy()について：https://qiita.com/qoAop/items/57d35a41ef9629351c3c
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((res) => {
//           if (res.status === 400) {
//             throw "authentication failed";
//           } else if (res.ok) {
//             return res.json();
//           }
//         })
//         .then((data) => {
//           const options = { path: "/" };
//           cookie.set("access_token", data.access, options); //optinonsの設定によって、URIが~~~.com/以降でも使えるようになる
//         });
//       router.push("/main-page");
//     } catch (err) {
//       alert(err);
//     }
//   };

//   //ログインorRegister
//   const authUser = async (e) => {
//     e.preventDefault();
//     if (isLogin) {
//       login();
//     } else {
//       try {
//         await fetch(
//           `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/user/register/`,
//           {
//             method: "POST",
//             body: JSON.stringify({ email: email, password: password }),
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         ).then((res) => {
//           if (res.status === 400) {
//             throw "authentication failed";
//           }
//         });
//         login();
//       } catch (err) {
//         alert(err);
//       }
//     }
//   };

//   return (
//     <div className="max-w-md w-full space-y-8">
//       <div>
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
//           {isLogin ? "Login" : "Sign up"}
//         </h2>
//       </div>

//       {/* onSubmitでauthUser()関数が発火=>
//           ①新規登録の場合は、Djangoとの間で新規登録の処理を行い login()関数が発火=>JWTのトークンを取得=>cookieにアクセストークンをセットする 
//           ②ログインの場合は、login()関数が発火=>JWTのトークンを取得=>cookieにアクセストークンをセットする */}
//       <form className="mt-8 space-y-6" onSubmit={authUser}>
//         <input type="hidden" name="remember" value="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div>
//             <input
//               name="email"
//               type="email"
//               autoComplete="email" //自動補完
//               required
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </div>

//           <div>
//             <input
//               name="password"
//               type="password"
//               autoComplete="current-password"
//               required
//               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//           </div>
//         </div>

//         <div className="flex items-center justify-center">
//           <div className="text-sm">
//             {/* isLoginのBooleanを反転させることでauthUser関数の条件分岐がかわる */}
//             <span
//               onClick={() => setIsLogin(!isLogin)}
//               className="cursor-pointer font-medium text-white hover:text-indigo-500"
//             >
//               Change mode ?
//             </span>
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//           >
//             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//               <svg
//                 className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </span>
//             {isLogin ? "ログイン" : "新規登録"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };
// export default Auth;
