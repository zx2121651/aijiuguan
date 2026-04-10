import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="fixed bottom-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-3xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(188,135,254,0.06)]">
      <div className="flex justify-around items-center px-4 pb-6 pt-3">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center px-6 py-2 transition-all ${currentPath === '/' ? 'bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full shadow-[0_0_15px_rgba(255,191,0,0.5)]' : 'text-[#adaaaa] hover:text-white active:scale-90'}`}
        >
          <span className="material-symbols-outlined" style={{fontVariationSettings: currentPath === '/' ? "'FILL' 1" : "'FILL' 0"}}>home</span>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold">大厅</span>
        </Link>
        <button className="flex flex-col items-center justify-center text-[#adaaaa] px-6 py-2 hover:text-white transition-all active:scale-90">
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold">消息</span>
        </button>
        <button className="flex flex-col items-center justify-center text-[#adaaaa] px-6 py-2 hover:text-white transition-all active:scale-90">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-semibold">我的</span>
        </button>
      </div>
    </nav>
  );
}
