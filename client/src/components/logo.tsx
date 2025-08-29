
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ className, size = "md", showText = true }: LogoProps) {
  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl lg:text-3xl"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <span className={cn("font-bold text-white", textSizeClasses[size])}>
        The Inventor Academy
      </span>
    </div>
  );
}
