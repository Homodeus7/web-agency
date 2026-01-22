import { VisualCard } from "../VisualCard";

const SANITY_FEATURES = [
  {
    icon: "T",
    iconBg: "bg-accent-primary/20",
    iconColor: "text-accent-primary",
    title: "Заголовок секции",
    description: "Редактируйте прямо в браузере",
  },
  {
    icon: "I",
    iconBg: "bg-accent-secondary/20",
    iconColor: "text-accent-secondary",
    title: "Изображения",
    description: "Drag & drop загрузка",
  },
  {
    icon: "L",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    title: "Списки и блоки",
    description: "Гибкая структура контента",
  },
];

export function FlexibilityVisual() {
  return (
    <VisualCard
      icon={{ gradient: "from-purple-400 to-pink-500" }}
      label="Sanity Studio"
    >
      <div className="space-y-3">
        {SANITY_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
          >
            <div
              className={`w-8 h-8 rounded ${feature.iconBg} flex items-center justify-center`}
            >
              <span className={`${feature.iconColor} text-xs`}>
                {feature.icon}
              </span>
            </div>
            <div className="flex-1">
              <div className="text-sm text-white">{feature.title}</div>
              <div className="text-xs text-text-secondary">
                {feature.description}
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
        ))}
      </div>
    </VisualCard>
  );
}
