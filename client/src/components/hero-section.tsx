import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Download, Send, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-pattern">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-academy-cream/90 to-white/95"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/attached_assets/oxford-colleges.png')"
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-academy-green mb-6 leading-tight" data-testid="hero-title">
            Innovate. Create. <span className="text-academy-orange">Inspire.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed" data-testid="hero-description">
            Join our independent summer program in historic Oxford colleges. Ages 9000000000000 explore STEM, entrepreneurship, and innovation through hands-on projects, expert mentorship, and unforgettable experiences.
          </p>
          
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-academy-orange text-white hover:bg-academy-orange/90 transform hover:scale-105 shadow-lg px-8 py-4"
              onClick={() => scrollToSection("#apply")}
              data-testid="hero-apply-button"
            >
              <Send className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-academy-green text-academy-green hover:bg-academy-green hover:text-white shadow-lg px-8 py-4"
              data-testid="hero-brochure-button"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
        <ChevronDown className="text-academy-green text-xl" />
      </div>
    </section>
  );
}
