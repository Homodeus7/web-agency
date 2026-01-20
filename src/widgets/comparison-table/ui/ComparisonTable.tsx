import {
  Check,
  X,
  AlertTriangle,
  Info,
  Zap,
  Layers,
  Search,
  TrendingUp,
  Code,
  DollarSign,
} from "lucide-react";
import { Container, SectionHeading } from "@/shared/ui";

interface Metric {
  id: string;
  label: string;
  icon: React.ReactNode;
  webflow: {
    value: number | string;
    type: "bar" | "status" | "text";
    status?: "danger" | "warning" | "success";
    text?: string;
  };
  wordpress: {
    value: number | string;
    type: "bar" | "status" | "text";
    status?: "danger" | "warning" | "success";
    text?: string;
  };
  nextjs: {
    value: number | string;
    type: "bar" | "status" | "text";
    status?: "danger" | "warning" | "success";
    text?: string;
  };
}

const metrics: Metric[] = [
  {
    id: "speed",
    label: "Скорость загрузки",
    icon: <Zap size={16} />,
    webflow: { value: 40, type: "bar", text: "Средняя" },
    wordpress: { value: 35, type: "bar", text: "Зависит от плагинов" },
    nextjs: { value: 98, type: "bar", text: "Молниеносная" },
  },
  {
    id: "flexibility",
    label: "Гибкость разработки",
    icon: <Layers size={16} />,
    webflow: { value: 50, type: "bar", text: "Ограничена платформой" },
    wordpress: { value: 65, type: "bar", text: "Высокая (плагины)" },
    nextjs: { value: 100, type: "bar", text: "Безграничная" },
  },
  {
    id: "seo",
    label: "SEO Контроль",
    icon: <Search size={16} />,
    webflow: { value: 70, type: "bar", text: "Базовый" },
    wordpress: { value: 85, type: "bar", text: "Хороший" },
    nextjs: { value: 100, type: "bar", text: "Полный контроль" },
  },
  {
    id: "scale",
    label: "Масштабируемость",
    icon: <TrendingUp size={16} />,
    webflow: { value: 30, type: "bar", text: "Низкая" },
    wordpress: { value: 50, type: "bar", text: "Средняя" },
    nextjs: { value: 100, type: "bar", text: "Enterprise уровень" },
  },
  {
    id: "ownership",
    label: "Владение кодом",
    icon: <Code size={16} />,
    webflow: {
      value: "Нет",
      type: "status",
      status: "danger",
      text: "Platform lock-in",
    },
    wordpress: {
      value: "Частично",
      type: "status",
      status: "warning",
      text: "Сложный переезд",
    },
    nextjs: {
      value: "100%",
      type: "status",
      status: "success",
      text: "Ваш код навсегда",
    },
  },
  {
    id: "cost",
    label: "Стоимость/год*",
    icon: <DollarSign size={16} />,
    webflow: { value: "$3,500+", type: "text" },
    wordpress: { value: "$500+", type: "text" },
    nextjs: { value: "от $0", type: "text", status: "success" },
  },
];

const ProgressBar = ({
  value,
  colorClass,
}: {
  value: number;
  colorClass: string;
}) => (
  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2">
    <div
      className={`h-full rounded-full ${colorClass} transition-all duration-1000 ease-out`}
      style={{ width: `${value}%` }}
    />
  </div>
);

