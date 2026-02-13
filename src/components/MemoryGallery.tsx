import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Heart, LucideFolderHeart } from "lucide-react";
import { Button } from "./ui/button";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";

const memories = [
  {
    caption: "Our First Hangout 💕",
    description: "The day everything started...  ",

  },
  {
    caption: "Our First Date 🌹",
    description: "I knew you were special",
  },
  {
    caption: "Movie Night 🎬",
    description: "Just us and the stars",
  },
  {
    caption: "Beach Day 🌊",
    description: "Making waves together",
  },
  {
    caption: "Coffee Dates ☕",
    description: "Sweet moments, sweeter you",
  },
];

const MemoryGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Sparkles Background */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/30 rounded-full animate-sparkle hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className={`container mx-auto max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center space-y-8 md:space-y-12">
          {/* Section Title */}
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-romantic text-primary">
              Our Beautiful Journey 💑
            </h2>
            <p className="text-lg md:text-xl font-handwriting text-muted-foreground">
              Every moment with you is a treasure
            </p>
          </div>

          {/* Gallery */}
          <div className="relative">
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl">
              {/* Photo Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl md:rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/50" />
                <Heart className="w-20 h-20 md:w-32 md:h-32 text-primary/40" fill="currentColor" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-5xl md:text-6xl">📸</p>
                </div>
              </div>

              {/* Caption */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-handwriting text-primary">
                  {memories[currentIndex].caption}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground">
                  {memories[currentIndex].description}
                </p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                <Button
                  onClick={prevSlide}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-white active:scale-95 transition-all w-10 h-10 md:w-12 md:h-12"
                  aria-label="Previous memory"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </Button>

                {/* Dots */}
                <div className="flex gap-1.5 md:gap-2">
                  {memories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        i === currentIndex 
                          ? 'bg-primary w-6 md:w-8' 
                          : 'bg-primary/30 hover:bg-primary/50 active:bg-primary/70'
                      }`}
                      aria-label={`Go to memory ${i + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-white active:scale-95 transition-all w-10 h-10 md:w-12 md:h-12"
                  aria-label="Next memory"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </div>
            </div>
          </div>

          {/* Counter */}
          <p className="text-base md:text-lg font-handwriting text-muted-foreground">
            Memory {currentIndex + 1} of {memories.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemoryGallery;
