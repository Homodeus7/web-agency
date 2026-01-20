/**
 * Comparison Table Seeds
 *
 * Данные для таблицы сравнения Next.js + Sanity vs Webflow vs WordPress
 * Используется статически в компоненте ComparisonTable
 */

export interface ComparisonMetric {
  id: string
  label: string
  iconName: 'zap' | 'layers' | 'search' | 'trending-up' | 'code' | 'dollar-sign'
  webflow: {
    value: number | string
    type: 'bar' | 'status' | 'text'
    status?: 'danger' | 'warning' | 'success'
    text?: string
  }
  wordpress: {
    value: number | string
    type: 'bar' | 'status' | 'text'
    status?: 'danger' | 'warning' | 'success'
    text?: string
  }
  nextjs: {
    value: number | string
    type: 'bar' | 'status' | 'text'
    status?: 'danger' | 'warning' | 'success'
    text?: string
  }
}

export const comparisonMetrics: ComparisonMetric[] = [
  {
    id: 'speed',
    label: 'Скорость загрузки',
    iconName: 'zap',
    webflow: { value: 40, type: 'bar', text: 'Средняя' },
    wordpress: { value: 35, type: 'bar', text: 'Зависит от плагинов' },
    nextjs: { value: 98, type: 'bar', text: 'Молниеносная' },
  },
  {
    id: 'flexibility',
    label: 'Гибкость разработки',
    iconName: 'layers',
    webflow: { value: 50, type: 'bar', text: 'Ограничена платформой' },
    wordpress: { value: 65, type: 'bar', text: 'Высокая (плагины)' },
    nextjs: { value: 100, type: 'bar', text: 'Безграничная' },
  },
  {
    id: 'seo',
    label: 'SEO Контроль',
    iconName: 'search',
    webflow: { value: 70, type: 'bar', text: 'Базовый' },
    wordpress: { value: 85, type: 'bar', text: 'Хороший' },
    nextjs: { value: 100, type: 'bar', text: 'Полный контроль' },
  },
  {
    id: 'scale',
    label: 'Масштабируемость',
    iconName: 'trending-up',
    webflow: { value: 30, type: 'bar', text: 'Низкая' },
    wordpress: { value: 50, type: 'bar', text: 'Средняя' },
    nextjs: { value: 100, type: 'bar', text: 'Enterprise уровень' },
  },
  {
    id: 'ownership',
    label: 'Владение кодом',
    iconName: 'code',
    webflow: {
      value: 'Нет',
      type: 'status',
      status: 'danger',
      text: 'Platform lock-in',
    },
    wordpress: {
      value: 'Частично',
      type: 'status',
      status: 'warning',
      text: 'Сложный переезд',
    },
    nextjs: {
      value: '100%',
      type: 'status',
      status: 'success',
      text: 'Ваш код навсегда',
    },
  },
  {
    id: 'cost',
    label: 'Стоимость/год*',
    iconName: 'dollar-sign',
    webflow: { value: '$3,500+', type: 'text' },
    wordpress: { value: '$500+', type: 'text' },
    nextjs: { value: 'от $0', type: 'text', status: 'success' },
  },
]

export const comparisonTableConfig = {
  title: 'Честное сравнение',
  footnote: '* Vercel Hobby + Sanity Free tier позволяют запускать MVP за $0 регулярных расходов. Стоимость Webflow и WordPress рассчитана с учетом необходимых плагинов для функционала бизнес-уровня и хостинга.',
  columns: {
    webflow: {
      name: 'Webflow',
      description: 'No-code конструктор',
    },
    wordpress: {
      name: 'WordPress',
      description: 'Старая школа CMS',
    },
    nextjs: {
      name: 'Next.js + Sanity',
      description: 'Headless CMS + React',
      isHighlighted: true,
      badge: 'НАШ ВЫБОР',
    },
  },
}
