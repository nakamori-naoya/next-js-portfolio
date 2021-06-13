export default function Layout({ children }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <main className="w-11/12 flex justify-center items-center">
        {children}
      </main>

      <footer className="w-full h-6 mt-5 flex justify-center items-center text-gray-500 text-sm">
        Created by Naoya Nakmamori
      </footer>
    </div>
  );
}
