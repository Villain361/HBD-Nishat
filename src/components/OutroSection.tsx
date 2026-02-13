import { Heart, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const OutroSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-pink-50 to-purple-100">
      {/* Floating Hearts */}
      {[...Array(12)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-primary/20 animate-float hidden md:block"
          fill="currentColor"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${15 + Math.random() * 25}px`,
            height: `${15 + Math.random() * 25}px`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Main Heart */}
          <div className="relative inline-block">
            <Heart className="w-24 h-24 md:w-32 md:h-32 text-primary mx-auto animate-heartbeat" fill="currentColor" />
            <div className="absolute inset-0 animate-ping opacity-20">
              <Heart className="w-24 h-24 md:w-32 md:h-32 text-primary mx-auto" fill="currentColor" />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4 md:space-y-6 glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-romantic text-primary">
              Thank You for Being You 💖
            </h2>
            
            <div className="space-y-3 md:space-y-4 text-base md:text-xl font-handwriting text-foreground/90">
              <p>
                Nishat, you make every day feel like a celebration. Today is just one special day in a lifetime of beautiful moments with you.
              </p>
              <p>
                I hope this little surprise made you smile as much as you make me smile every single day. 😊
              </p>
              <p className="text-xl md:text-2xl text-primary">
                Happy Birthday, my love! Here's to many more adventures together! 🎂✨
              </p>
            </div>

            <div className="flex justify-center gap-1.5 md:gap-2 flex-wrap my-4 md:my-6">
              {['💖', '🎉', '🎂', '🎈', '🎊', '💝', '🌹', '✨', '💕', '🎁'].map((emoji, i) => (
                <span 
                  key={i}
                  className="text-2xl md:text-3xl animate-float"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>

            <Button
              onClick={scrollToTop}
              size="lg"
              className="text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 bg-gradient-to-r from-primary to-secondary hover:scale-110 active:scale-95 transition-transform duration-300 shadow-lg font-handwriting"
            >
              Replay Experience <ArrowUp className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>

          {/* Footer */}
          <div className="space-y-2 mt-8 md:mt-12 animate-fade-in">
            <p className="text-base md:text-lg font-handwriting text-muted-foreground">
              Made with 💖 by Sabit
            </p>
            <p className="text-sm text-muted-foreground/70">
              For the most amazing girl in the world
            </p>
            <div className="flex justify-center gap-3 md:gap-4 mt-3 md:mt-4">
              {['💑', '💕', '🌟'].map((emoji, i) => (
                <span 
                  key={i}
                  className="text-xl md:text-2xl animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutroSection;
