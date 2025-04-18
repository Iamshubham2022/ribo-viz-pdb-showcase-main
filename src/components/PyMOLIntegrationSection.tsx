
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ArrowRight, RotateCw, ZoomIn, FileSearch, Maximize2 } from "lucide-react";
import MoleculeViewer from "./MoleculeViewer";

export default function PyMOLIntegrationSection() {
  return (
    <section id="pymol" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-molecular-dark text-center mb-6">PyMOL Integration</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Visualize your PDB structures directly with PyMOL integration for advanced molecular analysis
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
          <div className="flex-1">
            <div className="bg-black rounded-lg aspect-video flex items-center justify-center overflow-hidden">
              <MoleculeViewer />
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold text-molecular-dark">Interactive Molecular Viewer</h3>
            <p className="text-gray-700">
              Our PyMOL integration allows you to visualize and interact with molecular structures generated from your ribosome sequences. Rotate, zoom, and analyze your molecules with professional-grade tools.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="flex gap-2 items-center justify-center">
                <RotateCw className="h-4 w-4" /> Rotate
              </Button>
              <Button variant="outline" className="flex gap-2 items-center justify-center">
                <ZoomIn className="h-4 w-4" /> Zoom
              </Button>
              <Button variant="outline" className="flex gap-2 items-center justify-center">
                <FileSearch className="h-4 w-4" /> Analyze
              </Button>
              <Button variant="outline" className="flex gap-2 items-center justify-center">
                <Maximize2 className="h-4 w-4" /> Fullscreen
              </Button>
            </div>
            
            <Button className="w-full bg-molecular-highlight hover:bg-molecular-highlight/80 text-white">
              <Play className="mr-2 h-4 w-4" /> Launch PyMOL Viewer
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-molecular-dark mb-3">Structure Analysis</h4>
              <p className="text-gray-600 mb-4">
                Analyze bond lengths, angles, and molecular conformations in 3D space to gain insights into molecular behavior.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="text-molecular-medium h-5 w-5" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-molecular-dark mb-3">Binding Site Exploration</h4>
              <p className="text-gray-600 mb-4">
                Identify and examine binding sites and active centers within your molecular structures for drug development.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="text-molecular-medium h-5 w-5" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h4 className="text-lg font-semibold text-molecular-dark mb-3">Export & Share</h4>
              <p className="text-gray-600 mb-4">
                Export your visualizations as high-quality images or movies for presentations, publications, or collaboration.
              </p>
              <div className="flex justify-end">
                <ArrowRight className="text-molecular-medium h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
