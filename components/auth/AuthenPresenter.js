import React from 'react'
import NormalInput from '../../UIkit/NormalInput';

const AuthenPresenter = ({
  email, password, isLogin, setIsLogin, 
  inputEmail, inputPassword, authUser
  }) => {
return(
  <div className="max-w-md w-full  mx-auto pt-40 h-full ">
      <div>
        <h2 className=" text-center text-3xl  font-extrabold text-white">
          {isLogin ? "Login" : "Sign up"}
        </h2>
      </div>

      <form className="mt-8 space-y-6" onSubmit={authUser}>
        <input type="hidden" name="remember" value="true" />
        <div className="rounded-md shadow-sm -space-y-px">
          <NormalInput
            name="email" type="email"
            autoComplete="email" required="true"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="emailを入力"
            value={email} onChange={inputEmail}
          />
            
          <NormalInput
            name="password" type="password"
            autoComplete="current-password" required="true"
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Passwordを半角英数字混合で6文字以上20文字以下で入力"
            value={password} onChange={inputPassword}
          />
        </div>

        <div className="flex items-center justify-center">
          <div className="text-sm">
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
            className="group relative w-full flex justify-center 
                      py-2 px-4 border border-transparent text-sm 
                      font-medium rounded-md text-white bg-indigo-600
                    hover:bg-indigo-700 focus:outline-none focus:ring-2 
                      focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? "ログイン" : "新規登録"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AuthenPresenter
