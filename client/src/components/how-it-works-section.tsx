import { 
  Send, 
  BookOpen, 
  Presentation, 
  GraduationCap,
  ArrowRight 
} from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit your application with personal statement and academic records. We'll review and get back to you quickly.",
      icon: Send,
      color: "bg-academy-orange"
    },
    {
      number: 2,
      title: "Study",
      description: "Engage in intensive workshops, hands-on projects, and collaborative learning with peers from around the world.",
      icon: BookOpen,
      color: "bg-academy-green"
    },
    {
      number: 3,
      title: "Showcase",
      description: "Present your innovative projects to peers, tutors, and industry experts in our final showcase event.",
      icon: Presentation,
      color: "bg-blue-500"
    },
    {
      number: 4,
      title: "Graduate",
      description: "Receive your certificate of achievement and join our global alumni network of young innovators.",
      icon: GraduationCap,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="how-it-works-title">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="how-it-works-description">
            Your journey from application to graduation in four simple steps.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLastStep = index === steps.length - 1;
            
            return (
              <div key={step.number} className="text-center relative" data-testid={`how-it-works-step-${step.number}`}>
                <div className={`${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>
                {!isLastStep && (
                  <div className="absolute top-10 left-1/2 transform translate-x-8 hidden lg:block" data-testid={`arrow-${step.number}`}>
                    <ArrowRight className="text-gray-300 w-8 h-8" />
                  </div>
                )}
                <h3 className="text-xl font-semibold text-academy-green mb-4" data-testid={`step-title-${step.number}`}>
                  {step.number}. {step.title}
                </h3>
                <p className="text-gray-600" data-testid={`step-description-${step.number}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
