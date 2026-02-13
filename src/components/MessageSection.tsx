import { useState, useEffect, useRef } from "react";

const message = `My dearest Nishat,

Happy Birthday to the most amazing person in my life! 🎂

From the moment I met you, my world became brighter, more colorful, and filled with endless joy. You have this incredible way of making every single day feel special, and today, I want to make sure you feel just how loved and cherished you are.

You're not just my girlfriend – you're my best friend, my confidant, and my greatest adventure, my wife. Your smile lights up my darkest days, and your laughter is my favorite sound in the world. 

Every moment with you is a gift I treasure. The way you care, the way you love, the way you simply exist in this world makes everything better. You deserve all the happiness, all the love, and all the beautiful moments life can offer.

Today, I celebrate you – your kindness, your beauty (inside and out), your amazing heart, and everything that makes you uniquely YOU.

I promise to always cherish you, support your dreams, and be by your side through everything. Here's to another year of making incredible memories together! 💕

I love you more than words can express 🤗💞.

Forever yours,
Sabit 🤗💞`;

const MessageSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Observe section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTyping) {
          setIsVisible(true);
          setIsTyping(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isTyping]);

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const typingSpeed = 25;

    const typeTimer = setInterval(() => {
      if (currentIndex < message.length) {
        setDisplayedText(message.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeTimer);
      }
    }, typingSpeed);

    return () => clearInterval(typeTimer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 relative overflow-hidden"
    >
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-60 -z-10 animate-glow" />

      {/* Floating Hearts, Confetti, Sparkles */}
      {isVisible &&
        [...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-xl md:text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {["🌹", "💖", "✨", "🎉", "🎂"][
              Math.floor(Math.random() * 5)
            ]}
          </span>
        ))}

      <div className="container mx-auto max-w-3xl">
        <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl relative z-10">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-romantic text-primary mb-3 md:mb-4">
              A Message from My Heart 💌
            </h2>
          </div>

          {/* Typing Message */}
          <div className="space-y-4 text-left">
            <div className="whitespace-pre-wrap text-base md:text-xl leading-relaxed text-foreground/90 font-handwriting">
              {displayedText}
              {displayedText.length < message.length && (
                <span className="inline-block w-0.5 md:w-1 h-5 md:h-6 bg-primary ml-1 animate-pulse" />
              )}
            </div>
          </div>

          {/* Celebration Emojis after typing */}
          {displayedText.length === message.length && (
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8 animate-fade-in flex-wrap">
              {["💖", "✨", "🎂", "🎉", "💐"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-4xl animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
