// styles imported globally via App.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { asset } from '../../utils/asset';

const COUNTRIES = [
  { name: 'India', phone: '+917305635666', tel: '+917305635666', flag: asset('/flags/india.svg') },
  { name: 'UAE', phone: '+971 561016865', tel: '+971561016865', flag: asset('/flags/uae.svg') },
  { name: 'Malaysia', phone: '+60162592727', tel: '+60162592727', flag: asset('/flags/malaysia.svg') },
  { name: 'Australia', phone: '+61540868663', tel: '+61540868663', flag: asset('/flags/australia.svg') },
  { name: 'USA', phone: '+1619203-3624', tel: '+16192033624', flag: asset('/flags/usa.svg') },
];

function CountryContacts({ className }) {
  return (
    <div className={className}>
      {COUNTRIES.map((country) => (
        <a key={country.name} className="nav-country" href={`tel:${country.tel}`}>
          <img src={country.flag} alt="" className="nav-country-flag" />
          <span className="nav-country-text">
            <span className="nav-country-name">{country.name}</span>
            <span className="nav-country-phone">{country.phone}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <nav className={`main-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-shell">
        <Link to="/" className="nav-logo" onClick={closeAll}>
          <img src={asset('/pumo-logo.png')} alt="Pumo Technovation" />
        </Link>

        <CountryContacts className="nav-countries" />

        <div className="nav-actions">
          <Link to="/courses" className="explore-course-btn" onClick={closeAll}>
            <span className="explore-course-icon" aria-hidden="true">
              <FaGraduationCap />
            </span>
            Explore Course
          </Link>
          <button
            type="button"
            className="nav-hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      <div className={`nav-drawer ${menuOpen ? 'open' : ''}`}>
        <CountryContacts className="nav-menu-countries" />
        <ul className="nav-drawer-links">
          <li>
            <NavLink to="/" className="nav-link" onClick={closeAll} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link" onClick={closeAll}>
              About Us
            </NavLink>
          </li>
          <li
            className="nav-item dropdown"
            onMouseEnter={() => window.innerWidth > 767 && setCoursesOpen(true)}
            onMouseLeave={() => window.innerWidth > 767 && setCoursesOpen(false)}
          >
            <NavLink
              to="/courses"
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                if (window.innerWidth <= 767) {
                  e.preventDefault();
                  setCoursesOpen((open) => !open);
                } else {
                  closeAll();
                }
              }}
            >
              Courses <FiChevronDown size={14} />
            </NavLink>
            <ul className={`dropdown-menu ${coursesOpen ? 'show' : ''}`}>
              <li>
                <Link className="dropdown-item" to="/courses" onClick={closeAll}>All Courses</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/courses/masters-industrial-design" onClick={closeAll}>Masters</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/courses/certified-industrial-design" onClick={closeAll}>Certified</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/clients" className="nav-link" onClick={closeAll}>
              Our Clients & Partners
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" onClick={closeAll}>
              Contact
            </NavLink>
          </li>
        </ul>
        <Link to="/courses" className="explore-course-btn nav-drawer-explore" onClick={closeAll}>
          <span className="explore-course-icon" aria-hidden="true">
            <FaGraduationCap />
          </span>
          Explore Course
        </Link>
      </div>
    </nav>
  );
}
