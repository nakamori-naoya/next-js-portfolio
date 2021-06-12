import { useState, useContext } from "react";
import Cookie from "universal-cookie";
import fightclub1 from "../img/fightClub1.jpeg";
import gituhub1 from "../img/github_icon.png"
import { login, register, getMyProfile } from '../DB/user';
import { Settings } from "@material-ui/icons";
import { ApiContext } from "../ApiContext/ApiContext";


const Auth = () => {
  const { setMyProfile, setEditedMyProfile} = useContext(ApiContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); //defaultではログインページを表示させる

  //ログインorRegister
  const authUser = async (e) => {
    e.preventDefault();
    if (isLogin) {
      login(email, password);
    } else {
      try {
        await register(email, password)
        await login(email, password);
      } catch (err) {
        alert(err);
      }
    }
    const myPro = await getMyProfile()
    setMyProfile(myPro)
    setEditedMyProfile(myPro)
  };

  return (
    <div className="max-w-md w-full space-y-8">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          {isLogin ? "Login" : "Sign up"}
        </h2>
      </div>

      {/* onSubmitでauthUser()関数が発火=>
          ①新規登録の場合は、Djangoとの間で新規登録の処理を行い login()関数が発火=>JWTのトークンを取得=>cookieにアクセストークンをセットする 
          ②ログインの場合は、login()関数が発火=>JWTのトークンを取得=>cookieにアクセストークンをセットする */}
      <form className="mt-8 space-y-6" onSubmit={authUser}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              name="email"
              type="email"
              autoComplete="email" //自動補完
              required
              className="appearance-none rounded-none relative block 
                          w-full px-3 py-2 border border-gray-300 
                          placeholder-gray-500 text-gray-900 rounded-t-md 
                          focus:outline-none focus:ring-indigo-500 
                          focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block 
                          w-full px-3 py-2 border border-gray-300 
                        placeholder-gray-500 text-gray-900 rounded-b-md 
                          focus:outline-none focus:ring-indigo-500 
                          focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="text-sm">
            {/* isLoginのBooleanを反転させることでauthUser関数の条件分岐がかわる */}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="cursor-pointer font-medium text-white hover:text-indigo-500"
            >
              Change mode ?
            </span>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 
                        px-4 border border-transparent text-sm 
                        font-medium rounded-md text-white bg-indigo-600 
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {isLogin ? "ログイン" : "新規登録"}
          </button>
        </div>
      </form>
    </div>
  );
};
export default Auth;
