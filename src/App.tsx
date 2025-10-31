import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CategoryPage from "./pages/Category";
import CategoryProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:categoryId" element={<CategoryProjectsPage />} />
          <Route path="/categories/:categoryId/projects/:projectId" element={<ProjectDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

