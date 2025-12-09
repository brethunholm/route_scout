"use client";

import { createContext, useContext, useState } from "react";

const TripContext = createContext(null);

export function TripProvider({ children }) {
  const [tripData, setTripData] = useState(null);

  const updateTrip = (data) => {
    setTripData({
      origin: data.origin,
      destination: data.destination,
      departureTime: data.departureTime || new Date().toISOString(),
      timestamp: Date.now(),
    });
  };

  const clearTrip = () => {
    setTripData(null);
  };

  return (
    <TripContext.Provider value={{ tripData, updateTrip, clearTrip }}>
      {children}
    </TripContext.Provider>
  );
}

export function useTripContext() {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error("useTripContext must be used within a TripProvider");
  }
  return context;
}
