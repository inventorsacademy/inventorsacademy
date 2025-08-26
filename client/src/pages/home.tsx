import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import SubjectsSection from "@/components/subjects-section";
import WhyJoinSection from "@/components/why-join-section";
import HowItWorksSection from "@/components/how-it-works-section";
import DatesFees from "@/components/dates-fees-section";
import StudentLifeSection from "@/components/student-life-section";
import SafetySection from "@/components/safety-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <SubjectsSection />
      <WhyJoinSection />
      <HowItWorksSection />
      <DatesFees />
      <StudentLifeSection />
      <SafetySection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
