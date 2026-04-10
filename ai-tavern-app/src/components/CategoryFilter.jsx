export default function CategoryFilter() {
  const categories = [
    { id: 'all', name: '全部 (All)', active: true },
    { id: 'trending', name: '热门角色 (Trending)', active: false },
    { id: 'romance', name: '红颜知己 (Romance)', active: false },
    { id: 'mystery', name: '悬疑推理 (Mystery)', active: false },
    { id: 'cyber', name: '赛博朋克 (Cyberpunk)', active: false },
  ];

  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2 mb-6 -mx-4 px-4">
      <div className="flex gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              cat.active
                ? 'bg-primary text-surface border-primary shadow-[0_0_10px_rgba(255,191,0,0.3)]'
                : 'bg-surface-container text-on-surface-variant border-outline-variant/30 hover:text-on-surface hover:border-outline-variant'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
