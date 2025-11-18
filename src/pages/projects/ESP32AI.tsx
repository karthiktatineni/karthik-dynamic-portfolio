import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Brain, Cpu, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ESP32AI = () => {
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
            AI-Powered ESP32
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            ESP32-AI system integrated with Gemini AI to respond to questions asked.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <Brain className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Gemini AI</h3>
              <p className="text-sm text-muted-foreground">
                Powered by Google's Gemini AI model
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Cpu className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">ESP32</h3>
              <p className="text-sm text-muted-foreground">
                Dual-core processor with WiFi and Bluetooth
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <MessageSquare className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Voice Interface</h3>
              <p className="text-sm text-muted-foreground">
                Natural language question answering
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The AI-Powered ESP32 project integrates Google's Gemini AI with the powerful ESP32 microcontroller, 
                creating an intelligent edge device capable of answering questions and processing natural language queries.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Integration with Google Gemini AI API</li>
                <li>Real-time question answering capabilities</li>
                <li>WiFi connectivity for cloud communication</li>
                <li>Voice input and text-to-speech output</li>
                <li>Low-latency response processing</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ESP32</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Gemini AI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">REST API</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Arduino IDE</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C++</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ESP32AI;
