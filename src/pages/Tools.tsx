import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Terminal, 
  FileText,
  Calculator,
  Image,
  Wrench,
  ExternalLink
} from "lucide-react";

export default function Tools() {
  const toolCategories = [
    {
      name: "CODE EDITORS",
      tools: [
        { name: "Online Code Editor", icon: Code, description: "Write and test code instantly", status: "AVAILABLE", color: "bg-primary" },
        { name: "Regex Tester", icon: FileText, description: "Test regular expressions", status: "AVAILABLE", color: "bg-accent" },
        { name: "JSON Formatter", icon: Terminal, description: "Format and validate JSON", status: "AVAILABLE", color: "bg-secondary" }
      ]
    },
    {
      name: "DESIGN TOOLS",
      tools: [
        { name: "Color Picker", icon: Palette, description: "Generate color palettes", status: "AVAILABLE", color: "bg-primary" },
        { name: "CSS Generator", icon: FileText, description: "Generate CSS properties", status: "AVAILABLE", color: "bg-accent" },
        { name: "Icon Library", icon: Image, description: "Browse pixel art icons", status: "COMING SOON", color: "bg-muted" }
      ]
    },
    {
      name: "UTILITIES",
      tools: [
        { name: "Base64 Encoder", icon: Terminal, description: "Encode/decode Base64", status: "AVAILABLE", color: "bg-secondary" },
        { name: "Hash Generator", icon: Database, description: "Generate MD5, SHA hashes", status: "AVAILABLE", color: "bg-primary" },
        { name: "QR Code Generator", icon: Globe, description: "Create QR codes", status: "AVAILABLE", color: "bg-accent" }
      ]
    },
    {
      name: "CALCULATORS",
      tools: [
        { name: "Unit Converter", icon: Calculator, description: "Convert units and measurements", status: "AVAILABLE", color: "bg-primary" },
        { name: "Time Calculator", icon: Calculator, description: "Calculate time differences", status: "AVAILABLE", color: "bg-secondary" },
        { name: "Percentage Calculator", icon: Calculator, description: "Calculate percentages", status: "AVAILABLE", color: "bg-accent" }
      ]
    }
  ];

  const recentlyUsed = [
    { name: "JSON Formatter", category: "CODE EDITORS", uses: 23 },
    { name: "Color Picker", category: "DESIGN TOOLS", uses: 15 },
    { name: "Hash Generator", category: "UTILITIES", uses: 8 },
    { name: "Unit Converter", category: "CALCULATORS", uses: 12 }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pixel-card p-6 glow-border">
        <h1 className="text-3xl font-bold font-mono tracking-wider text-primary mb-2">
          DEVELOPER TOOLS
        </h1>
        <p className="text-muted-foreground font-mono">
          Essential utilities to boost your coding productivity
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-primary">24</div>
            <div className="text-xs font-mono text-muted-foreground">TOTAL TOOLS</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-accent">18</div>
            <div className="text-xs font-mono text-muted-foreground">AVAILABLE</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-secondary">58</div>
            <div className="text-xs font-mono text-muted-foreground">USES TODAY</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-primary">6</div>
            <div className="text-xs font-mono text-muted-foreground">COMING SOON</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tools Grid */}
        <div className="lg:col-span-2 space-y-6">
          {toolCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="pixel-card">
              <CardHeader className="border-b-2 border-primary/20">
                <CardTitle className="flex items-center gap-2 font-mono text-primary">
                  <Wrench className="w-6 h-6" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className={`pixel-card p-4 transition-all duration-200 cursor-pointer ${
                        tool.status === 'AVAILABLE' 
                          ? 'glow-border hover:shadow-[8px_8px_0px_0px] hover:shadow-primary/50 hover:-translate-x-1 hover:-translate-y-1' 
                          : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2 ${tool.color} text-white rounded-none`}>
                          <tool.icon className="w-5 h-5" />
                        </div>
                        <Badge 
                          variant={tool.status === 'AVAILABLE' ? 'default' : 'secondary'}
                          className="text-xs font-mono"
                        >
                          {tool.status}
                        </Badge>
                      </div>
                      
                      <h3 className="font-mono font-bold text-sm mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono mb-3">
                        {tool.description}
                      </p>
                      
                      {tool.status === 'AVAILABLE' && (
                        <Button size="sm" className="pixel-button w-full text-xs">
                          LAUNCH
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recently Used */}
        <div>
          <Card className="pixel-card">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <Terminal className="w-6 h-6" />
                RECENTLY USED
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {recentlyUsed.map((tool, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/30 border border-border hover:bg-primary/10 transition-colors cursor-pointer">
                    <div>
                      <div className="font-mono font-bold text-sm">
                        {tool.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        {tool.category}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-mono">
                      {tool.uses} uses
                    </Badge>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4 font-mono">
                VIEW ALL HISTORY
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="pixel-card mt-6">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="font-mono text-primary">QUICK ACTIONS</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <Button className="pixel-button w-full font-mono">
                NEW CODE SNIPPET
              </Button>
              <Button variant="outline" className="w-full font-mono">
                IMPORT FILE
              </Button>
              <Button variant="outline" className="w-full font-mono">
                SHARE TOOL
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}