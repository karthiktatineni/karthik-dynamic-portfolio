import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Home, Smartphone, Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Smart Home Automation
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            Control appliances via Alexa and Cadio App using ESP8266 and custom firmware.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <Mic className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Alexa Control</h3>
              <p className="text-sm text-muted-foreground">
                Voice-controlled home automation
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Smartphone className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Mobile App</h3>
              <p className="text-sm text-muted-foreground">
                Control via Cadio mobile application
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Home className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Smart Devices</h3>
              <p className="text-sm text-muted-foreground">
                Multiple appliance integration
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Smart Home Automation system enables control of household appliances through voice commands 
                via Alexa and mobile app interface using Cadio. Built on ESP8266 with custom firmware for 
                reliable and responsive home automation.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Alexa voice control integration</li>
                <li>Cadio mobile app interface</li>
                <li>Multiple relay control for appliances</li>
                <li>WiFi connectivity with ESP8266</li>
                <li>Custom firmware for stability</li>
                <li>Scheduling and automation routines</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ESP8266</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Alexa Skills</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Cadio App</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Relay Modules</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C++</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeAutomation;
