import { 
  Bot, 
  Brain, 
  TrendingUp, 
  Settings, 
  Heart, 
  Leaf, 
  Code, 
  Dna 
} from "lucide-react";

export default function SubjectsSection() {
  const subjects = [
    {
      name: "Robotics",
      description: "Build and program autonomous robots",
      icon: Bot,
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500"
    },
    {
      name: "Artificial Intelligence",
      description: "Explore AI and machine learning",
      icon: Brain,
      color: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500"
    },
    {
      name: "Business",
      description: "Develop entrepreneurial skills",
      icon: TrendingUp,
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      iconBg: "bg-academy-green"
    },
    {
      name: "Engineering",
      description: "Design and build solutions",
      icon: Settings,
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      iconBg: "bg-academy-orange"
    },
    {
      name: "Medicine",
      description: "Healthcare innovation & research",
      icon: Heart,
      color: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      iconBg: "bg-red-500"
    },
    {
      name: "Sustainability",
      description: "Environmental solutions",
      icon: Leaf,
      color: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-500"
    },
    {
      name: "Computer Science",
      description: "Programming & software development",
      icon: Code,
      color: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-500"
    },
    {
      name: "Biotechnology",
      description: "Life sciences & genetics",
      icon: Dna,
      color: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-500"
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="subjects-title">
            Innovative Subjects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="subjects-description">
            Explore cutting-edge subjects that prepare students for the future of technology, business, and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;
            return (
              <div
                key={subject.name}
                className={`group bg-gradient-to-br ${subject.color} p-6 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border ${subject.borderColor}`}
                data-testid={`subject-card-${index}`}
              >
                <div className="text-center">
                  <div className={`${subject.iconBg} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-academy-green mb-2" data-testid={`subject-name-${index}`}>
                    {subject.name}
                  </h3>
                  <p className="text-sm text-gray-600" data-testid={`subject-description-${index}`}>
                    {subject.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
