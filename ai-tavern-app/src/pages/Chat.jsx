import { Link } from 'react-router-dom';

export default function Chat() {
  return (
    <div className="bg-background min-h-screen flex flex-col font-body">
      <div className="fixed inset-0 grain-overlay"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-3xl border-b border-white/5">
        <div className="flex items-center justify-between px-4 h-20">
          <div className="flex items-center gap-3">
            <Link to="/profile" className="p-2 -ml-2 text-on-surface hover:text-primary transition-colors rounded-full hover:bg-white/5 active:scale-95 flex items-center justify-center">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>

            <div className="relative group cursor-pointer">
              <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary/30 p-[2px]">
                <img alt="Su Wan Avatar" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQqR58T_5x0Hk8e24VdCHXnF9X1Y87t4V8V9p_V4U5cE8w46F9qWfS0-o1x8dI_t2zJk1F_Lw3R36n5h1G_87A8G9-o93P7m-o0e4B4h8W1y4wT8b2t6E6U74n5Q3W4l3E4y4R2n6M8r5X5v6C7j1M9n0G6y3d0W7t6L7F_k3M6g4E1V6J8k3W7D6N7G0u"/>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-tertiary rounded-full border-2 border-surface flex items-center justify-center shadow-[0_0_10px_rgba(160,255,240,0.5)]">
                <div className="w-1.5 h-1.5 bg-surface rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="font-headline font-bold text-lg text-on-surface leading-tight">苏婉</h1>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="material-symbols-outlined text-primary text-[14px]" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
                <span className="text-xs font-semibold text-primary tracking-wide">Lvl. 4</span>
              </div>
            </div>
          </div>

          <button className="p-2.5 text-secondary hover:text-secondary-dim transition-colors rounded-full hover:bg-secondary/10 active:scale-95 flex items-center justify-center bg-surface-container-low neon-shadow">
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>call</span>
          </button>
        </div>
      </header>

      {/* Main Chat Stream */}
      <main className="flex-1 overflow-y-auto px-4 py-8 space-y-8 relative z-10">
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1.5 rounded-full bg-surface-container-lowest border border-white/5 text-xs font-medium text-on-surface-variant tracking-wider">
            Today, 11:42 PM
          </span>
        </div>

        {/* AI Message 1 */}
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-surface-container-high rounded-3xl chat-bubble-tail-left p-5 shadow-lg border border-white/5 relative group">
            <p className="text-on-surface text-[15px] leading-relaxed">
              <span className="text-secondary italic mr-1">她轻轻推过一杯琥珀色的特调原酿</span>
              这里的夜才刚刚开始，你想听听哪段故事？
            </p>
          </div>
        </div>

        {/* User Message 1 */}
        <div className="flex flex-col items-end w-full">
          <div className="bg-secondary-container/30 rounded-3xl chat-bubble-tail-right p-5 shadow-[0_0_20px_rgba(188,135,254,0.05)] border border-secondary/20 relative group max-w-[85%]">
            <p className="text-on-surface text-[15px] leading-relaxed">
              跟我说说那个半个世纪前的秘密吧。
            </p>
          </div>
          <span className="text-[11px] text-on-surface-variant mt-2 mr-2 font-medium">Read 11:43 PM</span>
        </div>

        {/* AI Message 2 */}
        <div className="flex flex-col items-start max-w-[85%]">
          <div className="bg-surface-container-high rounded-3xl chat-bubble-tail-left p-5 shadow-lg border border-white/5 relative group">
            <p className="text-on-surface text-[15px] leading-relaxed">
              <span className="text-secondary italic mr-1">眼神中闪过一丝复杂的情绪，低头看向酒杯</span>
              那个秘密... 恐怕比这杯酒还要浓烈。你确定要听吗？
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Input Bar */}
      <footer className="sticky bottom-0 z-50 p-4 bg-surface/60 backdrop-blur-2xl border-t border-white/10 pb-8">
        <div className="flex items-center gap-3">
          <button className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors active:scale-95 border border-primary/20">
            <span className="material-symbols-outlined text-[28px]">add</span>
          </button>

          <div className="flex-1 relative">
            <input className="w-full h-12 bg-surface-container-lowest rounded-full pl-5 pr-12 text-[15px] text-on-surface placeholder:text-on-surface-variant/50 border border-white/5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner" placeholder="输入消息... (尝试描述你的动作)" type="text"/>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-surface shadow-[0_0_10px_rgba(255,191,0,0.3)] active:scale-90 transition-transform">
              <span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>arrow_upward</span>
            </button>
          </div>

          <button className="flex-shrink-0 w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors active:scale-95 border border-white/5">
            <span className="material-symbols-outlined text-[24px]">mic</span>
          </button>
        </div>
      </footer>
    </div>
  );
}
