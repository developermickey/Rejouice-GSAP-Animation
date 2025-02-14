import React, { useEffect, useRef } from "react";
import DownArrow from "../icons/DownArrow";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
      wheelMultiplier: 1.2, // Speed multiplier
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
    });

    // Hero section moves up
    gsap.to(heroRef.current, {
      y: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "bottom bottom",
        end: "top top",
        scrub: 1,
        stagger: 0.1,
      },
    });

    // Pin the video section
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Hero Content */}
      <div
        ref={heroRef}
        className="hero absolute w-full h-[75vh] bg-[#101010] overflow-hidden px-5 sm:px-10 z-10"
      >
        <div className="w-full h-full flex flex-col justify-between">
          <div className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[220px] xl:text-[300px] 2xl:text-[350px] leading-[100px] sm:leading-[200px] md:leading-[200px] lg:leading-[400px] font-extrabold text-center text-[#fff]">
            rejouice
          </div>
          <div className="grid grid-cols-11 text-sm items-center text-[#fff] py-6">
            <div className="col-span-5 md:col-span-3">
              Strategy, Design,
              <br />
              and Performance.
            </div>
            <div className="col-span-5 md:col-span-3">
              Two Engagement
              <br />
              Models: Cash or Equity.
            </div>
            <div className="col-span-1 text-sm flex justify-end md:col-span-5">
              <DownArrow />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Video Section */}
      <div
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-[100vh] overflow-hidden -z-20"
      >
        <video
          className="w-full h-full object-cover"
          loop
          autoPlay
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/decode/video/upload/v1739268710/2894887-uhd_3840_2160_24fps_u3x8oy.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Hero;
