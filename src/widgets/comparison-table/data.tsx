import {
  Zap,
  Layers,
  Search,
  TrendingUp,
  Code,
  DollarSign,
} from "lucide-react";
import type { Metric } from "./types";

export const metrics: Metric[] = [
  {
    id: "speed",
    label: "Скорость загрузки",
    icon: <Zap className="size-3 md:size-4" />,
    webflow: { value: 40, type: "bar", text: "Средняя" },
    wordpress: { value: 35, type: "bar", text: "Зависит от плагинов" },
    nextjs: { value: 98, type: "bar", text: "Молниеносная" },
  },
  {
    id: "flexibility",
    label: "Гибкость разработки",
    icon: <Layers className="size-3 md:size-4" />,
    webflow: { value: 50, type: "bar", text: "Ограничена платформой" },
    wordpress: { value: 65, type: "bar", text: "Высокая (плагины)" },
    nextjs: { value: 100, type: "bar", text: "Безграничная" },
  },
  {
    id: "seo",
    label: "SEO Контроль",
    icon: <Search className="size-3 md:size-4" />,
    webflow: { value: 70, type: "bar", text: "Базовый" },
    wordpress: { value: 85, type: "bar", text: "Хороший" },
    nextjs: { value: 100, type: "bar", text: "Полный контроль" },
  },
  {
    id: "scale",
    label: "Масштабируемость",
    icon: <TrendingUp className="size-3 md:size-4" />,
    webflow: { value: 30, type: "bar", text: "Низкая" },
    wordpress: { value: 50, type: "bar", text: "Средняя" },
    nextjs: { value: 100, type: "bar", text: "Enterprise уровень" },
  },
  {
    id: "ownership",
    label: "Владение кодом",
    icon: <Code className="size-3 md:size-4" />,
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
    icon: <DollarSign className="size-3 md:size-4" />,
    webflow: { value: "$3,500+", type: "text" },
    wordpress: { value: "$500+", type: "text" },
    nextjs: { value: "от $0", type: "text", status: "success" },
  },
];
