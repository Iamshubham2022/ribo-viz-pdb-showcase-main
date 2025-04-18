import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, Download, Play } from "lucide-react";
import { Label } from "@/components/ui/label";

export default function ConverterToolSection() {
  const [sequence, setSequence] = useState("");
  const [pdbResult, setPdbResult] = useState("");

  const handleConversion = () => {
    const lines = sequence
      .split("\n")
      .filter((line) => line.trim() !== "");

    let pdb = "HEADER    RIBOSOME GENERATED PDB FILE\n";
    lines.forEach((line, index) => {
      const pos = index + 1;
      const x = (Math.random() * 30 + 10).toFixed(3);
      const y = (Math.random() * 30 + 10).toFixed(3);
      const z = (Math.random() * 30 + 10).toFixed(3);
      pdb += `ATOM  ${String(pos).padStart(5)}  CA  ${line.slice(0, 3).toUpperCase()} A${String(pos).padStart(4)}    ${x}  ${y}  ${z}  1.00  0.00           C\n`;
    });

    setPdbResult(pdb);
  };

  const handleDownload = () => {
    const blob = new Blob([pdbResult], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ribosome_structure.pdb';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="tool" className="py-20 bg-gradient-to-br from-molecular-dark to-molecular-medium/90">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-6">Ribosome to PDB Converter</h2>
        <p className="text-xl text-gray-200 text-center max-w-3xl mx-auto mb-12">
          Upload your ribosome sequence or paste it directly to generate a PDB file compatible with PyMOL and other structural viewers
        </p>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="paste" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-molecular-dark/50">
              <TabsTrigger value="paste" className="text-white data-[state=active]:bg-molecular-highlight">Paste Sequence</TabsTrigger>
              <TabsTrigger value="upload" className="text-white data-[state=active]:bg-molecular-highlight">Upload File</TabsTrigger>
            </TabsList>

            <TabsContent value="paste" className="bg-white p-6 rounded-b-lg">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="sequence" className="font-medium text-molecular-dark">Enter Ribosome Sequence</Label>
                  <Textarea 
                    id="sequence"
                    placeholder="Paste your ribosome sequence here..." 
                    className="h-40 font-mono"
                    value={sequence}
                    onChange={(e) => setSequence(e.target.value)}
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    onClick={handleConversion}
                    className="bg-molecular-highlight hover:bg-molecular-highlight/80 text-white"
                    disabled={!sequence}
                  >
                    <Play className="mr-2 h-4 w-4" /> Generate PDB File
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="upload" className="bg-white p-6 rounded-b-lg">
              <div className="space-y-4">
                <Card className="border-dashed border-2 border-gray-300 bg-gray-50">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <Upload className="h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-center text-gray-500 mb-4">Drag and drop your sequence file here, or click to browse</p>
                    <Input type="file" className="hidden" id="file-upload" />
                    <Button asChild variant="outline">
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <FileText className="mr-2 h-4 w-4" /> Browse Files
                      </label>
                    </Button>
                  </CardContent>
                </Card>

                <div className="flex justify-center">
                  <Button 
                    className="bg-molecular-highlight hover:bg-molecular-highlight/80 text-white"
                    disabled={true}
                  >
                    <Play className="mr-2 h-4 w-4" /> Generate PDB File
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {pdbResult && (
            <div className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-molecular-dark">Generated PDB File</h3>
                    <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" /> Download PDB
                    </Button>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <pre className="font-mono text-sm whitespace-pre-wrap overflow-x-auto max-h-60 overflow-y-auto">
                      {pdbResult}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
