export default function ChatInput() {
  return (
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
  );
}
