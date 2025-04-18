
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-molecular-dark/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">RiboViz<span className="text-molecular-highlight">PDB</span></span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#introduction" className="text-white hover:text-molecular-highlight transition-colors">Introduction</a>
          <a href="#presentation" className="text-white hover:text-molecular-highlight transition-colors">Presentation</a>
          <a href="#tool" className="text-white hover:text-molecular-highlight transition-colors">Converter Tool</a>
          <a href="#pymol" className="text-white hover:text-molecular-highlight transition-colors">PyMOL Integration</a>
          <a href="#about-pdb" className="text-white hover:text-molecular-highlight transition-colors">About PDB</a>
          <Button className="bg-molecular-highlight hover:bg-molecular-highlight/80 text-white">Get Started</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:bg-molecular-medium/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-molecular-dark py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a href="#introduction" className="text-white hover:text-molecular-highlight transition-colors py-2">Introduction</a>
            <a href="#presentation" className="text-white hover:text-molecular-highlight transition-colors py-2">Presentation</a>
            <a href="#tool" className="text-white hover:text-molecular-highlight transition-colors py-2">Converter Tool</a>
            <a href="#pymol" className="text-white hover:text-molecular-highlight transition-colors py-2">PyMOL Integration</a>
            <a href="#about-pdb" className="text-white hover:text-molecular-highlight transition-colors py-2">About PDB</a>
            <Button className="w-full bg-molecular-highlight hover:bg-molecular-highlight/80 text-white">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
