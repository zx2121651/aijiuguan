import { Link } from 'react-router-dom';

export default function RecentChats() {
  const recentChats = [
    {
      id: 1,
      name: '苏婉',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4cCpshjEfihlC6Q8cTYnISof782tkFPKsjy_Ij6N_DihmJAZ4ZmntNLAWM1qgEvrT21qGMpzJShKCRUC0a4SDPaM5jbYSCsufMpU83l1t5BFq0PRtg5NDTn9y245UdNPA9ufvtneiCIs1Bjsqpyhw3OKJ4EwAWjlsy7HQ5zsoGZQlBbMaQ14mVlw0ZIusBGo2wAQ-3FMh7TZDu_udfaYfEqn2t9FZPzeJdb49TU4dwAo3eIzfpb4UCVTU1eMIgTJzGuRU7Q635WMn',
      unread: 2,
      isOnline: true,
    },
    {
      id: 2,
      name: '阿杰',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQooRWuBsfTCWOgMzDzH92h-ja8Nc42f6H559_N2FBAyJku1V2VUq9_-Rns0G4C-XVahjz3LFtbDQeC0IDl5yEB9qu_gHdKYUFUmFNrYymM1sX0wdyLiSDO9V3caHmRAt4yo4HKpPLLamcqRSPQqsHhflIFaYIdEdlzoZfhB0quqUJWfq1r4UhVnrdFachTbIdCwc8wilTIbolHSHqAFT1Z4O5AmqEKwwufCseg8mXjvJS5rYEcHSAQMB4TICX_EVGouRIIHU_SnLu',
      unread: 0,
      isOnline: false,
    },
    {
      id: 3,
      name: '黎明',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtO2zLW7xynLaTL3G0ae8Zg4LR3nBiVwcuM4jkDNXHGAIyetkIxvxtqoyRihuTDo1LaMfG5gZar0xEuBerbS5Jz--WbGy8bu32lqlubumo9YGghCnAtHgPPGeaJvtcOx3thH-qr5A4SPb8vzsbxE1h9uEt-2HDCmXg43zRrwXT1LBbLRuUGCe5P-OyuJSUQrK0oiRtHR56aNxsLscywJheuJHExL7lXRw4KTI0RmtAahKp5x1O6btqdAsZwz5yjexqyLqpfAKuOLbD',
      unread: 0,
      isOnline: true,
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-4">
        <h3 className="text-lg font-headline font-bold text-on-surface">继续你们的故事 <span className="text-sm font-normal text-on-surface-variant ml-1">(Recent Chats)</span></h3>
        <button className="text-primary text-xs font-semibold tracking-wider hover:text-primary-dim transition-colors">查看全部</button>
      </div>

      <div className="w-full overflow-x-auto no-scrollbar -mx-4 px-4 pb-2">
        <div className="flex gap-4">
          {recentChats.map((chat) => (
            <Link key={chat.id} to="/chat" className="flex flex-col items-center gap-2 flex-shrink-0 group cursor-pointer w-[72px]">
              <div className="relative">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-surface-variant group-hover:border-primary/50 transition-colors">
                  <img src={chat.avatar} alt={chat.name} className="w-full h-full object-cover" />
                </div>

                {/* Online Status Indicator */}
                {chat.isOnline && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-tertiary border-2 border-background rounded-full shadow-[0_0_8px_rgba(160,255,240,0.5)]"></div>
                )}

                {/* Unread Badge */}
                {chat.unread > 0 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-background shadow-md">
                    {chat.unread}
                  </div>
                )}
              </div>
              <span className="text-xs font-medium text-on-surface-variant truncate w-full text-center group-hover:text-primary transition-colors">{chat.name}</span>
            </Link>
          ))}

          {/* Discover New Characters Button */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer w-[72px] justify-start group">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-outline-variant flex items-center justify-center bg-surface-container-low group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">search</span>
            </div>
            <span className="text-xs font-medium text-on-surface-variant text-center mt-[2px] group-hover:text-primary transition-colors">发现更多</span>
          </div>
        </div>
      </div>
    </div>
  );
}
