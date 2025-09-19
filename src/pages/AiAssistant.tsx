import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Send, 
  Lightbulb, 
  BookOpen, 
  HelpCircle,
  Zap
} from "lucide-react";
import aiRobot from "@/assets/ai-robot.png";

export default function AiAssistant() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      type: "assistant",
      message: "Hello, Player! I'm your AI Learning Assistant. How can I help you level up today?",
      time: "Just now"
    }
  ]);

  const quickTips = [
    {
      category: "JAVASCRIPT",
      tip: "Use const and let instead of var for better scope control",
      icon: Lightbulb,
      difficulty: "BEGINNER"
    },
    {
      category: "REACT",
      tip: "Remember to use useCallback for functions in dependency arrays",
      icon: Zap,
      difficulty: "INTERMEDIATE"
    },
    {
      category: "CSS",
      tip: "Flexbox and Grid work great together - use them in combination!",
      icon: BookOpen,
      difficulty: "INTERMEDIATE"
    }
  ];

  const assistantFeatures = [
    { name: "Code Review", description: "Get instant feedback on your code", icon: "🔍" },
    { name: "Bug Hunting", description: "Find and fix issues together", icon: "🐛" },
    { name: "Best Practices", description: "Learn industry standards", icon: "⭐" },
    { name: "Quiz Helper", description: "Get hints for challenging questions", icon: "💡" },
    { name: "Career Advice", description: "Path guidance and tips", icon: "🚀" },
    { name: "Study Plans", description: "Personalized learning routes", icon: "📋" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: chatHistory.length + 1,
      type: "user",
      message: message,
      time: "Just now"
    };
    
    setChatHistory([...chatHistory, newMessage]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: chatHistory.length + 2,
        type: "assistant",
        message: "I understand you need help with that! Let me analyze your question and provide the best guidance possible. 🤖",
        time: "Just now"
      };
      setChatHistory(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pixel-card p-6 glow-border">
        <div className="flex items-center gap-4">
          <img src={aiRobot} alt="AI Assistant" className="w-16 h-16 pixel-icon" />
          <div>
            <h1 className="text-3xl font-bold font-mono tracking-wider text-primary mb-2">
              AI LEARNING ASSISTANT
            </h1>
            <p className="text-muted-foreground font-mono">
              Your personal coding mentor powered by advanced AI
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <Card className="pixel-card h-[600px] flex flex-col">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <Bot className="w-6 h-6" />
                CHAT WITH AI
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {chatHistory.map((chat) => (
                  <div key={chat.id} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 ${
                      chat.type === 'user' 
                        ? 'bg-primary text-primary-foreground ml-4' 
                        : 'bg-muted mr-4'
                    } border-2 border-border`}>
                      <p className="font-mono text-sm">{chat.message}</p>
                      <span className="text-xs opacity-70 font-mono">{chat.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 border-t-2 border-primary/20 pt-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask me anything about coding..."
                  className="flex-1 p-2 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none"
                />
                <Button onClick={handleSendMessage} className="pixel-button">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features & Tips */}
        <div className="space-y-6">
          {/* Quick Tips */}
          <Card className="pixel-card">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <Lightbulb className="w-6 h-6" />
                DAILY TIPS
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {quickTips.map((tip, index) => (
                <div key={index} className="p-3 bg-muted/30 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="text-xs font-mono">
                      {tip.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-mono">
                      {tip.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm font-mono text-foreground">
                    {tip.tip}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI Features */}
          <Card className="pixel-card">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <HelpCircle className="w-6 h-6" />
                AI FEATURES
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {assistantFeatures.map((feature, index) => (
                  <div key={index} className="p-3 bg-muted/30 border border-border text-center hover:bg-primary/10 transition-colors cursor-pointer">
                    <div className="text-lg mb-1">{feature.icon}</div>
                    <div className="font-mono font-bold text-xs mb-1">
                      {feature.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}