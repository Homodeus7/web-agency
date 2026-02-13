import Link from "next/link";
import Image from "next/image";
import simplLogo from "@/shared/assets/simpl.svg";

interface LogoProps {
  size?: "sm" | "md";
  className?: string;
}

export function Logo({ size = "sm", className = "" }: LogoProps) {
  const dimensions = size === "sm" ? 24 : 32;
  const paddingBottom = size === "sm" ? "pb-1" : "pb-1.5";

  return (
    <Link
      href="/"
      className={`flex items-center gap-0.5 text-2xl font-display font-bold text-[#00AEEF] uppercase ${className}`}
    >
      <Image
        src={simplLogo}
        alt="Simpl logo"
        width={dimensions}
        height={dimensions}
        className={paddingBottom}
      />
      simpl
    </Link>
  );
}
