import Link from "next/link";
import { Container, Logo } from "@/shared/ui";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
      <Container className="h-20 flex items-center justify-between">
        <Logo size="sm" />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
          <Link
            href="#solutions"
            className="hover:text-white transition-colors"
          >
            Решения
          </Link>
          {/* <Link href="#cases" className="hover:text-white transition-colors">
            Кейсы
          </Link> */}
          <Link href="#pricing" className="hover:text-white transition-colors">
            Цены
          </Link>
        </div>

        <Link
          href="#cta"
          className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
        >
          Связаться
        </Link>
      </Container>
    </nav>
  );
}
