import { useState, useEffect } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import photoFrame from "@/assets/photo-frame.jpg";

interface HeroSectionProps {
  onBeginClick: () => void;
}

const HeroSection = ({ onBeginClick }: HeroSectionProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-12 px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100" />
      
      {/* Floating Hearts */}
      {[...Array(10)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-primary/20 animate-heart-float hidden md:block"
          fill="currentColor"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            width: `${20 + Math.random() * 30}px`,
            height: `${20 + Math.random() * 30}px`,
          }}
        />
      ))}

      <div className={`container mx-auto text-center relative z-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-romantic text-primary drop-shadow-lg animate-bounce-in">
              Happy Birthday,
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-romantic text-gradient-romantic animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              My Love 💖
            </h2>
          </div>

          {/* Photo Frame */}
          <div className="relative inline-block animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto">
              <img
                src={photoFrame}
                alt="Nishat"
                className="w-full h-full object-cover rounded-full border-4 md:border-8 border-white shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full border-2 md:border-4 border-primary/30 animate-ping" style={{ animationDuration: '3s' }} />
              <Sparkles className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 text-accent animate-sparkle" />
              <Sparkles className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 text-secondary animate-sparkle" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Message */}
          <p className="text-lg sm:text-xl md:text-2xl font-handwriting text-foreground/80 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.6s' }}>
            Today is all about you, my beautiful Nishat. 
            I've prepared something special just for you. 
            Are you ready to see it? 💕
          </p>

          {/* CTA Button */}
          <div className="animate-bounce-in" style={{ animationDelay: '0.8s' }}>
            <Button
              onClick={onBeginClick}
              size="lg"
              className="text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-primary to-secondary hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg hover:shadow-xl font-handwriting"
            >
              Click to Begin 🎁
            </Button>
          </div>

          {/* Floating Balloons */}
          <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8">
            {['🎈', '🎂', '🎉', '💐', '✨'].map((emoji, i) => (
              <span
                key={i}
                className="text-3xl sm:text-4xl md:text-5xl animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
