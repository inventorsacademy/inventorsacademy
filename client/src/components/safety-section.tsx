import { Shield, UserCheck, Phone, ClipboardCheck, Check } from "lucide-react";

export default function SafetySection() {
  const safetyFeatures = [
    {
      icon: Shield,
      title: "24/7 Supervision",
      description: "Qualified staff provide round-the-clock care and supervision in college accommodations and during all activities.",
      color: "bg-academy-green",
      borderColor: "border-academy-green"
    },
    {
      icon: UserCheck,
      title: "Medical Support",
      description: "Qualified first aid staff on-site, with established relationships with local medical facilities for any emergencies.",
      color: "bg-blue-500",
      borderColor: "border-blue-500"
    },
    {
      icon: Phone,
      title: "Parent Communication",
      description: "Regular updates and 24/7 emergency contact line. Photos and progress reports shared with families throughout the program.",
      color: "bg-academy-orange",
      borderColor: "border-academy-orange"
    },
    {
      icon: ClipboardCheck,
      title: "Safety Protocols",
      description: "Comprehensive risk assessments, emergency procedures, and adherence to UK safeguarding standards for all participants.",
      color: "bg-purple-500",
      borderColor: "border-purple-500"
    }
  ];

  const certifications = [
    { icon: "🏅", title: "UK Safeguarding" },
    { icon: "🚑", title: "First Aid Certified" },
    { icon: "🛡️", title: "Health & Safety" },
    { icon: "⚖️", title: "GDPR Compliant" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-academy-cream to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="safety-title">
            Safety & Supervision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="safety-description">
            Your peace of mind is our priority. We provide comprehensive care and supervision for all participants.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${feature.borderColor}`}
                  data-testid={`safety-feature-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.color} text-white p-3 rounded-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-academy-green mb-2" data-testid={`safety-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-700" data-testid={`safety-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Oxford college image */}
          <div className="relative">
            <img 
              src="/attached_assets/Screenshot 2025-08-26 at 09.53.42_1756200719813.png" 
              alt="Secure Oxford college courtyard" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="safety-image"
            />
            
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg" data-testid="security-badge">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white p-2 rounded-full">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-academy-green text-sm">Secure College Environment</div>
                  <div className="text-xs text-gray-600">Gated college grounds with controlled access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-academy-green mb-8" data-testid="certifications-title">
            Our Certifications & Accreditations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg"
                data-testid={`certification-${index}`}
              >
                <div className="text-3xl mb-2">{cert.icon}</div>
                <div className="text-sm font-semibold text-academy-green">{cert.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
