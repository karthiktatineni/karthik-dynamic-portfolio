import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Lock, Bell, Wifi } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SmartBag = () => {
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
            Smart Anti-Theft Bag
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            ESP8266-based bag with RFID access and Telegram alerts for real-time theft detection.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <Lock className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">RFID Security</h3>
              <p className="text-sm text-muted-foreground">
                Access control using RFID authentication
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Bell className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Telegram Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Real-time notifications on unauthorized access
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Wifi className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">ESP8266 WiFi</h3>
              <p className="text-sm text-muted-foreground">
                Connected security system with WiFi
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Smart Anti-Theft Bag is an innovative security solution designed to protect your belongings 
                using IoT technology. Built around the ESP8266 microcontroller, this project combines RFID 
                authentication with real-time Telegram notifications.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>RFID-based access control system</li>
                <li>Real-time theft detection and alerts via Telegram</li>
                <li>WiFi connectivity for remote monitoring</li>
                <li>Low-power operation for extended battery life</li>
                <li>Compact design integrated into bag</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ESP8266</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">RFID</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Telegram API</span>
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

export default SmartBag;
