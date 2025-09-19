import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import trophyIcon from "@/assets/trophy-icon.png";
import starIcon from "@/assets/star-icon.png";

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      name: "FIRST STEPS",
      description: "Complete your first course",
      rarity: "COMMON",
      unlocked: true,
      xp: 100,
      category: "Learning"
    },
    {
      id: 2,
      name: "SPEED DEMON",
      description: "Complete 5 courses in one day",
      rarity: "RARE",
      unlocked: true,
      xp: 500,
      category: "Performance"
    },
    {
      id: 3,
      name: "CODING MASTER",
      description: "Perfect score on JavaScript quiz",
      rarity: "EPIC",
      unlocked: true,
      xp: 1000,
      category: "Mastery"
    },
    {
      id: 4,
      name: "TEAM PLAYER",
      description: "Help 10 community members",
      rarity: "RARE",
      unlocked: true,
      xp: 750,
      category: "Community"
    },
    {
      id: 5,
      name: "LEGEND",
      description: "Reach level 50",
      rarity: "LEGENDARY",
      unlocked: false,
      xp: 5000,
      category: "Progress"
    },
    {
      id: 6,
      name: "PERFECTIONIST",
      description: "Complete 10 courses with 100% score",
      rarity: "EPIC",
      unlocked: false,
      xp: 2000,
      category: "Mastery"
    }
  ];

  const categories = ["All", "Learning", "Performance", "Mastery", "Community", "Progress"];
  const rarityColors = {
    COMMON: "bg-muted text-muted-foreground",
    RARE: "bg-primary text-primary-foreground",
    EPIC: "bg-secondary text-secondary-foreground",
    LEGENDARY: "bg-accent text-accent-foreground"
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="pixel-card p-6 glow-border">
        <h1 className="text-3xl font-bold font-mono tracking-wider text-primary mb-2">
          ACHIEVEMENTS HALL
        </h1>
        <p className="text-muted-foreground font-mono">
          Unlock badges and earn XP by completing challenges
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-primary">4/6</div>
            <div className="text-xs font-mono text-muted-foreground">UNLOCKED</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-accent">2,350</div>
            <div className="text-xs font-mono text-muted-foreground">TOTAL XP</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-secondary">1</div>
            <div className="text-xs font-mono text-muted-foreground">EPIC BADGES</div>
          </CardContent>
        </Card>
        <Card className="pixel-card">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold font-mono text-primary">67%</div>
            <div className="text-xs font-mono text-muted-foreground">COMPLETION</div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Grid */}
      <Card className="pixel-card">
        <CardHeader className="border-b-2 border-primary/20">
          <CardTitle className="flex items-center gap-2 font-mono text-primary">
            <img src={trophyIcon} alt="Trophy" className="w-6 h-6 pixel-icon" />
            ALL ACHIEVEMENTS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`pixel-card p-4 transition-all duration-200 ${
                  achievement.unlocked
                    ? "bg-card glow-border"
                    : "bg-muted/50 opacity-60 border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <img
                    src={achievement.unlocked ? trophyIcon : starIcon}
                    alt={achievement.unlocked ? "Trophy" : "Locked"}
                    className={`w-8 h-8 pixel-icon ${
                      achievement.unlocked ? "flash-star" : "grayscale"
                    }`}
                  />
                  <Badge
                    className={`text-xs font-mono ${
                      rarityColors[achievement.rarity as keyof typeof rarityColors]
                    }`}
                  >
                    {achievement.rarity}
                  </Badge>
                </div>
                
                <h3 className="font-mono font-bold text-sm mb-1">
                  {achievement.name}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mb-3">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-muted-foreground">
                    {achievement.category}
                  </span>
                  <span className="font-mono font-bold text-xs text-accent">
                    +{achievement.xp} XP
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}