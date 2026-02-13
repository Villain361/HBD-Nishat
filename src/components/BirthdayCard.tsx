import { useState, useEffect, useRef } from "react";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
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

  const handleOpenCard = () => {
    setIsOpen(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-blue-50 to-purple-50"
    >
      {/* Confetti Effect */}
      {showConfetti && [...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute text-xl md:text-2xl animate-confetti pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        >
          {['🎉', '🎊', '✨', '💖', '🎂'][Math.floor(Math.random() * 5)]}
        </div>
      ))}

      <div className={`container mx-auto max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {!isOpen ? (
          <div className="text-center space-y-6 md:space-y-8">
            <Gift className="w-20 h-20 md:w-24 md:h-24 text-primary mx-auto animate-float" />
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl md:text-5xl font-romantic text-primary">
                You've Got Mail! 💌
              </h2>
              <p className="text-lg md:text-xl font-handwriting text-muted-foreground">
                Click to open your special birthday card
              </p>
            </div>
            <Button
              onClick={handleOpenCard}
              size="lg"
              className="text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-primary to-secondary hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg font-handwriting"
            >
              Open Card 🎁
            </Button>
          </div>
        ) : (
          <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl animate-bounce-in relative">
            {/* Sparkles */}
            <Sparkles className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 text-accent animate-sparkle" />
            <Sparkles className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-8 h-8 md:w-12 md:h-12 text-secondary animate-sparkle" />

            {/* Card Content */}
            <div className="text-center space-y-4 md:space-y-6">
              <div className="text-5xl md:text-6xl mb-3 md:mb-4">🎂</div>
              
              <h3 className="text-3xl md:text-5xl font-romantic text-primary">
                Happy Birthday Nishat! 🎉
              </h3>

              <div className="space-y-3 md:space-y-4 text-base md:text-xl font-handwriting text-foreground/90">
                <p>
                  May your special day be filled with endless joy, laughter, and all the love your heart can hold! 💕
                </p>
                <p>
                  You light up my world every single day, and today we celebrate the amazing person you are! ✨
                </p>
                <p>
                  Here's to another year of beautiful adventures together! 🌹
                </p>
              </div>

              {/* Candle Animation */}
              <div className="flex justify-center gap-1.5 md:gap-2 my-6 md:my-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="text-3xl md:text-4xl animate-float">🕯️</div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 md:-translate-y-4">
                      <div className="w-0.5 md:w-1 h-3 md:h-4 bg-orange-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-romantic text-primary">
                Make a wish! 💫
              </p>

              <div className="flex justify-center gap-1.5 md:gap-2 flex-wrap mt-4 md:mt-6">
                {['💖', '🎈', '🎊', '✨', '🌟', '💐', '🎁', '🎉'].map((emoji, i) => (
                  <span 
                    key={i}
                    className="text-2xl md:text-3xl animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
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

export default BirthdayCard;
