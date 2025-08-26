import { 
  Building2, 
  Presentation, 
  Lightbulb, 
  MapPin 
} from "lucide-react";

export default function WhyJoinSection() {
  const features = [
    {
      icon: Building2,
      title: "Historic Oxford Setting",
      description: "Live and learn in authentic Oxford college buildings, surrounded by centuries of academic excellence. The inspiring environment naturally encourages intellectual curiosity and achievement.",
      color: "bg-academy-orange"
    },
    {
      icon: Presentation,
      title: "World-Class Expert Tutors",
      description: "Learn from industry leaders, successful entrepreneurs, and academic experts who bring real-world experience and cutting-edge knowledge to every session.",
      color: "bg-academy-green"
    },
    {
      icon: Lightbulb,
      title: "Hands-On Innovation Projects",
      description: "Work on real challenges facing our world today. From developing sustainable solutions to creating AI applications, students build tangible projects they can be proud of.",
      color: "bg-blue-500"
    },
    {
      icon: MapPin,
      title: "Enriching Excursions",
      description: "Explore Oxford's museums, visit technology companies, attend lectures, and experience British culture through carefully planned educational and social activities.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-academy-green/5 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="why-join-title">
            Why Choose The Inventors Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="why-join-description">
            Experience world-class education in one of the world's most inspiring academic environments.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start space-x-6" data-testid={`why-join-feature-${index}`}>
                  <div className={`${feature.color} text-white p-4 rounded-xl shadow-lg`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-academy-green mb-3" data-testid={`why-join-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" data-testid={`why-join-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            <img 
              src="/attached_assets/Screenshot 2025-08-26 at 09.53.51_1756200719813.png" 
              alt="Oxford college interior with students" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="why-join-image"
            />
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg" data-testid="floating-card-ratio">
              <div className="text-academy-orange font-bold text-2xl">8:1</div>
              <div className="text-sm text-gray-600">Student Ratio</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg" data-testid="floating-card-countries">
              <div className="text-academy-green font-bold text-2xl">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
