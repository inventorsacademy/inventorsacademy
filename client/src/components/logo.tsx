import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl lg:text-3xl"
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={cn("relative", sizeClasses[size])}>
        <div className="absolute inset-0 bg-academy-orange rounded-2xl transform rotate-45 origin-center shadow-lg"></div>
        <div className="absolute inset-3 bg-academy-green rounded-full flex items-center justify-center">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
      {showText && (
        <div className="text-left">
          <div className={cn("text-academy-green font-bold", textSizeClasses[size])}>
            THE INVENTORS
          </div>
          <div className={cn("text-academy-orange font-bold", size === "sm" ? "text-sm" : size === "md" ? "text-lg" : "text-xl lg:text-2xl")}>
            ACADEMY
          </div>
        </div>
      )}
    </div>
  );
}
