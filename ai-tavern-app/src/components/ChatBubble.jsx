export default function ChatBubble({ isUser, message, time }) {
  if (isUser) {
    return (
      <div className="flex flex-col items-end w-full">
        <div className="bg-secondary-container/30 rounded-3xl chat-bubble-tail-right p-5 shadow-[0_0_20px_rgba(188,135,254,0.05)] border border-secondary/20 relative group max-w-[85%]">
          <p className="text-on-surface text-[15px] leading-relaxed">
            {message}
          </p>
        </div>
        {time && <span className="text-[11px] text-on-surface-variant mt-2 mr-2 font-medium">Read {time}</span>}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start max-w-[85%]">
      <div className="bg-surface-container-high rounded-3xl chat-bubble-tail-left p-5 shadow-lg border border-white/5 relative group">
        <p className="text-on-surface text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: message }}></p>
      </div>
    </div>
  );
}
