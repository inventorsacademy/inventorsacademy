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
          backgroundImage: "url('@assets/Screenshot 2025-08-26 at 09.53.42_1756198553740.png')"
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
            Join our independent summer program in historic Oxford colleges. Ages 13-18+ explore STEM, entrepreneurship, and innovation through hands-on projects, expert mentorship, and unforgettable experiences.
          </p>
          
          {/* Important Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800 max-w-2xl mx-auto" data-testid="disclaimer">
            <div className="flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <strong>Independent Program:</strong> The Inventors Academy is not affiliated with the University of Oxford
            </div>
          </div>
          
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
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-alumni">
              <div className="text-3xl font-bold text-academy-orange">500+</div>
              <div className="text-gray-600">Alumni</div>
            </div>
            <div data-testid="stat-subjects">
              <div className="text-3xl font-bold text-academy-orange">12</div>
              <div className="text-gray-600">Subjects</div>
            </div>
            <div data-testid="stat-ratio">
              <div className="text-3xl font-bold text-academy-orange">8:1</div>
              <div className="text-gray-600">Student Ratio</div>
            </div>
            <div data-testid="stat-satisfaction">
              <div className="text-3xl font-bold text-academy-orange">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
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
