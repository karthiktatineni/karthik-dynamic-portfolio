import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Smart Anti-Theft Bag",
    description: "ESP8266-based bag with RFID access and Telegram alerts for real-time theft detection.",
    tags: ["ESP8266", "RFID", "IoT", "Telegram API"],
  },
  {
    title: "AI-Powered ESP32",
    description: "ESP32-AI system integrated with Gemini AI to respond to questions asked.",
    tags: ["ESP32", "AI", "Gemini", "IoT"],
  },
  {
    title: "Personal AI Bot",
    description: "Custom-trained bot deployed on web using Botpress to answer questions based on personal data and resume.",
    tags: ["Botpress", "AI", "Web Development"],
  },
  {
    title: "Helmet & Triple-Ride Detection",
    description: "YOLO and CNN-based system to detect helmet use and triple riding using real-time camera feed.",
    tags: ["YOLO", "CNN", "Computer Vision", "Python"],
  },
  {
    title: "Smart Home Automation",
    description: "Control appliances via Alexa and Cadio App using ESP8266 and custom firmware.",
    tags: ["ESP8266", "Alexa", "Home Automation"],
  },
  {
    title: "Environmental Monitoring",
    description: "Real-time web dashboard showing temperature, humidity, and air quality.",
    tags: ["Sensors", "Web Dashboard", "IoT"],
  },
  {
    title: "Smart Calling Bell System",
    description: "ESP32-based calling bell with buzzer, Bylink Application, and visitor presence notification.",
    tags: ["ESP32", "IoT", "Mobile App"],
  },
  {
    title: "Analog Audio Spectrum Analyzer",
    description: "Visualizes audio signals using capacitors, zener diodes, and rectifier diodes without a microcontroller.",
    tags: ["Analog Electronics", "Audio Processing"],
  },
  {
    title: "Ambient Light Using ESP",
    description: "ESP8266-controlled WLED setup that syncs WS2812 LEDs with screen visuals using SignalRGB.",
    tags: ["ESP8266", "WLED", "LED Control"],
  },
  {
    title: "Travel Guide Web App",
    description: "TravelMate lets users input, save, and organize trip details with an intuitive UI.",
    tags: ["Web Development", "React", "UI/UX"],
  },
  {
    title: "ESP Joke Teller",
    description: "ESP-based system that fetches jokes and displays them on a 16x2 LCD with a button for the punchline.",
    tags: ["ESP", "LCD", "API Integration"],
  },
  {
    title: "ESP32 Desk Mochi",
    description: "ESP32-powered desk companion, shows time and weather on an OLED display with dynamic facial expressions.",
    tags: ["ESP32", "OLED", "Weather API"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            My <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-[var(--card-glow)] transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
