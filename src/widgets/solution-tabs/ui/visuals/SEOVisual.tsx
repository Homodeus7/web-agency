import { VisualCard } from "../VisualCard";

const RICH_SNIPPETS = [
  { label: "★ 4.9 рейтинг" },
  { label: "FAQ Schema" },
  { label: "Open Graph" },
];

export function SEOVisual() {
  return (
    <VisualCard
      icon={{ gradient: "from-blue-400 via-red-400 to-yellow-400" }}
      label="Превью в Google"
    >
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-accent-primary/20 flex items-center justify-center">
              <span className="text-accent-primary text-xs font-bold">S</span>
            </div>
            <div>
              <div className="text-xs text-text-secondary">studio.dev</div>
              <div className="text-xs text-text-secondary/60">
                https://studio.dev
              </div>
            </div>
          </div>
          <div className="text-blue-400 text-sm font-medium mb-1 hover:underline cursor-pointer">
            Studio | Создание сайтов на Next.js + Sanity
          </div>
          <div className="text-xs text-text-secondary leading-relaxed">
            Разрабатываем быстрые бизнес-сайты на Next.js и Sanity CMS.
            Производительность 90+ баллов, гибкость и масштабируемость...
          </div>
        </div>
        <div className="flex gap-2">
          {RICH_SNIPPETS.map((snippet) => (
            <div
              key={snippet.label}
              className="px-3 py-1.5 rounded bg-white/5 border border-white/10 text-xs text-text-secondary"
            >
              {snippet.label}
            </div>
          ))}
        </div>
      </div>
    </VisualCard>
  );
}
