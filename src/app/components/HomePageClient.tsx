'use client';

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Services from "./Services";
import Countrys from "./Countrys";
import ThreeStepProcess from "./ThreeStepProcess";
import Plans from "./Plans";
import Testimonials from "./Testimonials";
import Process from "./Process";
import FAQ from "./FAQ";


import Footer from "./Footer";

export default function HomePageClient() {
  const [showContent, setShowContent] = useState(false);
  const [shouldShowPreloader, setShouldShowPreloader] = useState(true);

  useEffect(() => {
    console.log("HomePageClient mounted");
    if (typeof window !== 'undefined' && sessionStorage.getItem("hasSeenPreloader")) {
      console.log("hasSeenPreloader is true, not showing preloader");
      setShouldShowPreloader(false);
      setShowContent(true); // Immediately show content if preloader not needed
    } else {
      console.log("hasSeenPreloader is false, showing preloader");
    }
  }, []);

  const handlePreloaderComplete = () => {
    console.log("Preloader complete, setting hasSeenPreloader to true");
    sessionStorage.setItem("hasSeenPreloader", "true");
    setShouldShowPreloader(false);
    setShowContent(true);
  };

  return (
    <div>
      {shouldShowPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      {showContent && (
        <>
          <Header />
          <Hero />
          <Features />
          <Services />
          <Countrys />
          <ThreeStepProcess />
          <Plans />
          <Testimonials />
          <Process />
          <FAQ />





          <Footer />
        </>
      )}
    </div>
  );
}
