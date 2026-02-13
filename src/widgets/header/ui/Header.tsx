import Link from "next/link";
import { Container, Logo } from "@/shared/ui";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
      <Container className="h-20 grid grid-cols-[1fr_auto_1fr] items-center">
        <Logo size="sm" />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link
            href="#problems"
            className="hover:text-white transition-colors"
          >
            Проблемы
          </Link>
          <Link
            href="#solutions"
            className="hover:text-white transition-colors"
          >
            Решения
          </Link>
          <Link
            href="#comparison"
            className="hover:text-white transition-colors"
          >
            Сравнение
          </Link>
          <Link
            href="#process"
            className="hover:text-white transition-colors"
          >
            Процесс
          </Link>
          <Link href="#tech" className="hover:text-white transition-colors">
            Технологии
          </Link>
          <Link href="#pricing" className="hover:text-white transition-colors">
            Цены
          </Link>
          <Link href="#faq" className="hover:text-white transition-colors">
            FAQ
          </Link>
        </div>

        {/* Empty div for grid symmetry */}
        <div />
      </Container>
    </nav>
  );
}
