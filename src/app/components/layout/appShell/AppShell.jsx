"use client";

import "./AppShell.scss";
import Header from "../header/Header";
import { TripProvider } from "../../../context/TripContext";

export default function AppShell({ children }) {
  return (
    <TripProvider>
      <div className="app-shell">
        <header className="app-shell__header">
          <Header />
        </header>

        <main className="app-shell__main">{children}</main>
      </div>
    </TripProvider>
  );
}
