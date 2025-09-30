'use client';

import { useState, useEffect } from "react";
import Preloader from "./Preloader";
import Header from "./Header";
import Hero from "./Hero";
import Marquee from "./Marquee";
import ThreeStepProcess from "./ThreeStepProcess";

import Features from "./Features";

import AboutUs from "./AboutUs";
import UaeCompanyCards from "./UaeCompanyCards";



import Testimonials from "./Testimonials";
import CostCalculator from "./CostCalculator";



import ConsultationBanner from "./ConsultationBanner";

import Services from "./Services";
import Partners from "./Partners";
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
          <Marquee />


          <AboutUs />
          <ThreeStepProcess />
          <Services />


          <ConsultationBanner />
          <UaeCompanyCards />
          <Testimonials />

          <Partners />
          <CostCalculator />








          <Footer />
        </>
      )}
    </div>
  );
}
