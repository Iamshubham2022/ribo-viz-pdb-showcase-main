import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, FileText, Database, Microscope, Code } from "lucide-react";

export default function AboutPDBSection() {
  return (
    <section id="about-pdb" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-molecular-dark text-center mb-6">Understanding PDB Files</h2>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Learn about Protein Data Bank (PDB) files and their importance in structural biology
        </p>

        <Tabs defaultValue="overview" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="significance">Significance</TabsTrigger>
            <TabsTrigger value="usage">Usage Scenarios</TabsTrigger>
            <TabsTrigger value="sources">Data Sources</TabsTrigger>
            <TabsTrigger value="applications">Practical Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <FileText className="h-8 w-8 text-molecular-medium flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-molecular-dark mb-4">What are PDB Files?</h3>
                    <p className="text-gray-700 mb-4">
                      Protein Data Bank (PDB) files are standardized text files that contain atomic coordinates and other information 
                      necessary to describe the 3D structures of molecules such as proteins, DNA, and RNA. These files serve as 
                      the primary record format for macromolecular structures.
                    </p>
                    <p className="text-gray-700 mb-4">
                      PDB files contain detailed information about:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>Atomic coordinates (x, y, z positions)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>Atom and residue names</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>Chemical bonds and connectivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>Secondary structure assignments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>Experimental details and metadata</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="significance" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-molecular-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-molecular-dark mb-4">Why are PDB Files Important?</h3>
                    <p className="text-gray-700 mb-4">
                      PDB files are the cornerstone of structural biology and molecular research. They provide a standardized way to 
                      store, share, and analyze the three-dimensional structures of biological macromolecules, which is essential for:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Understanding protein function and mechanism at the atomic level</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Drug discovery and rational drug design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Studying molecular interactions and binding</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Visualizing complex biological structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Scientific communication and reproducibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Microscope className="h-8 w-8 text-molecular-highlight flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-molecular-dark mb-4">When are PDB Files Used?</h3>
                    <p className="text-gray-700 mb-4">
                      PDB files are used throughout the research process, from experimental determination to application:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>After experimental structure determination (X-ray crystallography, NMR, cryo-EM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>During computational modeling and molecular dynamics simulations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>In drug discovery pipelines for virtual screening and docking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>During the analysis of protein-protein and protein-ligand interactions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-highlight flex-shrink-0 mt-0.5" />
                        <span>For educational purposes and scientific visualization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sources" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Database className="h-8 w-8 text-molecular-medium flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-molecular-dark mb-4">Where are PDB Files Found?</h3>
                    <p className="text-gray-700 mb-4">
                      PDB files can be found in various repositories and are used in multiple contexts:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-medium flex-shrink-0 mt-0.5" />
                        <span>The Protein Data Bank (RCSB PDB) - the primary repository with over 180,000 structures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-medium flex-shrink-0 mt-0.5" />
                        <span>Specialized structural databases (e.g., PDBe, PDBj, BMRB)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-medium flex-shrink-0 mt-0.5" />
                        <span>Research publications as supplementary material</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-medium flex-shrink-0 mt-0.5" />
                        <span>Laboratory servers and internal databases at research institutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-medium flex-shrink-0 mt-0.5" />
                        <span>Educational resources and molecular visualization tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Code className="h-8 w-8 text-molecular-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-molecular-dark mb-4">Applications of PDB Files</h3>
                    <p className="text-gray-700 mb-4">
                      PDB files are used in numerous applications across scientific and medical fields:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Pharmaceutical research and drug design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Protein engineering and enzyme design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Structure-based vaccine development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Structure prediction and validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Teaching molecular biology and biochemistry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Molecular dynamics simulations and computational chemistry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-molecular-accent flex-shrink-0 mt-0.5" />
                        <span>Understanding disease mechanisms at the molecular level</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
