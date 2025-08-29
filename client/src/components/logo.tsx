
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-auto",
    md: "h-12 w-auto", 
    lg: "h-20 w-auto"
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <img 
        src="/attached_assets/inventor-academy-logo.svg"
        alt="The Inventor Academy"
        className={cn(sizeClasses[size])}
      />
    </div>
  );
}
