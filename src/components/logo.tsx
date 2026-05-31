import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showText?: boolean;
};

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-[10px] bg-primary shadow-sm ring-1 ring-black/5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-[18px] w-[18px]"
        >
          <path
            d="M5 12.5l3.8 3.8L19 6.5"
            stroke="#fff"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-secondary ring-2 ring-background" />
      </span>
      {showText && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight text-text-primary">
          Nota<span className="text-primary">Certa</span>
        </span>
      )}
    </span>
  );
}
