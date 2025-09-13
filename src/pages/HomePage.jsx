// src/pages/HomePage.jsx
import Hero from "../components/Hero";
import Features from "../components/Features";
import CareerPath from "../components/CareerPath";
import Colleges from "../components/Colleges";
import Timeline from "../components/Timeline";

// 'onGetStartedClick' prop yahan pass hoga
export default function HomePage({ onGetStartedClick }) {
  return (
    <>
      <Hero onGetStartedClick={onGetStartedClick} />
      <main>
        <Features />
        <CareerPath />
        <Colleges />
        <Timeline />
      </main>
    </>
  );
}