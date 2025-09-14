import Hero from "../components/Hero";
import Features from "../components/Features";
import CareerPath from "../components/CareerPath";
import Colleges from "../components/Colleges";
import Timeline from "../components/Timeline";
import { Suspense, lazy } from "react";

// Lazy loading components
const LazyFeatures = lazy(() => import("../components/Features"));
const LazyCareerPath = lazy(() => import("../components/CareerPath"));
const LazyColleges = lazy(() => import("../components/Colleges"));
const LazyTimeline = lazy(() => import("../components/Timeline"));

export default function HomePage({ onGetStartedClick }) {
  return (
    <>
      <Hero onGetStartedClick={onGetStartedClick} />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          {/* Har component ko ek div aur id do */}
          <div id="features"><LazyFeatures /></div>
          <div id="courses"><LazyCareerPath /></div>
          <div id="colleges"><LazyColleges /></div>
          <div id="timeline"><LazyTimeline /></div>
        </Suspense>
      </main>
    </>
  );
}