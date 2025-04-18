import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import IntroductionSection from "@/components/IntroductionSection";
import SlidePresentation from "@/components/SlidePresentation";
import ConverterToolSection from "@/components/ConverterToolSection";
import PyMOLIntegrationSection from "@/components/PyMOLIntegrationSection";
import AboutPDBSection from "@/components/AboutPDBSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <IntroductionSection />
        <SlidePresentation />
        <ConverterToolSection />
        <PyMOLIntegrationSection />
        <AboutPDBSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;