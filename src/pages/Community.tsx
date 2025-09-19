import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Crown,
  Star,
  Send
} from "lucide-react";
import pixelAvatars from "@/assets/pixel-avatars.png";

export default function Community() {
  const leaderboard = [
    { rank: 1, name: "PIXEL_MASTER", xp: 25840, level: 34, badge: "👑" },
    { rank: 2, name: "CODE_NINJA", xp: 23500, level: 32, badge: "🥈" },
    { rank: 3, name: "BYTE_WIZARD", xp: 21200, level: 29, badge: "🥉" },
    { rank: 4, name: "SCRIPT_HERO", xp: 19800, level: 27, badge: "⭐" },
    { rank: 5, name: "SYNTAX_SAGE", xp: 18900, level: 26, badge: "🔥" },
  ];

  const recentMessages = [
    {
      id: 1,
      user: "CODE_NINJA",
      message: "Just completed the React hooks challenge! 🚀",
      time: "2m ago",
      likes: 12,
      avatar: "CN"
    },
    {
      id: 2,
      user: "BYTE_WIZARD",
      message: "Anyone want to team up for the JavaScript tournament?",
      time: "5m ago",
      likes: 8,
      avatar: "BW"
    },
    {
      id: 3,
      user: "PIXEL_MASTER",
      message: "Pro tip: Use console.table() for better debugging! 💡",
      time: "12m ago",
      likes: 23,
      avatar: "PM"
    },
    {
      id: 4,
      user: "SCRIPT_HERO",
      message: "The CSS animations course was amazing! Thanks for the recommendation",
      time: "18m ago",
      likes: 5,
      avatar: "SH"
    }
  ];

  const weeklyStats = [
    { label: "ACTIVE MEMBERS", value: "1,247", icon: Users },
    { label: "MESSAGES TODAY", value: "342", icon: MessageSquare },
    { label: "TOP STREAK", value: "45 days", icon: TrendingUp },
    { label: "NEW LEARNERS", value: "28", icon: Star },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pixel-card p-6 glow-border">
        <h1 className="text-3xl font-bold font-mono tracking-wider text-primary mb-2">
          COMMUNITY HUB
        </h1>
        <p className="text-muted-foreground font-mono">
          Connect with fellow learners and share your progress
        </p>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {weeklyStats.map((stat, index) => (
          <Card key={index} className="pixel-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold font-mono text-primary">
                    {stat.value}
                  </p>
                </div>
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Board */}
        <div className="lg:col-span-2">
          <Card className="pixel-card">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <MessageSquare className="w-6 h-6" />
                CHAT BOARD
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                {recentMessages.map((message) => (
                  <div key={message.id} className="flex items-start gap-3 p-3 bg-muted/30 border border-border">
                    <Avatar className="w-8 h-8 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-mono font-bold">
                        {message.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono font-bold text-sm text-primary">
                          {message.user}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {message.time}
                        </span>
                      </div>
                      <p className="text-sm font-mono text-foreground mb-2">
                        {message.message}
                      </p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 text-xs font-mono">
                          <Star className="w-3 h-3 mr-1" />
                          {message.likes}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 border-t-2 border-primary/20 pt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-2 bg-input border-2 border-border font-mono text-sm focus:border-primary focus:outline-none"
                />
                <Button className="pixel-button">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <div>
          <Card className="pixel-card">
            <CardHeader className="border-b-2 border-primary/20">
              <CardTitle className="flex items-center gap-2 font-mono text-primary">
                <Crown className="w-6 h-6" />
                LEADERBOARD
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div key={player.rank} className="flex items-center gap-3 p-3 bg-muted/30 border border-border">
                    <div className="text-lg font-mono font-bold text-primary w-8">
                      #{player.rank}
                    </div>
                    <Avatar className="w-8 h-8 border-2 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xs font-mono font-bold">
                        {player.badge}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-mono font-bold text-sm">
                        {player.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">
                        Level {player.level} • {player.xp.toLocaleString()} XP
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t-2 border-primary/20">
                <Badge className="w-full justify-center py-2 font-mono">
                  VIEW FULL RANKINGS
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}