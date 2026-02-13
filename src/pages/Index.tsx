import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import BirthdayCard from "@/components/BirthdayCard";
import SurpriseGift from "@/components/SurpriseGift";
import OutroSection from "@/components/OutroSection";
import MusicToggle from "@/components/MusicToggle";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 300);
  };

  // Scroll to the message section
  const scrollToMessage = () => {
    const messageSection = document.querySelector('#message-section');
    messageSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen">
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {showContent && (
        <>
          <HeroSection onBeginClick={scrollToMessage} />
          <div id="message-section">
            <MessageSection />
          </div>
          <BirthdayCard />
          <SurpriseGift />
          <OutroSection />
          <MusicToggle />
        </>
      )}
    </div>
  );
};

export default Index;
