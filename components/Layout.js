import SimpleNavBarContainer from './Navbar/SimpleNavBarContainer';
import Cookie from "universal-cookie";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Layout = ({ children, title }) => {
  const router = useRouter();
  const cookie = new Cookie();
  const token = cookie.get("access_token")
  

  useEffect(() => {
    if(!token && title !== "Login"){
      router.push("/")
    }
  }, [])


  return (
    <div className="min-h-screen text-white font-mono bg-gray-500">
      <header>
        {title !== "Login" ?  (<SimpleNavBarContainer/>) : (<></>)}
      </header>
      <main className="-pt-10">
        {children}
      </main>
      <footer className="w-full h-6 flex justify-center items-center text-gray-500 text-sm">
        Created by Naoya Nakmamori
      </footer>
    </div>
  );
}

export default Layout