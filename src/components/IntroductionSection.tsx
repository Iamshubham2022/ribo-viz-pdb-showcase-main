import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Database,
  AlertCircle,
  Clock,
  Map,
  Lightbulb,
  Microscope,
  BookOpen,
} from "lucide-react";

const infoCards = [
  {
    title: "What is RiboVizPDB?",
    icon: Database,
    description:
      "RiboVizPDB is an advanced platform that transforms ribosomal RNA or protein sequence data into 3D structural PDB files, enabling seamless integration with visualization tools like PyMOL and ChimeraX.",
    color: "text-molecular-highlight",
    bgColor: "bg-molecular-highlight/10",
  },
  {
    title: "Why Use RiboVizPDB?",
    icon: AlertCircle,
    description:
      "It simplifies complex sequence-to-structure conversion processes, supporting research in drug discovery, genomics, and structural biology with AI-powered modeling techniques.",
    color: "text-molecular-medium",
    bgColor: "bg-molecular-medium/10",
  },
  {
    title: "When Should You Use It?",
    icon: Clock,
    description:
      "Perfect for molecular modeling projects, academic research, pharmaceutical development, and educational settings when rapid structural visualization of ribosome data is required.",
    color: "text-molecular-dark",
    bgColor: "bg-molecular-dark/10",
  },
  {
    title: "The concepts behind it...",
    icon: Map,
    description:
      "Over 200,000 structures are available, with tens of millions of downloads monthly by a global community of millions of users. The structural biology tools market leveraging this data is valued at over $8.3 billion USD and growing rapidly.",
    color: "text-molecular-highlight",
    bgColor: "bg-molecular-highlight/10",
  }
  ,
];

const advantages = [
  "Automates sequence-to-structure conversion with minimal user input",
  "Supports real-time visualization in PyMOL and other molecular viewers",
  "Enhances understanding of ribosome structure-function relationships",
  "Accelerates bioinformatics and structural biology research pipelines",
  "Provides an educational tool for students and early-career scientists",
  "Implements advanced AI algorithms for accurate structural predictions",
  "Enables batch processing of multiple sequences simultaneously",
];

export default function IntroductionSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="introduction" className="py-24 bg-gradient-to-b from-white to-molecular-medium/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-4 text-molecular-dark">
          Exploring <span className="text-molecular-highlight">RiboVizPDB</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-3xl mx-auto">
          Transform complex ribosomal data into interactive 3D models with our
          cutting-edge platform designed for researchers and educators.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map(({ title, icon: Icon, description, color, bgColor }, index) => (
            <article
              key={title}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="h-full flex flex-col border-0">
                <div className={`${bgColor} p-4`}>
                  <Icon className={`${color} h-8 w-8`} />
                </div>
                <CardContent className="pt-5 pb-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-molecular-dark mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 flex-grow">{description}</p>
                  <div className="mt-4 flex justify-end">
                    <ChevronRight
                      className={`${color} h-5 w-5 transform transition-transform duration-300 ${
                        hoveredCard === index ? "translate-x-1" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Card className="border-0 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="bg-molecular-highlight p-8 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="h-10 w-10" />
                  <h3 className="text-2xl font-bold">Key Advantages</h3>
                </div>
                <p className="text-molecular-medium/80">
                  RiboVizPDB delivers cutting-edge capabilities that streamline your
                  research workflow and enhance structural biology insights.
                </p>
                <div className="mt-6 flex items-center text-white hover:text-molecular-medium transition-colors">
                  <BookOpen className="h-6 w-6 mr-2" />
                  <span>Learn more about our technology</span>
                </div>
              </div>
              <div className="lg:col-span-2 p-8">
                <h3 className="text-2xl font-semibold text-molecular-dark mb-6">
                  Why Researchers Choose RiboVizPDB
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advantages.map((benefit, idx) => (
                    <div key={idx} className="flex items-start">
                      <ChevronRight className="text-molecular-highlight h-5 w-5 mt-1 flex-shrink-0" />
                      <span className="ml-2 text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
