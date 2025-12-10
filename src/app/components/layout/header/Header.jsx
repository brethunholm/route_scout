"use client";

import { useState } from "react";
import "./Header.scss";
import RouteScoutLogo from "../../icons/RouteScoutLogo";
import Input from "../../pieces/Input";
import { useTripContext } from "../../../context/TripContext";

export default function Header({ onOpenMenu }) {
  const { updateTrip } = useTripContext();
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (origin.trim() && destination.trim()) {
      updateTrip({ origin, destination });
    }
  };

  return (
    <header className="header">
      <div className="header__bar">
        {/* Left group  */}
        <div className="header__left">
          {/* Hamburger */}
          <button
            className="header__menu-button"
            aria-label="Open navigation"
            onClick={onOpenMenu}
          >
            <span className="header__menu-line" />
            <span className="header__menu-line" />
            <span className="header__menu-line" />
          </button>

          {/* Logo */}
          <div className="header__logo">
            <RouteScoutLogo className="header__logo-svg" />
          </div>
        </div>

        {/* Right group */}
        <form className="header__right" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Start"
            aria-label="Enter starting location"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Destination"
            aria-label="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <button type="submit" className="header__cta">
            Plan Trip
          </button>
        </form>
      </div>
    </header>
  );
}
