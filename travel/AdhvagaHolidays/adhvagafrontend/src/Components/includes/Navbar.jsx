import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSettings } from "../../context/SettingsContext";
import logo from "../../assets/unnamed.jpg";
import "./Navbar.css";

function Navbar() {
  const { settings } = useSettings();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg py-2 ${scrolled ? 'navbar-hidden' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container-fluid navbar-container">
          {/* Left: Logo */}
          <div className="navbar-left">
            <img src={logo} alt="Adhvaga Holidays logo" className="navbar-logo" />
            <span className="navbar-header">
              <h3>{settings.agencyName?.split(' ')[0]?.toUpperCase() || 'ADHVAGA'}</h3>
              <p>{settings.agencyName?.split(' ')[1]?.toUpperCase() || 'HOLIDAYS'}</p>
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="navbar-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Domestic">
                  Domestic Holidays
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/International">
                  International Holidays
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Services">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Spacer for lanyard */}
          <div className="navbar-right"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
