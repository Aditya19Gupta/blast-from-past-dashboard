import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Zap,
  ChevronRight
} from "lucide-react";
import trophyIcon from "@/assets/trophy-icon.png";
import starIcon from "@/assets/star-icon.png";
import aiRobot from "@/assets/ai-robot.png";

export function OverviewDashboard() {
  const stats = [
    { label: "COURSES COMPLETED", value: "12", icon: Target, color: "text-primary" },
    { label: "TOTAL XP", value: "15,840", icon: Zap, color: "text-accent" },
    { label: "STREAK DAYS", value: "28", icon: TrendingUp, color: "text-secondary" },
    { label: "TIME SPENT", value: "47h", icon: Clock, color: "text-primary" },
  ];

  const recentAchievements = [
    { name: "SPEED DEMON", description: "Complete 5 courses in one day", rarity: "RARE" },
    { name: "CODING MASTER", description: "Perfect score on JavaScript quiz", rarity: "EPIC" },
    { name: "TEAM PLAYER", description: "Help 10 community members", rarity: "COMMON" },
  ];

  const quickActions = [
    { name: "CONTINUE LEARNING", path: "/course/react-basics" },
    { name: "DAILY CHALLENGE", path: "/challenge" },
    { name: "VIEW LEADERBOARD", path: "/community" },
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Welcome Header */}
      <div className="pixel-card p-6 bg-gradient-to-r from-primary/10 to-secondary/10 glow-border">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-mono tracking-wider text-primary mb-2">
              WELCOME BACK, PLAYER!
            </h1>
            <p className="text-muted-foreground font-mono">
              Ready to level up your skills today?
            </p>
          </div>
          <img src={aiRobot} alt="AI Assistant" className="w-16 h-16 pixel-icon" />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="pixel-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold font-mono ${stat.color}`}>
                    {stat.value}
                  </p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Achievements */}
        <Card className="pixel-card">
          <CardHeader className="border-b-2 border-primary/20">
            <CardTitle className="flex items-center gap-2 font-mono text-primary">
              <img src={trophyIcon} alt="Trophy" className="w-6 h-6 pixel-icon" />
              RECENT ACHIEVEMENTS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 border border-border">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm">{achievement.name}</span>
                    <Badge 
                      variant={achievement.rarity === "EPIC" ? "default" : "secondary"}
                      className="text-xs font-mono"
                    >
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {achievement.description}
                  </p>
                </div>
                <img src={starIcon} alt="Star" className="w-4 h-4 pixel-icon flash-star" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <Card className="pixel-card">
          <CardHeader className="border-b-2 border-primary/20">
            <CardTitle className="font-mono text-primary">CURRENT PROGRESS</CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm font-bold">REACT FUNDAMENTALS</span>
                <span className="font-mono text-xs text-muted-foreground">85%</span>
              </div>
              <div className="pixel-progress">
                <div className="pixel-progress-fill w-[85%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm font-bold">JAVASCRIPT ADVANCED</span>
                <span className="font-mono text-xs text-muted-foreground">42%</span>
              </div>
              <div className="pixel-progress">
                <div className="pixel-progress-fill w-[42%]"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm font-bold">CSS ANIMATIONS</span>
                <span className="font-mono text-xs text-muted-foreground">12%</span>
              </div>
              <div className="pixel-progress">
                <div className="pixel-progress-fill w-[12%]"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="pixel-card">
        <CardHeader className="border-b-2 border-primary/20">
          <CardTitle className="font-mono text-primary">QUICK ACTIONS</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Button key={index} className="pixel-button h-12 font-mono font-bold">
                {action.name}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}