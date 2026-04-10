import { Link } from 'react-router-dom';

export default function CharacterCard({ name, avatar, intro, tags, linkTo }) {
  const content = (
    <article className="relative group overflow-hidden rounded-xl bg-surface-container border border-outline-variant/15 neon-shadow h-[480px]">
      <img alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={avatar}/>
      <div className="absolute inset-0 card-gradient"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col items-start">
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => {
            const colors = ['primary', 'secondary', 'tertiary', 'error'];
            const color = colors[index % colors.length];
            return (
              <span key={index} className={`px-3 py-1 bg-${color}/20 text-${color} border border-${color}/30 rounded-full text-xs font-bold uppercase tracking-wider`}>
                {tag}
              </span>
            );
          })}
        </div>
        <h3 className="text-3xl font-headline font-bold text-white mb-2">{name}</h3>
        <p className="text-on-surface-variant font-body text-lg mb-6 leading-relaxed italic">“{intro}”</p>
        <button className="w-full py-4 bg-gradient-to-br from-[#ffd16f] to-[#ffbf00] text-[#0e0e0e] rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,191,0,0.3)] active:scale-95 transition-transform">
          {linkTo ? '探寻秘密' : '与之对饮'}
        </button>
      </div>
    </article>
  );

  if (linkTo) {
    return <Link to={linkTo} className="block cursor-pointer">{content}</Link>;
  }

  return content;
}
