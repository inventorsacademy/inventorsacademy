import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "The Inventors Academy changed my perspective on what I could achieve. Working on AI projects in Oxford's inspiring environment gave me confidence to pursue computer science at university.",
      author: "Emma S.",
      details: "Age 17, UK → Cambridge University",
      initials: "ES",
      color: "bg-academy-green",
      bgColor: "from-academy-cream to-orange-50"
    },
    {
      quote: "I made friends from 12 different countries and learned more in two weeks than I thought possible. The robotics workshop inspired me to start my own tech club at school.",
      author: "Marco C.",
      details: "Age 16, Italy → Founded Tech Club",
      initials: "MC",
      color: "bg-academy-orange",
      bgColor: "from-green-50 to-academy-cream"
    },
    {
      quote: "As an adult learner returning to education, the program gave me confidence to launch my sustainable technology startup. The expert mentorship was invaluable.",
      author: "Sarah R.",
      details: "Age 24, Canada → GreenTech Startup",
      initials: "SR",
      color: "bg-purple-600",
      bgColor: "from-blue-50 to-academy-cream"
    },
    {
      quote: "The business workshops taught me to think like an entrepreneur. I developed a sustainability project that won my school's innovation competition.",
      author: "Ahmed L.",
      details: "Age 15, UAE → Innovation Winner",
      initials: "AL",
      color: "bg-green-600",
      bgColor: "from-purple-50 to-academy-cream"
    },
    {
      quote: "Living in Oxford colleges and learning from world-class tutors was incredible. The program helped me get into MIT and I still collaborate with friends I made there.",
      author: "Kenji W.",
      details: "Age 18, Japan → MIT Student",
      initials: "KW",
      color: "bg-red-500",
      bgColor: "from-pink-50 to-academy-cream"
    },
    {
      quote: "The medicine workshops showed me innovative approaches to healthcare. I'm now studying biomedical engineering and working on medical device innovations.",
      author: "Isabella P.",
      details: "Age 17, Brazil → Biomedical Engineering",
      initials: "IP",
      color: "bg-teal-500",
      bgColor: "from-yellow-50 to-academy-cream"
    }
  ];

  const stats = [
    { value: "98%", label: "Would Recommend" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "85%", label: "University Acceptance" },
    { value: "50+", label: "Countries Represented" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="testimonials-title">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="testimonials-description">
            Hear from our alumni about their transformative experiences at The Inventors Academy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${testimonial.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-academy-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic" data-testid={`testimonial-quote-${index}`}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.color} text-white rounded-full flex items-center justify-center font-bold`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-academy-green" data-testid={`testimonial-author-${index}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600" data-testid={`testimonial-details-${index}`}>
                    {testimonial.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-testid="testimonials-stats">
          {stats.map((stat, index) => (
            <div key={index} data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-academy-orange mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-gray-600" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
