import Link from "next/link";
import { Logo } from "@/shared/ui";
import type { FooterData, SocialLinkData } from "@/sanity/lib/types";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaInstagram,
  FaYoutube,
  FaVk,
} from "react-icons/fa";

interface FooterProps {
  data?: FooterData;
}

const getSocialIcon = (platform: SocialLinkData["platform"]) => {
  const iconClass = "w-5 h-5";

  switch (platform) {
    case "github":
      return <FaGithub className={iconClass} />;
    case "linkedin":
      return <FaLinkedin className={iconClass} />;
    case "twitter":
      return <FaTwitter className={iconClass} />;
    case "telegram":
      return <FaTelegram className={iconClass} />;
    case "instagram":
      return <FaInstagram className={iconClass} />;
    case "youtube":
      return <FaYoutube className={iconClass} />;
    case "vk":
      return <FaVk className={iconClass} />;
  }
};

const getSocialPlatformName = (platform: SocialLinkData["platform"]) => {
  switch (platform) {
    case "github":
      return "GitHub";
    case "linkedin":
      return "LinkedIn";
    case "twitter":
      return "Twitter";
    case "telegram":
      return "Telegram";
    case "instagram":
      return "Instagram";
    case "youtube":
      return "YouTube";
    case "vk":
      return "ВКонтакте";
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
    <footer className="sm:px-6 lg:px-8 lg:ml-auto lg:mr-auto  max-w-7xl mt-16 mr-auto ml-auto pr-4 pl-4">
      <div className=" sm:p-8 pt-5 pr-5 pb-5 pl-5 ">
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
                    className="text-neutral-300 hover:text-white transition"
                    aria-label={getSocialPlatformName(social.platform)}
                  >
                    {getSocialIcon(social.platform)}
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
          <p className="text-[11px] sm:text-xs text-neutral-400">
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


