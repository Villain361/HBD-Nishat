import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="text-center space-y-6 md:space-y-8 px-4 max-w-md mx-auto">
        <div className="relative">
          <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto animate-heartbeat" fill="currentColor" />
          <div className="absolute inset-0 animate-ping opacity-20">
            <Heart className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto" fill="currentColor" />
          </div>
        </div>
        
        <div className="space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-4xl font-romantic text-primary">
            Loading surprise for Nishat...
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-handwriting">
            💖 Preparing something special 💖
          </p>
        </div>

        <div className="w-48 md:w-64 mx-auto bg-white/50 rounded-full h-2.5 md:h-3 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-center gap-1.5 md:gap-2">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="w-5 h-5 md:w-6 md:h-6 text-primary animate-float"
              fill="currentColor"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
