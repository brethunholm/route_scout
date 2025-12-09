"use client";

import "./Hero.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero({ onStartPlanning }) {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 950);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Plan a smarter road trip</h1>
        <p className="hero__subtitle">
          Find gas, food, hotels, and attractions along your route
        </p>
        <button className="hero__cta" onClick={onStartPlanning}>
          Plan your first trip
        </button>
      </div>
      {isDesktop && (
        <div className="hero__image">
          <Image
            src="/images/road-illustration.png"
            alt="Scenic road illustration"
            width={380}
            height={420}
            priority
          />
        </div>
      )}
    </section>
  );
}
