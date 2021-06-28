import SimpleNavBarContainer from './Navbar/SimpleNavBarContainer';
export default function Layout({ children, title }) {
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