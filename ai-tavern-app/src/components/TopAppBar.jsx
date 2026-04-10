import { Link } from 'react-router-dom';

export default function TopAppBar({ title, showBack = false, rightIcon = 'search' }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-6 h-16 w-full">
        {showBack ? (
          <Link to="/" className="text-[#ffd16f] hover:bg-white/10 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
        ) : (
          <button className="p-2 text-[#adaaaa] hover:bg-white/10 transition-colors active:scale-95 duration-200 rounded-full">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>menu</span>
          </button>
        )}

        <h1 className={`font-['Plus_Jakarta_Sans'] font-bold tracking-tighter text-xl text-[#FFBF00] ${!showBack ? 'text-2xl drop-shadow-[0_0_10px_rgba(255,191,0,0.4)]' : ''}`}>
          {title}
        </h1>

        <button className={`p-2 transition-colors active:scale-95 duration-200 rounded-full flex items-center justify-center ${showBack ? 'text-[#ffd16f] hover:bg-white/10' : 'text-[#adaaaa] hover:bg-white/10'}`}>
          <span className="material-symbols-outlined" style={!showBack ? {fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"} : {}}>{rightIcon}</span>
        </button>
      </div>
    </header>
  );
}
