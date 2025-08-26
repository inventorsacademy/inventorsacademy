import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  ageGroup: string;
  program: string;
  message: string;
}

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    ageGroup: "",
    program: "",
    message: ""
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        ageGroup: "",
        program: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
            data-testid="input-name"
          />
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
            data-testid="input-email"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            data-testid="input-phone"
          />
        </div>
        <div>
          <Label htmlFor="ageGroup">Age Group *</Label>
          <Select value={formData.ageGroup} onValueChange={(value) => handleChange("ageGroup", value)}>
            <SelectTrigger data-testid="select-age-group">
              <SelectValue placeholder="Select age group" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="13-15">13-15 years</SelectItem>
              <SelectItem value="16-18">16-18 years</SelectItem>
              <SelectItem value="18+">18+ years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="program">Program Interest</Label>
        <Select value={formData.program} onValueChange={(value) => handleChange("program", value)}>
          <SelectTrigger data-testid="select-program">
            <SelectValue placeholder="Select program (optional)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="young-innovators">Young Innovators (13-15)</SelectItem>
            <SelectItem value="future-leaders">Future Leaders (16-18)</SelectItem>
            <SelectItem value="adult-track">Adult Track (18+)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell us about your interests, questions, or how we can help..."
          className="min-h-[120px]"
          required
          data-testid="textarea-message"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-academy-orange text-white hover:bg-academy-orange/90"
        disabled={submitMutation.isPending}
        data-testid="submit-button"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
