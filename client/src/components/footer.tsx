import Logo from "@/components/logo";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#programs", label: "Programs" },
    { href: "#subjects", label: "Subjects" },
    { href: "#dates-fees", label: "Dates & Fees" },
    { href: "#", label: "Apply Now" },
    { href: "#", label: "Download Brochure" },
    { href: "#", label: "Alumni Network" }
  ];

  const socialLinks = [
    { icon: "📘", href: "#", label: "Facebook" },
    { icon: "📷", href: "#", label: "Instagram" },
    { icon: "💼", href: "#", label: "LinkedIn" },
    { icon: "📺", href: "#", label: "YouTube" }
  ];

  const policies = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
    { href: "#", label: "Safeguarding" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-academy-green text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-white text-2xl font-bold">The Inventor Academy</h2>
            </div>

            <p className="text-green-200 mb-6 max-w-lg" data-testid="footer-description">
              An independent summer program inspiring young innovators through hands-on STEM learning, entrepreneurship, and creativity in the historic setting of Oxford colleges.
            </p>


          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6" data-testid="footer-quick-links-title">
              Quick Links
            </h3>
            <ul className="space-y-3" data-testid="footer-quick-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-green-200 hover:text-white transition-colors text-left"
                    data-testid={`quick-link-${index}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6" data-testid="footer-contact-title">
              Contact
            </h3>
            <div className="space-y-4" data-testid="footer-contact-info">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-academy-orange mt-1 flex-shrink-0" />
                <div className="text-green-200">
                  <div>Oxford, UK</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-academy-orange flex-shrink-0" />
                <a 
                  href="mailto:the.inv.academy@gmail.com" 
                  className="text-green-200 hover:text-white transition-colors"
                  data-testid="footer-email"
                >
                  the.inv.academy@gmail.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-academy-orange flex-shrink-0" />
                <a 
                  href="https://theinventorsacademy.com/" 
                  className="text-green-200 hover:text-white transition-colors"
                  data-testid="footer-website"
                >
                  https://theinventorsacademy.com/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-green-200 text-sm" data-testid="footer-copyright">
              © 2024 The Inventors Academy. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm" data-testid="footer-policies">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-green-200 hover:text-white transition-colors"
                  data-testid={`policy-link-${index}`}
                >
                  {policy.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}