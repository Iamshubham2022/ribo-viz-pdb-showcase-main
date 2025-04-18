
import { Github, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-molecular-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">RiboViz<span className="text-molecular-highlight">PDB</span></h3>
            <p className="text-gray-300 mb-6 max-w-md">
              An advanced tool for converting ribosome sequences to PDB files and visualizing 3D protein structures with PyMOL integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#introduction" className="text-gray-300 hover:text-molecular-highlight transition-colors">Introduction</a></li>
              <li><a href="#tool" className="text-gray-300 hover:text-molecular-highlight transition-colors">Converter Tool</a></li>
              <li><a href="#pymol" className="text-gray-300 hover:text-molecular-highlight transition-colors">PyMOL Integration</a></li>
              <li><a href="#about-pdb" className="text-gray-300 hover:text-molecular-highlight transition-colors">About PDB</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-molecular-highlight transition-colors">Research Papers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RiboVizPDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
