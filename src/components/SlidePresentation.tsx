
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  title: string;
  content: React.ReactNode;
}

export default function SlidePresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides: Slide[] = [
    {
      title: "Introduction to RiboVizPDB",
      content: (
        <div className="space-y-4">
          <p>
            RiboVizPDB is an advanced tool that converts ribosome sequences to PDB format for 3D visualization.
          </p>
          <p>
            This presentation will cover the purpose, functionality, and benefits of this tool for structural biology research.
          </p>
        </div>
      ),
    },
    {
      title: "What is Ribosome Sequencing?",
      content: (
        <div className="space-y-4">
          <p>
            Ribosome sequencing (Ribo-seq) is a technique that provides information about which mRNAs are being translated and their translation rates.
          </p>
          <p>
            It works by isolating ribosomes and sequencing the mRNA fragments protected by them, giving insight into protein synthesis in the cell.
          </p>
        </div>
      ),
    },
    {
      title: "Why Convert to PDB Format?",
      content: (
        <div className="space-y-4">
          <p>
            PDB (Protein Data Bank) format is the standard for representing 3D structural information of biological macromolecules.
          </p>
          <p>
            Converting ribosome sequence data to PDB allows researchers to:
          </p>
          <ul className="list-disc pl-6">
            <li>Visualize the molecular structure in 3D</li>
            <li>Perform structural analysis</li>
            <li>Study interactions with other molecules</li>
            <li>Make predictions about function based on structure</li>
          </ul>
        </div>
      ),
    },
    {
      title: "PyMOL Integration",
      content: (
        <div className="space-y-4">
          <p>
            PyMOL is a powerful molecular visualization system capable of rendering high-quality 3D images of biological molecules.
          </p>
          <p>
            Our tool seamlessly integrates with PyMOL to provide:
          </p>
          <ul className="list-disc pl-6">
            <li>Instant visualization of generated PDB structures</li>
            <li>Interactive manipulation capabilities</li>
            <li>Advanced structural analysis tools</li>
            <li>Publication-quality image and animation export</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Applications in Research",
      content: (
        <div className="space-y-4">
          <p>
            RiboVizPDB has numerous applications in research and education:
          </p>
          <ul className="list-disc pl-6">
            <li>Structural biology research</li>
            <li>Drug discovery and development</li>
            <li>Understanding ribosome function and dynamics</li>
            <li>Protein structure prediction validation</li>
            <li>Educational tool for teaching molecular biology</li>
            <li>Collaborative research projects</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Summary of Benefits",
      content: (
        <div className="space-y-4">
          <p>
            Key benefits of RiboVizPDB include:
          </p>
          <ul className="list-disc pl-6">
            <li>Streamlines conversion from sequence to structure</li>
            <li>Simplifies complex data interpretation</li>
            <li>Enhances understanding through visual representation</li>
            <li>Saves time in research workflows</li>
            <li>Makes structural biology accessible to more researchers</li>
            <li>Bridges sequence data with structural insights</li>
          </ul>
        </div>
      ),
    },
  ];

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  return (
    <section id="presentation" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-molecular-dark text-center mb-6">
          Presentation Slides
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Navigate through these slides to learn more about RiboVizPDB
        </p>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl bg-white">
            <CardContent className="p-0">
              <div className="bg-molecular-medium text-white p-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Slide {currentSlide + 1} of {slides.length}</span>
                  <h3 className="text-2xl font-bold text-center">{slides[currentSlide].title}</h3>
                  <span className="w-16"></span> {/* Spacer for alignment */}
                </div>
              </div>
              
              <div className="p-8 min-h-[300px] flex items-center justify-center">
                <div className="max-w-3xl">
                  {slides[currentSlide].content}
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 flex justify-between items-center border-t">
                <Button
                  variant="outline"
                  onClick={goToPrevSlide}
                  disabled={currentSlide === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" /> Previous
                </Button>
                
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`block h-2 w-2 rounded-full ${
                        index === currentSlide
                          ? "bg-molecular-highlight"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></span>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  onClick={goToNextSlide}
                  disabled={currentSlide === slides.length - 1}
                  className="flex items-center gap-2"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
