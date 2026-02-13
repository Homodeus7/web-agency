export function TableHeader() {
  return (
    <div className="sticky top-0 z-20 grid grid-cols-[30%_23.33%_23.33%_23.33%] min-w-[800px] bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="px-4 md:px-6 py-3 flex items-center">
        <span className="text-[10px] md:text-xs uppercase font-bold text-white tracking-widest cursor-pointer hover:opacity-60 transition-opacity">
          Критерий
        </span>
      </div>

      <div className="px-4 md:px-6 py-3 flex items-center">
        <span className="text-[10px] md:text-xs uppercase font-bold text-white tracking-widest cursor-pointer hover:opacity-60 transition-opacity">
          Webflow
        </span>
      </div>

      <div className="px-4 md:px-6 py-3 flex items-center">
        <span className="text-[10px] md:text-xs uppercase font-bold text-white tracking-widest cursor-pointer hover:opacity-60 transition-opacity">
          WordPress
        </span>
      </div>

      <div className="px-4 md:px-6 py-3 flex items-center">
        <span className="text-[10px] md:text-xs uppercase font-bold text-cyan-400 tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
          Next.js
        </span>
      </div>
    </div>
  );
}
