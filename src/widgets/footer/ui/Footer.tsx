import Link from "next/link";
import { Logo } from "@/shared/ui";
import type { FooterData, SocialLinkData } from "@/sanity/lib/types";

interface FooterProps {
  data?: FooterData;
}

const SocialIcon = ({ platform }: { platform: SocialLinkData["platform"] }) => {
  const iconClass = "w-4 h-4";

  switch (platform) {
    case "github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 3.5 5.07 5.07 0 0 0 18.91 0S17.73-.35 15 1.31a13.38 13.38 0 0 0-6 0C6.27-.35 5.09 0 5.09 0A5.07 5.07 0 0 0 5 3.5 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      );
    case "telegram":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
        </svg>
      );
    case "youtube":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "vk":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
        </svg>
      );
  }
};

// Дефолтные данные для обратной совместимости
const defaultFooterData: FooterData = {
  brandName: "simpl",
  brandDescription:
    "Создаем сайты, которые стимулируют рост бизнеса. Производительность, масштабируемость и превосходный дизайн без компромиссов.",
  linkColumns: [
    {
      title: "Услуги",
      links: [
        { label: "Лендинги", href: "#" },
        { label: "Корпоративные сайты", href: "#" },
        { label: "E-commerce", href: "#" },
        { label: "Миграция на Sanity", href: "#" },
      ],
    },
    {
      title: "Ресурсы",
      links: [
        { label: "Кейсы", href: "#" },
        { label: "Блог", href: "#" },
        { label: "FAQ", href: "#faq" },
        { label: "Контакты", href: "#" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "О нас", href: "#" },
        { label: "Карьера", href: "#" },
        { label: "Контакты", href: "#" },
      ],
    },
  ],
  socialLinks: [{ platform: "telegram", url: "https://t.me/awaitMeBro" }],
  copyrightText: "© {year} SIMPL Все права защищены.",
};

export function Footer({ data }: FooterProps) {
  const footerData = data || defaultFooterData;
  const currentYear = new Date().getFullYear();
  const copyrightText =
    footerData.copyrightText?.replace("{year}", String(currentYear)) ||
    `© ${currentYear} SIMPL Все права защищены.`;

  return (
    <footer className="sm:px-6 lg:px-8 lg:ml-auto lg:mr-auto lg:mb-16 max-w-7xl mt-16 mr-auto mb-16 ml-auto pr-4 pl-4">
      <div className="sm:rounded-[32px] sm:p-8 bg-neutral-900/40 rounded-[24px] pt-5 pr-5 pb-5 pl-5 backdrop-blur">
        <div className="flex justify-between">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Logo size="md" />
            </div>
            <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              {footerData.brandDescription}
            </p>
            {footerData.socialLinks && footerData.socialLinks.length > 0 && (
              <div className="mt-4 flex items-center gap-3">
                {footerData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 transition"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            {footerData.linkColumns?.map((column, index) => (
              <div key={index}>
                <p className="text-xs uppercase tracking-wider text-neutral-400">
                  {column.title}
                </p>
                <ul className="mt-2 space-y-2 text-sm">
                  {column.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-neutral-300 hover:text-white transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[11px] sm:text-xs text-neutral-500">
            {copyrightText}
          </p>
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <Link
              href="#"
              className="text-neutral-400 hover:text-white transition"
            >
              Условия
            </Link>
            <Link
              href="#"
              className="text-neutral-400 hover:text-white transition"
            >
              Конфиденциальность
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
