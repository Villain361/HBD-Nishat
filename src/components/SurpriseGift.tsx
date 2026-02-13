import { useState, useEffect, useRef } from "react";
import { Gift, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const SurpriseGift = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleReveal = () => {
    setIsRevealed(true);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 4000);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50"
    >
      {/* Fireworks Effect */}
      {showFireworks && [...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-confetti pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 50}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${1.5 + Math.random()}s`,
            fontSize: `${16 + Math.random() * 16}px`,
          }}
        >
          {['✨', '💫', '⭐', '🌟', '💖'][Math.floor(Math.random() * 5)]}
        </div>
      ))}

      <div className={`container mx-auto max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {!isRevealed ? (
          <div className="text-center space-y-6 md:space-y-8">
            <div className="relative inline-block">
              <Gift className="w-24 h-24 md:w-32 md:h-32 text-primary mx-auto animate-float" />
              <Sparkles className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 text-accent animate-sparkle" />
              <Sparkles className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 text-secondary animate-sparkle" />
            </div>

            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-romantic text-primary">
                One More Surprise! 🎁
              </h2>
              <p className="text-lg md:text-2xl font-handwriting text-muted-foreground max-w-xl mx-auto px-4">
                I've saved the best for last... Are you ready to see your special gift?
              </p>
            </div>

            <Button
              onClick={handleReveal}
              size="lg"
              className="text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:scale-110 active:scale-95 transition-transform duration-300 shadow-2xl font-handwriting animate-pulse"
            >
              Open Your Gift! 💝
            </Button>

            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {['🎀', '💝', '🎁', '💖', '✨'].map((emoji, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-4xl animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl animate-bounce-in">
            <div className="text-center space-y-6 md:space-y-8">
              <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto animate-heartbeat" fill="currentColor" />

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-5xl font-romantic text-primary">
                  Your Special Gift 💝
                </h3>
                <p className="text-lg md:text-2xl font-handwriting text-muted-foreground">
                  A collection of all the reasons I love you...
                </p>
              </div>

              {/* Gift Content */}
              <div className="glass-effect rounded-xl md:rounded-2xl p-4 md:p-8 space-y-3 md:space-y-4 text-left">
                <div className="grid gap-3 md:gap-4">
                  {[
                    { emoji: "💖", text: "Your beautiful smile that brightens my day" },
                    { emoji: "✨", text: "The way you make everything more magical" },
                    { emoji: "🌟", text: "Your kind heart and caring soul" },
                    { emoji: "💕", text: "How you understand me like no one else" },
                    { emoji: "🌹", text: "Every single moment we share together" },
                    { emoji: "💫", text: "The way you make me want to be better" },
                  ].map((item, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3 md:gap-4 animate-slide-in-left"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      <span className="text-2xl md:text-3xl flex-shrink-0">{item.emoji}</span>
                      <p className="text-base md:text-lg font-handwriting text-foreground/90 pt-0.5 md:pt-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 animate-fade-in" style={{ animationDelay: '1s' }}>
                <p className="text-xl md:text-2xl font-handwriting text-primary">
                  And so much more... 💖
                </p>
                <p className="text-base md:text-lg text-muted-foreground">
                  You are my everything, Nishat. Today and always! 
                </p>
              </div>

              <div className="flex justify-center gap-1.5 md:gap-2 flex-wrap">
                {['💖', '✨', '🎊', '💝', '🌟', '💫', '🎉', '💕'].map((emoji, i) => (
                  <span 
                    key={i}
                    className="text-2xl md:text-3xl animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SurpriseGift;
