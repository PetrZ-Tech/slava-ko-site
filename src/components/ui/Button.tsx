import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[#2F4A3C] bg-[#2F4A3C] text-[#FCFBF8] shadow-[0_18px_45px_rgba(16,19,18,0.22)] hover:border-[#24382E] hover:bg-[#24382E]",
  secondary:
    "border-[#FCFBF8]/75 bg-[#FCFBF8]/12 text-[#FCFBF8] backdrop-blur hover:bg-[#FCFBF8] hover:text-[#2B2B2B]",
  ghost:
    "border-[#B79A6B]/35 bg-transparent text-[#FCFBF8] hover:border-[#B79A6B] hover:bg-[#B79A6B] hover:text-[#101312]",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href = "#",
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-[6px] border px-5 py-3 text-sm font-semibold leading-none transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B79A6B] ${variantClasses[variant]} ${className}`}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}
