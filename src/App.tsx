import './App.css';
import Home from './components/Home/Home';
import LetsTalk from './components/LetsTalk/LetsTalk';
import Navbar from './components/Navbar/Navbar';
import Training from './components/Training/Training';

export const App = () => {
  return (
    <div className="w-full bg-black min-h-screen  text-white flex flex-col items-center justify-center font-sans relative overflow-hidden">
      <div className="content">
        <div className="background" />
        <Navbar />
        <Home/>
        <div>
          <div className="image-line"></div>
          <Training/>
        </div>
        <LetsTalk/>
      </div>
      {/* Rodapé */}
      <footer className="text-center !my-12 text-gray-600">
          <p>© 2025 Bruna, All Rights Reserved.</p>
        </footer>
    </div>
  );
};