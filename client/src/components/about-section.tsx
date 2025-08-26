import { Lightbulb, Users, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="about-title">
            About The Inventors Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="about-description">
            An immersive summer program where young minds discover their potential through innovation, creativity, and hands-on learning in the inspiring setting of Oxford's historic colleges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Oxford colleges aerial view" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="about-image"
            />
            <div className="absolute -bottom-6 -right-6 bg-academy-orange text-white p-6 rounded-xl shadow-lg" data-testid="about-image-overlay">
              <div className="flex items-center">
                <div className="text-3xl mb-2">🏛️</div>
              </div>
              <div className="font-bold">Historic Oxford Colleges</div>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-academy-cream to-orange-50 p-8 rounded-2xl border-l-4 border-academy-orange" data-testid="feature-innovation">
              <div className="flex items-start space-x-4">
                <div className="bg-academy-orange text-white p-3 rounded-lg">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-academy-green mb-2">Innovation-Focused Learning</h3>
                  <p className="text-gray-700">Students work on real-world projects, developing critical thinking and problem-solving skills while exploring cutting-edge subjects like AI, robotics, and sustainability.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-academy-cream p-8 rounded-2xl border-l-4 border-academy-green" data-testid="feature-groups">
              <div className="flex items-start space-x-4">
                <div className="bg-academy-green text-white p-3 rounded-lg">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-academy-green mb-2">Small Group Excellence</h3>
                  <p className="text-gray-700">With a maximum 8:1 student-to-teacher ratio, every participant receives personalized attention and mentorship from industry experts and academic leaders.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-academy-cream p-8 rounded-2xl border-l-4 border-blue-500" data-testid="feature-experience">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500 text-white p-3 rounded-lg">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-academy-green mb-2">Complete Experience</h3>
                  <p className="text-gray-700">Accommodation in historic colleges, all meals, supervised excursions, evening activities, and a graduation certificate recognizing achievements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
