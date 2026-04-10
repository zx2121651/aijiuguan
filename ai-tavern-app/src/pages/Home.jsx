import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-background min-h-screen pb-32">
      <div className="fixed inset-0 grain-overlay z-0"></div>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-3xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center px-6 h-16 w-full">
          <button className="p-2 text-[#adaaaa] hover:bg-white/10 transition-colors active:scale-95 duration-200 rounded-full">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>menu</span>
          </button>
          <h1 className="font-['Plus_Jakarta_Sans'] font-bold tracking-tighter text-2xl text-[#FFBF00] drop-shadow-[0_0_10px_rgba(255,191,0,0.4)]">AI 酒馆</h1>
          <button className="p-2 text-[#adaaaa] hover:bg-white/10 transition-colors active:scale-95 duration-200 rounded-full">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24"}}>search</span>
          </button>
        </div>
      </header>

      {/* Main Content: Tavern Hall */}
      <main className="relative z-10 pt-20 px-4 max-w-2xl mx-auto">
        <section className="mb-10 mt-4">
          <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-2">
            <span className="text-on-surface">欢迎来到</span><br/>
            <span className="text-primary">霓虹酒馆</span>
          </h2>
          <p className="text-on-surface-variant font-body">选一个空位坐下，每一杯酒都有一个故事。</p>
        </section>

        <div className="grid grid-cols-1 gap-8">
          {/* Character Card 1 */}
          <article className="relative group overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 neon-shadow h-[480px]">
            <img alt="Li Ming" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtO2zLW7xynLaTL3G0ae8Zg4LR3nBiVwcuM4jkDNXHGAIyetkIxvxtqoyRihuTDo1LaMfG5gZar0xEuBerbS5Jz--WbGy8bu32lqlubumo9YGghCnAtHgPPGeaJvtcOx3thH-qr5A4SPb8vzsbxE1h9uEt-2HDCmXg43zRrwXT1LBbLRuUGCe5P-OyuJSUQrK0oiRtHR56aNxsLscywJheuJHExL7lXRw4KTI0RmtAahKp5x1O6btqdAsZwz5yjexqyLqpfAKuOLbD"/>
            <div className="absolute inset-0 card-gradient"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider">温柔</span>
                <span className="px-3 py-1 bg-tertiary/20 text-tertiary border border-tertiary/30 rounded-full text-xs font-bold uppercase tracking-wider">博学</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-white mb-2">黎明 (Li Ming)</h3>
              <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed italic">“今晚想喝点什么？特调的‘午夜雨滴’，或许能洗刷你的烦恼。”</p>
              <button className="w-full py-4 bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,191,0,0.3)] active:scale-95 transition-transform">与之对饮</button>
            </div>
          </article>

          {/* Character Card 2 */}
          <Link to="/profile">
            <article className="relative group overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 neon-shadow h-[480px] block cursor-pointer">
              <img alt="Su Wan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4cCpshjEfihlC6Q8cTYnISof782tkFPKsjy_Ij6N_DihmJAZ4ZmntNLAWM1qgEvrT21qGMpzJShKCRUC0a4SDPaM5jbYSCsufMpU83l1t5BFq0PRtg5NDTn9y245UdNPA9ufvtneiCIs1Bjsqpyhw3OKJ4EwAWjlsy7HQ5zsoGZQlBbMaQ14mVlw0ZIusBGo2wAQ-3FMh7TZDu_udfaYfEqn2t9FZPzeJdb49TU4dwAo3eIzfpb4UCVTU1eMIgTJzGuRU7Q635WMn"/>
              <div className="absolute inset-0 card-gradient"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded-full text-xs font-bold uppercase tracking-wider">神秘</span>
                  <span className="px-3 py-1 bg-error/20 text-error border border-error/30 rounded-full text-xs font-bold uppercase tracking-wider">高冷</span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-white mb-2">苏婉 (Su Wan)</h3>
                <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed italic">“这里的秘密，只在午夜开启。你，准备好交换你的故事了吗？”</p>
                <button className="w-full py-4 bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,191,0,0.3)] active:scale-95 transition-transform">探寻秘密</button>
              </div>
            </article>
          </Link>

          {/* Character Card 3 */}
          <article className="relative group overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 neon-shadow h-[480px]">
            <img alt="A-Jay" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQooRWuBsfTCWOgMzDzH92h-ja8Nc42f6H559_N2FBAyJku1V2VUq9_-Rns0G4C-XVahjz3LFtbDQeC0IDl5yEB9qu_gHdKYUFUmFNrYymM1sX0wdyLiSDO9V3caHmRAt4yo4HKpPLLamcqRSPQqsHhflIFaYIdEdlzoZfhB0quqUJWfq1r4UhVnrdFachTbIdCwc8wilTIbolHSHqAFT1Z4O5AmqEKwwufCseg8mXjvJS5rYEcHSAQMB4TICX_EVGouRIIHU_SnLu"/>
            <div className="absolute inset-0 card-gradient"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 bg-tertiary/20 text-tertiary border border-tertiary/30 rounded-full text-xs font-bold uppercase tracking-wider">幽默</span>
                <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider">黑客</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-white mb-2">阿杰 (A-Jay)</h3>
              <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed italic">“我的算法告诉我，我们今晚会有不少共同话题。”</p>
              <button className="w-full py-4 bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,191,0,0.3)] active:scale-95 transition-transform">接入频道</button>
            </div>
          </article>
        </div>
      </main>

      {/* BottomNavBar */}
      <nav className="fixed bottom-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-3xl rounded-t-[3rem] shadow-[0_-10px_40px_rgba(188,135,254,0.06)]">
        <div className="flex justify-around items-center px-4 pb-6 pt-3">
          <Link to="/" className="flex flex-col items-center justify-center bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full px-6 py-2 shadow-[0_0_15px_rgba(255,191,0,0.5)] transition-all">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
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
    </div>
  );
}
