import "./Header.scss";
import RouteScoutLogo from "../../icons/RouteScoutLogo";

export default function Header({ onOpenMenu }) {
  return (
    <header className="header">
      <div className="header__bar">
        {/* Left group */}
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
        <div className="header__right">
          <button className="header__cta">Plan Trip</button>
        </div>
      </div>
    </header>
  );
}
