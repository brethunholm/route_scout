"use client";

import "./Hero.scss";
import Image from "next/image";

export default function Hero({ onStartPlanning }) {
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
      <div className="hero__image">
        <Image
          src="/images/road-illustration.png"
          alt="Scenic road illustration"
          width={380}
          height={420}
          priority
        />
      </div>
    </section>
  );
}
