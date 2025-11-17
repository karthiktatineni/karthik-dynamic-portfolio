import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Coding & Engineering Skills",
    icon: Code2,
    skills: [
      "C / C++",
      "Python",
      "VHDL",
      "Web Development (HTML, CSS, JS)",
      "Firmware Debugging",
      "PCB Design",
      "Microcontroller Integration",
      "Sensor Calibration",
      "API Integration",
    ],
  },
  {
    title: "Tech Domains",
    icon: Cpu,
    skills: [
      "IoT",
      "Embedded Systems",
      "VLSI",
      "Automation",
      "AI Applications",
      "CAD",
      "Analog Electronics",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "ESP",
      "Arduino IDE",
      "UltimakerCura",
      "NI Multisim",
      "Proteus",
      "Cadence",
      "Blender",
      "Blynk",
      "I2C / SPI / UART",
      "Git & GitHub",
      "Vercel",
      "Postman",
      "Fusion 360",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-[var(--card-glow)] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
