import "./AppShell.scss";
import Header from "../header/Header";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <Header />
      </header>

      <main className="app-shell__main">{children}</main>
    </div>
  );
}
