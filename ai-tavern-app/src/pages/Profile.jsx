import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="bg-surface text-on-surface">
      {/* TopAppBar */}
      <header className="fixed top-0 z-50 flex justify-between items-center px-6 h-16 w-full bg-[#0e0e0e]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(188,135,254,0.06)]">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-[#ffd16f] hover:bg-white/10 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </Link>
          <h1 className="font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-xl text-[#ffd16f]">Character Profile</h1>
        </div>
        <button className="text-[#ffd16f] hover:bg-white/10 transition-colors active:scale-95 duration-200 p-2 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">share</span>
        </button>
      </header>

      <main className="relative min-h-screen pb-32">
        {/* Main Visual: Cinematic Portrait */}
        <section className="relative w-full h-[530px] overflow-hidden">
          <div className="absolute inset-0 portrait-mask">
            <img alt="Su Wan Profile" className="w-full h-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQvYnMJOhW9wv5NUw8xnImBI91cp96Wk3QYUdRPnvuDYHSBIcd1ak4hRE0j2G65PdejIcabOhoHyI1ksSM8BXEyWNG4SAD12esw73kr4srf9tEsm8dvWCKgYTEuoicRwzdfqOBtyOW-5Q-QNgQhohD94NIh8sKUuw6WoO86I-VzR7_628jKDKU28poj8e0PfD69ZUFWmp5AVEgwxK1yfHttW6ok01zYtKqsMliXrkvobaD8AoxKao8K1kfmJ0ghbfjjLB5TkwQ1byu"/>
          </div>
          {/* Gradient Overlay for transition */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent"></div>
        </section>

        {/* Content Section */}
        <section className="relative -mt-24 px-6 z-10">
          {/* Name & Identity */}
          <div className="glass-panel p-8 rounded-lg shadow-[0_0_40px_rgba(188,135,254,0.06)] border border-white/5">
            <div className="flex flex-col gap-2">
              <h2 className="font-headline font-extrabold text-4xl text-primary text-neon-glow tracking-tight">苏婉 (Su Wan)</h2>
              {/* Personality Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-4 py-1.5 bg-surface-container rounded-full text-sm font-medium text-tertiary border border-tertiary/10">神秘</span>
                <span className="px-4 py-1.5 bg-surface-container rounded-full text-sm font-medium text-secondary border border-secondary/10">冷艳</span>
                <span className="px-4 py-1.5 bg-surface-container rounded-full text-sm font-medium text-primary border border-primary/10">故事</span>
              </div>
            </div>

            {/* Story Section */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-2 text-on-surface-variant uppercase tracking-widest text-xs font-bold">
                <span className="w-8 h-[1px] bg-outline-variant"></span>
                背景故事
              </div>
              <p className="font-body text-lg leading-relaxed text-on-surface/90">
                在霓虹闪烁的酒馆尽头，苏婉静静地坐着。她的眼神里藏着半个世纪的秘密，每一杯调制的酒都仿佛是一个未完待续的故事。
              </p>
            </div>

            {/* Affinity / Progress Section */}
            <div className="mt-10 p-6 bg-surface-container-lowest rounded-lg border border-white/5">
              <div className="flex justify-between items-end mb-3">
                <div className="flex flex-col">
                  <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest">好感度</span>
                  <span className="text-primary font-headline font-bold text-2xl">Lvl. 4</span>
                </div>
                <span className="text-primary font-headline font-bold">65%</span>
              </div>
              {/* Neon Amber Progress Bar */}
              <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-container shadow-[0_0_15px_rgba(255,191,0,0.5)]" style={{ width: '65%' }}></div>
              </div>
              <p className="mt-4 text-xs text-on-surface-variant italic">
                “这里的酒很烈，你的心事也很重。”
              </p>
            </div>
          </div>

          {/* Interaction Features / Bento Grid Style */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-3">
              <span className="material-symbols-outlined text-secondary">auto_awesome</span>
              <span className="font-bold text-sm">专属回忆</span>
              <span className="text-xs text-on-surface-variant">解锁 3/12 个章节</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg flex flex-col gap-3">
              <span className="material-symbols-outlined text-tertiary">restaurant_menu</span>
              <span className="font-bold text-sm">苏式特调</span>
              <span className="text-xs text-on-surface-variant">品尝过 2 款酒饮</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Button */}
      <div className="fixed bottom-0 left-0 w-full p-6 z-50 pointer-events-none">
        <Link to="/chat" className="pointer-events-auto w-full h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,191,0,0.3)] active:scale-95 transition-all duration-200">
          <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat_bubble</span>
          开启对话
        </Link>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
