import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      id: "young-innovators",
      title: "Young Innovators",
      ageGroup: "AGES 13-15",
      description: "Perfect introduction to STEM and entrepreneurship with age-appropriate projects, foundation skills, and creative exploration in a supportive environment.",
      features: [
        "Introduction to robotics & coding",
        "Basic business & entrepreneurship",
        "Creative problem-solving workshops",
        "Extra supervision & support"
      ],
      buttonColor: "bg-academy-orange hover:bg-academy-orange/90",
      badgeColor: "bg-academy-orange",
      image: "@assets/Screenshot 2025-08-26 at 09.55.35_1756198553740.png"
    },
    {
      id: "future-leaders",
      title: "Future Leaders",
      ageGroup: "AGES 16-18",
      description: "Advanced projects and leadership opportunities. Perfect for students considering university applications and exploring career paths in STEM and innovation.",
      features: [
        "Advanced AI & machine learning",
        "Startup pitch competitions",
        "University preparation workshops",
        "Industry mentorship program"
      ],
      buttonColor: "bg-academy-green hover:bg-academy-green/90",
      badgeColor: "bg-academy-green",
      isPopular: true,
      image: "@assets/Screenshot 2025-08-26 at 09.54.38_1756198553740.png"
    },
    {
      id: "adult-track",
      title: "Adult Track",
      ageGroup: "AGES 18+",
      description: "Professional development program for adults seeking to enhance their innovation skills, explore new career paths, or develop entrepreneurial ventures.",
      features: [
        "Executive innovation workshops",
        "Venture development program",
        "Professional networking events",
        "Industry expert presentations"
      ],
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      badgeColor: "bg-purple-600",
      image: "@assets/Screenshot 2025-08-26 at 09.52.44_1756198553740.png"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-academy-cream to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="programs-title">
            Programs by Age Group
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="programs-description">
            Tailored learning experiences designed to challenge and inspire students at every stage of their educational journey.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${program.isPopular ? 'border-2 border-academy-orange' : ''}`}
              data-testid={`program-card-${program.id}`}
            >
              {program.isPopular && (
                <div className="bg-academy-orange text-white text-center py-2 font-semibold" data-testid="popular-badge">
                  MOST POPULAR
                </div>
              )}
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${program.image}')` }}
                data-testid={`program-image-${program.id}`}
              ></div>
              <div className="p-8">
                <div className={`${program.badgeColor} text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4`} data-testid={`program-badge-${program.id}`}>
                  {program.ageGroup}
                </div>
                <h3 className="text-2xl font-bold text-academy-green mb-4" data-testid={`program-title-${program.id}`}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`program-description-${program.id}`}>
                  {program.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600" data-testid={`program-feature-${program.id}-${index}`}>
                      <Check className="w-4 h-4 text-academy-green mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full ${program.buttonColor} text-white`}
                  data-testid={`program-learn-more-${program.id}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
