import { useState, useContext, useCallback } from "react";
import { login, register, getUserId } from '../lib/user';
import { StateContext } from '../ApiContext/StateContext';
import { useRouter } from "next/router";


const useAuth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); //defaultではログインページを表示させる
  const {setUserId} = useContext(StateContext);

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, []);

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, []);

  //ログインorRegister
  const authUser = async (e) => {
    e.preventDefault();
    if (isLogin) {
      const status = await login(email, password);
      if(status == 201){
      router.push("/portfolio-cards");
      }
    } else {
      try {
        const res =  await register(email, password)
        const status =  await login(email, password)
      if(res.data.status == 201 && status == 201){
        router.push("/profile-editor");
        }
      } catch (err) {
        alert(err);
      }
    }
  };

  return {email, password, isLogin, setIsLogin, inputEmail, inputPassword, authUser}
}

export default useAuth