const StatusIcon = ({
  status,
  text,
}: {
  status?: "danger" | "warning" | "success";
  text: string;
}) => {
  if (status === "danger") {
    return (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center text-red-400 bg-red-400/10 px-2 py-1 rounded text-xs font-medium">
          <X size={14} className="mr-1.5" />
          Нет доступа
        </div>
        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
          {text}
        </span>
      </div>
    );
  }
  if (status === "warning") {
    return (
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center text-amber-400 bg-amber-400/10 px-2 py-1 rounded text-xs font-medium">
          <AlertTriangle size={14} className="mr-1.5" />С ограничениями
        </div>
        <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
          {text}
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start gap-1">
      <div className="flex items-center text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded text-xs font-medium">
        <Check size={14} className="mr-1.5" />
        Полный доступ
      </div>
      <span className="text-[10px] text-emerald-400/60 font-medium uppercase tracking-wider">
        {text}
      </span>
    </div>
  );
};

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 bg-bg-secondary">
      <Container>
        <SectionHeading>Честное сравнение</SectionHeading>
        <div className="w-full relative">
          {/* Glassmorphism Container */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1.1fr] min-w-3xl border-b border-slate-800/60">
              <div className="p-6 md:p-8 flex items-end pb-6">
                <span className="text-slate-400 font-medium tracking-wide uppercase text-xs">
                  Критерий сравнения
                </span>
              </div>

              <div className="p-6 md:p-8 pb-6 flex flex-col justify-end items-start border-r border-slate-800/30">
                <h3 className="text-xl font-semibold text-slate-300">
                  Webflow
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  No-code конструктор
                </p>
              </div>

              <div className="p-6 md:p-8 pb-6 flex flex-col justify-end items-start border-r border-slate-800/30">
                <h3 className="text-xl font-semibold text-slate-300">
                  WordPress
                </h3>
                <p className="text-xs text-slate-500 mt-1">Старая школа CMS</p>
              </div>

              {/* Winning Column Header */}
              <div className="relative p-6 md:p-8 pb-6 flex flex-col justify-end items-start bg-blue-500/5">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
                <div className="absolute top-4 right-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                  НАШ ВЫБОР
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-200">
                  Next.js + Sanity
                </h3>
                <p className="text-xs text-blue-400/60 mt-1">
                  Headless CMS + React
                </p>
              </div>
            </div>

            {/* Table Body */}
            <div className="min-w-3xl">
              {metrics.map((metric, index) => (
                <div
                  key={metric.id}
                  className={`grid grid-cols-[1.2fr_1fr_1fr_1.1fr] border-b border-slate-800/40 hover:bg-slate-800/20 transition-colors group ${index === metrics.length - 1 ? "border-b-0" : ""}`}
                >
                  {/* Label Column */}
                  <div className="p-6 flex items-center gap-3 text-slate-300 font-medium">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-400 group-hover:text-white transition-colors">
                      {metric.icon}
                    </div>
                    {metric.label}
                  </div>

                  {/* Webflow Data */}
                  <div className="p-6 flex flex-col justify-center border-r border-slate-800/30">
                    {metric.webflow.type === "bar" &&
                      typeof metric.webflow.value === "number" && (
                        <>
                          <div className="flex justify-between items-end mb-1">
                            <span className="text-sm text-slate-400">
                              {metric.webflow.text}
                            </span>
                          </div>
                          <ProgressBar
                            value={metric.webflow.value}
                            colorClass="bg-slate-600"
                          />
                        </>
                      )}
                    {metric.webflow.type === "status" && (
                      <StatusIcon
                        status={metric.webflow.status}
                        text={metric.webflow.text || ""}
                      />
                    )}
                    {metric.webflow.type === "text" && (
                      <span className="text-lg font-medium text-slate-400">
                        {metric.webflow.value}
                      </span>
                    )}
                  </div>

                  {/* WordPress Data */}
                  <div className="p-6 flex flex-col justify-center border-r border-slate-800/30">
                    {metric.wordpress.type === "bar" &&
                      typeof metric.wordpress.value === "number" && (
                        <>
                          <div className="flex justify-between items-end mb-1">
                            <span className="text-sm text-slate-400">
                              {metric.wordpress.text}
                            </span>
                          </div>
                          <ProgressBar
                            value={metric.wordpress.value}
                            colorClass="bg-slate-500"
                          />
                        </>
                      )}
                    {metric.wordpress.type === "status" && (
                      <StatusIcon
                        status={metric.wordpress.status}
                        text={metric.wordpress.text || ""}
                      />
                    )}
                    {metric.wordpress.type === "text" && (
                      <span className="text-lg font-medium text-slate-400">
                        {metric.wordpress.value}
                      </span>
                    )}
                  </div>

                  {/* Next.js Data - Highlighted */}
                  <div className="p-6 flex flex-col justify-center bg-blue-500/5 relative">
                    {/* Subtle side glow */}
                    <div className="absolute inset-y-0 left-0 w-px bg-blue-500/10"></div>

                    {metric.nextjs.type === "bar" &&
                      typeof metric.nextjs.value === "number" && (
                        <>
                          <div className="flex justify-between items-end mb-1">
                            <span className="text-sm font-medium text-blue-200">
                              {metric.nextjs.text}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-2 relative">
                            <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
                            <div
                              className="h-full rounded-full bg-linear-to-r from-blue-500 to-indigo-400 shadow-[0_0_10px_rgba(59,130,246,0.4)]"
                              style={{ width: `${metric.nextjs.value}%` }}
                            />
                          </div>
                        </>
                      )}
                    {metric.nextjs.type === "status" && (
                      <StatusIcon
                        status={metric.nextjs.status}
                        text={metric.nextjs.text || ""}
                      />
                    )}
                    {metric.nextjs.type === "text" && (
                      <span className="text-xl font-bold text-emerald-400 tracking-tight drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                        {metric.nextjs.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile horizontal scroll hint */}
            <div className="md:hidden text-center py-2 text-xs text-slate-600 bg-slate-900/80">
              ← Прокрутите для просмотра →
            </div>
          </div>

          {/* Footer / Asterisk Note */}
          <div className="mt-6 flex items-start gap-2 text-slate-500 text-xs max-w-2xl mx-auto px-4">
            <Info size={14} className="mt-0.5 shrink-0 text-slate-600" />
            <p>
              * Vercel Hobby + Sanity Free tier позволяют запускать MVP за $0
              регулярных расходов. Стоимость Webflow и WordPress рассчитана с
              учетом необходимых плагинов для функционала бизнес-уровня и
              хостинга.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
