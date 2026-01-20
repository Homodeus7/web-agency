import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'
import { Container } from '@/shared/ui'

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <Container>
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold text-white mb-4 block">
              Studio.
            </Link>
            <p className="text-text-secondary max-w-xs">
              Создаем сайты, которые стимулируют рост бизнеса. Производительность, масштабируемость
              и превосходный дизайн без компромиссов.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Услуги</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Лендинги
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Корпоративные сайты
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Миграция на Sanity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Ресурсы</h4>
            <ul className="space-y-4 text-text-muted text-sm">
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© 2025 Studio. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
