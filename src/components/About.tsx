import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border shadow-lg hover:shadow-[var(--card-glow)] transition-all duration-300">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm Karthik Tatineni, an Electronics and Communication Engineering student at IARE, Hyderabad, with a strong interest in IoT, VLSI, AI technologies, automation, and embedded systems. I enjoy building small, functional projects using Arduino and ESP boards.
              </p>
              <p>
                My strengths include problem-solving, hands-on experimentation, and a solid grasp of both hardware and software integration. I've developed projects like a smart anti-theft bag, home automation system, and an environmental monitoring platform.
              </p>
              <p>
                Beyond academics, I enjoy gaming, which helps sharpen my reflexes and decision-making skills. I often spend time developing and tinkering with mini-projects using Arduino, ESP8266/32, and sensors—transforming creative ideas into functional prototypes.
              </p>
              <p className="text-foreground font-semibold">
                I aim to build a future where I can contribute to impactful tech solutions that improve everyday life. My goal is to become a well-rounded embedded systems developer who bridges the gap between hardware and intelligent software.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
