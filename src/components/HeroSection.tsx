import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Database, BookOpen } from "lucide-react";

// Placeholder viewer component
const MoleculeViewer = () => (
  <div className="h-full w-full flex flex-col items-center justify-center text-center">
    <div className="h-16 w-16 text-molecular-highlight mb-3 border-4 border-molecular-highlight rounded-lg relative animate-pulse">
      <div className="absolute inset-2 border-2 border-molecular-medium rounded-sm" />
    </div>
    <p className="text-gray-200 text-lg">Interactive Molecule Viewer</p>
    <p className="text-gray-400/70 text-sm mt-2">Visualize 3D molecular structures</p>
  </div>
);

export default function HeroSection() {
  const [isHovering, setIsHovering] = useState(false);

  const stats = [
    { label: "Processing Speed", value: "30x Faster" },
    { label: "Accuracy Rate", value: "99.8%" },
    { label: "Supported Models", value: "25+" },
    { label: "Active Users", value: "10K+" },
  ];

  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-molecular-dark via-molecular-dark to-molecular-medium/90">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-molecular-highlight opacity-20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Column */}
          <div className="text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-molecular-highlight/20 text-gray-200 font-medium mb-6 border border-molecular-highlight/30">
              Molecular Visualization Platform
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Convert <span className="text-molecular-highlight">Ribo</span>somal Sequences to <span className="text-molecular-highlight">PDB Files</span> and Visualize in <span className="text-molecular-highlight">3D</span>
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              RiboVizPDB seamlessly converts ribosomal RNA and protein sequences into PDB files, enabling 3D structural visualization through tools like PyMOL and ChimeraX.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                className="bg-molecular-highlight hover:bg-molecular-highlight/80 text-white text-lg py-6 px-8 rounded-lg shadow-lg hover:shadow-molecular-highlight/20 transition-all duration-300 flex items-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Database className="h-5 w-5" />
                <span>Try the Converter</span>
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 rounded-lg flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Documentation</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm">{label}</p>
                  <p className="text-white font-bold text-2xl">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Column */}
          <div className="w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-molecular-highlight rounded-2xl blur-2xl opacity-20" />
              <div className="relative h-96 lg:h-[500px] bg-white/10 rounded-2xl border border-molecular-highlight/30 overflow-hidden shadow-xl backdrop-blur-sm">
                <MoleculeViewer />

                {/* PDB Code overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-molecular-dark/50 rounded-lg p-3 border border-molecular-highlight/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-molecular-highlight mb-1">
                    <span className="text-sm font-mono">{"{}"}</span>
                    <p className="text-xs font-mono">Sample PDB Conversion</p>
                  </div>
                  <p className="text-gray-200 font-mono text-xs truncate">
                    {"ATOM   1267  N   GLY A 171     -10.915  -8.012  14.365  1.00 30.12           N"}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#introduction"
          className="text-white hover:text-molecular-highlight transition-colors flex flex-col items-center"
          aria-label="Scroll to introduction"
        >
          <span className="text-sm mb-1 font-medium">Explore More</span>
          <ArrowDownCircle size={30} />
        </a>
      </div>

      {/* Floating animation keyframes */}
      <style >{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(15px); }
          50% { transform: translateY(0) translateX(30px); }
          75% { transform: translateY(15px) translateX(15px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
}
