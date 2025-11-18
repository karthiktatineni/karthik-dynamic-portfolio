import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmartBag from "./pages/projects/SmartBag";
import ESP32AI from "./pages/projects/ESP32AI";
import HomeAutomation from "./pages/projects/HomeAutomation";
import HelmetDetection from "./pages/projects/HelmetDetection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bag" element={<SmartBag />} />
          <Route path="/esp32-ai" element={<ESP32AI />} />
          <Route path="/home" element={<HomeAutomation />} />
          <Route path="/helmetdetection" element={<HelmetDetection />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
