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
      <img 
        src="/attached_assets/The-Inventor-Academy-Logo-U4 copy_1756199382074.jpg" 
        alt="The Inventor Academy Logo"
        className={cn(sizeClasses[size], "object-contain")}
      />
    </div>
  );
}
