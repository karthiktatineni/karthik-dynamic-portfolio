import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Camera, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HelmetDetection = () => {
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
            Helmet & Triple-Ride Detection
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8">
            YOLO and CNN-based system to detect helmet use and triple riding using real-time camera feed.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-card border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Helmet Detection</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered helmet detection using YOLO
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Triple Riding</h3>
              <p className="text-sm text-muted-foreground">
                Detect multiple riders on single vehicle
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <Camera className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Real-time Feed</h3>
              <p className="text-sm text-muted-foreground">
                Live camera feed processing
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-card border-border">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                This project implements an AI-based traffic safety system using YOLO (You Only Look Once) and 
                CNN algorithms to detect helmet violations and triple riding on motorcycles through real-time 
                camera feeds, helping enforce traffic safety regulations.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time helmet detection using YOLO algorithm</li>
                <li>Triple riding detection with CNN</li>
                <li>Live camera feed processing</li>
                <li>Automated violation alerts</li>
                <li>High accuracy object detection</li>
                <li>Multi-vehicle tracking capability</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">YOLO</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CNN</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">OpenCV</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TensorFlow</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HelmetDetection;
