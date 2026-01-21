const STICKY_CELL_CLASS =
  "sticky left-0 z-10 bg-slate-900/95 backdrop-blur-sm after:absolute after:right-0 after:top-0 after:bottom-0 after:w-4 after:bg-linear-to-r after:from-slate-900/80 after:to-transparent after:pointer-events-none md:after:hidden";

interface PlatformHeaderProps {
  name: string;
  subtitle: string;
  isHighlighted?: boolean;
}

function PlatformHeader({
  name,
  subtitle,
  isHighlighted = false,
}: PlatformHeaderProps) {
  if (isHighlighted) {
    return (
      <div className="relative p-4 md:p-8 pb-4 md:pb-6 flex flex-col justify-end items-start bg-blue-500/5">
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[8px] md:text-[10px] font-bold px-2 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg">
          НАШ ВЫБОР
        </div>
        <h3 className="text-base md:text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-200">
          {name}
        </h3>
        <p className="text-[10px] md:text-xs text-blue-400/60 mt-1 hidden md:block">
          {subtitle}
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 pb-4 md:pb-6 flex flex-col justify-end items-start border-r border-slate-800/30">
      <h3 className="text-base md:text-xl font-semibold text-slate-300">
        {name}
      </h3>
      <p className="text-[10px] md:text-xs text-slate-500 mt-1 hidden md:block">
        {subtitle}
      </p>
    </div>
  );
}

const platforms: PlatformHeaderProps[] = [
  { name: "Webflow", subtitle: "No-code конструктор" },
  { name: "WordPress", subtitle: "Старая школа CMS" },
  { name: "Next.js", subtitle: "Headless CMS + React", isHighlighted: true },
];

export function TableHeader() {
  return (
    <div className="grid grid-cols-4 min-w-200 border-b border-slate-800/60">
      <div
        className={`p-4 md:p-8 flex items-end pb-4 md:pb-6 ${STICKY_CELL_CLASS}`}
      >
        <span className="text-slate-400 font-medium tracking-wide uppercase text-xs">
          Критерий
        </span>
      </div>

      {platforms.map((platform) => (
        <PlatformHeader key={platform.name} {...platform} />
      ))}
    </div>
  );
}
