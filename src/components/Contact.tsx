import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // EmailJS INIT (Your public key)
  emailjs.init("tkVyiJp8LXaDPHR73");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // --------- 1) STORE MESSAGE IN FORMSPREE ----------
    const formspreeRes = await fetch("https://formspree.io/f/mvgregkr", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!formspreeRes.ok) {
      toast({
        title: "Error",
        description: "Formspree failed to store your message.",
        variant: "destructive",
      });
      return;
    }

    // --------- 2) SEND AUTO REPLY USING EMAILJS ----------
    try {
      await emailjs.sendForm(
        "service_uag2zs9", // your service ID
        "template_3ayepgk", // your template ID
        form
      );

      toast({
        title: "Message Sent!",
        description: "Stored & Auto-reply sent successfully!",
      });

      setFormData({ name: "", email: "", message: "" });
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      toast({
        title: "Partial Success",
        description: "Message stored, but auto-reply failed.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Card - Contact info */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:karthiktatineni34@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      karthiktatineni34@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a
                      href="tel:7995466261"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      7995466261
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-muted-foreground">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-semibold mb-4">Connect With Me</p>
                <div className="flex gap-4">
                  <a
                    href="mailto:karthiktatineni34@gmail.com"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-5 h-5" />
                  </a>

                  <a
                    href="https://github.com/karthiktatineni"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/karthik-tatineni/"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.instagram.com/_karthik._.14/"
                    className="w-12 h-12 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Right Card - FORM WITH FORMSPREE + EMAILJS */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="New Portfolio Message" />
                <input
                  type="hidden"
                  name="_autoresponse"
                  value="Hi! Thanks for reaching out. I'll reply to your message soon."
                />

                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-border"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="bg-background/50 border-border"
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
