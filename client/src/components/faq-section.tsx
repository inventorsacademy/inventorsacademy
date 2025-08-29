import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can apply to The Inventors Academy?",
      answer: "Our programs are open to motivated students aged 13+ from around the world. We welcome participants of all backgrounds and nationalities. For ages 13-15, we recommend basic English proficiency and enthusiasm for STEM subjects. Ages 16-18 should have completed some secondary education in relevant subjects. Our adult track (18+) is open to professionals and lifelong learners seeking innovation skills."
    },
    {
      question: "What's included in the program fee?",
      answer: "The program fee covers accommodation in Oxford, meals, expert-led workshops and seminars, all materials and equipment needed for projects, supervised excursions and cultural activities, supervision and support, and a graduation certificate. The only additional costs are personal expenses, travel to/from Oxford, and any optional extended excursions."
    },
    {
      question: "What kind of accommodation can students expect?",
      answer: "Students stay in authentic Oxford college rooms, typically single study bedrooms with shared bathroom facilities. Rooms are furnished with a bed, desk, wardrobe, and basic amenities. Common areas include historic dining halls, libraries, and courtyards. All accommodation is within secure college grounds with 24/7 supervision. Bedding and towels are provided."
    },
    {
      question: "How are students supervised and what safety measures are in place?",
      answer: "We maintain a low staff-to-student ratio with qualified supervisors available. All staff undergo background checks and safeguarding training."
    },
    {
      question: "What happens if I need to cancel my booking?",
      answer: "We understand that circumstances can change. Cancellations more than 60 days before the program start receive a full refund minus a £200 administration fee. Cancellations 30-60 days before receive a 50% refund. Cancellations within 30 days are non-refundable unless due to medical reasons with documentation. We strongly recommend travel insurance to protect your investment."
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer: "Yes, all participants who successfully complete the program receive a Certificate of Achievement from The Inventors Academy. This certificate details the subjects studied, projects completed, and skills developed. While not a university qualification, it demonstrates participation in an intensive innovation program and can be valuable for university applications and CV building."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-academy-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-academy-green mb-6" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600" data-testid="faq-description">
            Find answers to common questions about The Inventors Academy program.
          </p>
        </div>
        
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              data-testid={`faq-item-${index}`}
            >
              <button
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex justify-between items-center"
                onClick={() => toggleFaq(index)}
                data-testid={`faq-button-${index}`}
              >
                <span className="font-semibold text-academy-green text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-academy-orange transition-transform flex-shrink-0",
                    openFaq === index && "rotate-180"
                  )}
                />
              </button>
              {openFaq === index && (
                <div
                  className="px-6 pb-6 border-t border-gray-100"
                  data-testid={`faq-answer-${index}`}
                >
                  <p className="text-gray-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Contact CTA */}
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg" data-testid="faq-contact">
          <h3 className="text-2xl font-bold text-academy-green mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our friendly admissions team is here to help you learn more about The Inventors Academy.</p>
          <Button 
            className="bg-academy-orange text-white hover:bg-academy-orange/90 px-8 py-3"
            data-testid="faq-contact-button"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Admissions Team
          </Button>
        </div>
      </div>
    </section>
  );
}
