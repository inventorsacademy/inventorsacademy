
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
        src="/attached_assets/The-Inventor-Academy-Logo-U4 copy_1756466620264.jpg"
        alt="The Inventor Academy"
        className={cn(sizeClasses[size])}
      />
    </div>
  );
}
