import { Button } from "@/components/ui/button";
import { Check, Star, Clock, Users, Utensils, Shield, Award } from "lucide-react";

export default function DatesFees() {
  const programs = [
    {
      name: "Young Innovators",
      ageGroup: "13-15",
      duration: "1 week",
      dates: ["July 15-22", "July 29-Aug 5"],
      fee: "£1,950",
      buttonColor: "bg-academy-orange hover:bg-academy-orange/90"
    },
    {
      name: "Future Leaders",
      ageGroup: "16-18",
      duration: "2 weeks",
      dates: ["July 8-22", "July 22-Aug 5", "Aug 5-19"],
      fee: "£3,450",
      buttonColor: "bg-academy-green hover:bg-academy-green/90",
      highlighted: true
    },
    {
      name: "Adult Track",
      ageGroup: "18+",
      duration: "1 week",
      dates: ["July 22-29", "Aug 12-19"],
      fee: "£2,750",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const included = [
    { icon: Clock, text: "Accommodation in historic Oxford college" },
    { icon: Utensils, text: "All meals (breakfast, lunch, dinner)" },
    { icon: Users, text: "Expert-led workshops and seminars" },
    { icon: Star, text: "All materials and equipment" },
    { icon: Users, text: "Guided excursions and cultural activities" },
    { icon: Shield, text: "24/7 supervision and support" },
    { icon: Award, text: "Graduation certificate" }
  ];

  return (
    <section id="dates-fees" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="dates-fees-title">
            Dates & Fees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="dates-fees-description">
            Choose from our summer sessions and discover which program fits your schedule and budget.
          </p>
        </div>
        
        {/* Programs Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12" data-testid="programs-table">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-academy-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Program</th>
                  <th className="px-6 py-4 text-left font-semibold">Age Group</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Dates 2024</th>
                  <th className="px-6 py-4 text-left font-semibold">Fee</th>
                  <th className="px-6 py-4 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programs.map((program, index) => (
                  <tr 
                    key={program.name}
                    className={`hover:bg-gray-50 transition-colors ${program.highlighted ? 'bg-orange-50' : ''}`}
                    data-testid={`program-row-${index}`}
                  >
                    <td className="px-6 py-4 font-semibold text-academy-green" data-testid={`program-name-${index}`}>
                      {program.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600" data-testid={`program-age-${index}`}>
                      {program.ageGroup}
                    </td>
                    <td className="px-6 py-4 text-gray-600" data-testid={`program-duration-${index}`}>
                      {program.duration}
                    </td>
                    <td className="px-6 py-4 text-gray-600" data-testid={`program-dates-${index}`}>
                      {program.dates.map((date, i) => (
                        <div key={i}>{date}</div>
                      ))}
                    </td>
                    <td className="px-6 py-4 font-semibold text-academy-orange" data-testid={`program-fee-${index}`}>
                      {program.fee}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button 
                        className={`${program.buttonColor} text-white text-sm font-semibold`}
                        data-testid={`program-apply-${index}`}
                      >
                        Apply Now
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* What's Included & Early Bird */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg" data-testid="whats-included">
            <h3 className="text-2xl font-bold text-academy-green mb-6 flex items-center">
              <Check className="w-6 h-6 text-academy-orange mr-3" />
              What's Included
            </h3>
            <div className="space-y-4">
              {included.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center" data-testid={`included-item-${index}`}>
                    <Icon className="w-5 h-5 text-academy-green mr-3" />
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-academy-cream to-orange-50 p-8 rounded-2xl border-2 border-academy-orange" data-testid="early-bird">
            <h3 className="text-2xl font-bold text-academy-green mb-6 flex items-center">
              <Star className="w-6 h-6 text-academy-orange mr-3" />
              Early Bird Discount
            </h3>
            <div className="mb-6">
              <div className="text-3xl font-bold text-academy-orange mb-2" data-testid="discount-amount">Save £200</div>
              <p className="text-gray-700">Apply before April 30th and save £200 on your program fee.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl mb-6" data-testid="payment-options">
              <h4 className="font-semibold text-academy-green mb-3">Payment Options</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Full payment upon acceptance</li>
                <li>• Payment plan: 50% deposit + 50% by June 1st</li>
                <li>• Installment plan available upon request</li>
              </ul>
            </div>
            
            <Button 
              className="w-full bg-academy-orange text-white hover:bg-academy-orange/90 py-4 text-lg font-semibold"
              data-testid="early-bird-button"
            >
              Get Early Bird Discount
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
