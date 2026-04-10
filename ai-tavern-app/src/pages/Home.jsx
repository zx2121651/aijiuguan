import TopAppBar from '../components/TopAppBar';
import BottomNavBar from '../components/BottomNavBar';
import CharacterCard from '../components/CharacterCard';

const CHARACTERS = [
  {
    id: 1,
    name: '黎明 (Li Ming)',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtO2zLW7xynLaTL3G0ae8Zg4LR3nBiVwcuM4jkDNXHGAIyetkIxvxtqoyRihuTDo1LaMfG5gZar0xEuBerbS5Jz--WbGy8bu32lqlubumo9YGghCnAtHgPPGeaJvtcOx3thH-qr5A4SPb8vzsbxE1h9uEt-2HDCmXg43zRrwXT1LBbLRuUGCe5P-OyuJSUQrK0oiRtHR56aNxsLscywJheuJHExL7lXRw4KTI0RmtAahKp5x1O6btqdAsZwz5yjexqyLqpfAKuOLbD',
    intro: '今晚想喝点什么？特调的‘午夜雨滴’，或许能洗刷你的烦恼。',
    tags: ['温柔', '博学'],
  },
  {
    id: 2,
    name: '苏婉 (Su Wan)',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4cCpshjEfihlC6Q8cTYnISof782tkFPKsjy_Ij6N_DihmJAZ4ZmntNLAWM1qgEvrT21qGMpzJShKCRUC0a4SDPaM5jbYSCsufMpU83l1t5BFq0PRtg5NDTn9y245UdNPA9ufvtneiCIs1Bjsqpyhw3OKJ4EwAWjlsy7HQ5zsoGZQlBbMaQ14mVlw0ZIusBGo2wAQ-3FMh7TZDu_udfaYfEqn2t9FZPzeJdb49TU4dwAo3eIzfpb4UCVTU1eMIgTJzGuRU7Q635WMn',
    intro: '这里的秘密，只在午夜开启。你，准备好交换你的故事了吗？',
    tags: ['神秘', '高冷'],
    linkTo: '/profile'
  },
  {
    id: 3,
    name: '阿杰 (A-Jay)',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQooRWuBsfTCWOgMzDzH92h-ja8Nc42f6H559_N2FBAyJku1V2VUq9_-Rns0G4C-XVahjz3LFtbDQeC0IDl5yEB9qu_gHdKYUFUmFNrYymM1sX0wdyLiSDO9V3caHmRAt4yo4HKpPLLamcqRSPQqsHhflIFaYIdEdlzoZfhB0quqUJWfq1r4UhVnrdFachTbIdCwc8wilTIbolHSHqAFT1Z4O5AmqEKwwufCseg8mXjvJS5rYEcHSAQMB4TICX_EVGouRIIHU_SnLu',
    intro: '我的算法告诉我，我们今晚会有不少共同话题。',
    tags: ['幽默', '黑客'],
  }
];

export default function Home() {
  return (
    <div className="bg-background min-h-screen pb-32">
      <div className="fixed inset-0 grain-overlay z-0"></div>

      <TopAppBar title="AI 酒馆" />

      <main className="relative z-10 pt-20 px-4 max-w-2xl mx-auto">
        <section className="mb-10 mt-4">
          <h2 className="text-4xl font-headline font-extrabold tracking-tight mb-2">
            <span className="text-on-surface">欢迎来到</span><br/>
            <span className="text-primary">霓虹酒馆</span>
          </h2>
          <p className="text-on-surface-variant font-body">选一个空位坐下，每一杯酒都有一个故事。</p>
        </section>

        <div className="grid grid-cols-1 gap-8">
          {CHARACTERS.map(char => (
            <CharacterCard key={char.id} {...char} />
          ))}
        </div>
      </main>

      <BottomNavBar />
    </div>
  );
}
