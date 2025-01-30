import { useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import mcgilogo from "../assets/NavBar/mcgi-logo.png";
import Register from '../pages/HomePage/components/Register'; // Import the Register component

export default function Navbar() {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for modal visibility

  const handleClickLogIn = () => {
    navigate('/mcgi-feast-portal-log-in');
  };

  const handleClickSignUp = (e) => {
    e.preventDefault();
    setShowForm(true); // Show the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setShowForm(false); // Hide the modal when closed
  };

  const handleLinkClick = (sectionId) => {
    setNav(false); // Close the mobile menu after clicking a link
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0); // Timeout ensures the state update happens before scrolling
};

  return (
    <header className={styles.HeaderNavbar}>
      <img src={mcgilogo} alt="mcgilogo" style={{ height: 50, width: 150 }} />

      <nav>
        <ul className={nav ? [styles.MenuNav, styles.active].join(' ') : [styles.MenuNav]}>
          <Link to="/mcgi-feast-portal">HOME</Link>
          <Link to="/#welcome-our-beliefs" className={styles.navLink} onClick={() => handleLinkClick('welcome-our-beliefs')}>ABOUT</Link>
          <Link to="/#event" className={styles.navLink} onClick={() => handleLinkClick('event')}>EVENTS</Link>

        </ul>
      </nav>

      <div className={nav ? [styles.headerDivRight, styles.active].join(' ') : [styles.headerDivRight]}>
        <nav className={styles.headerNavRight}>
          <ul className={styles.headerUlRight}>
            <br />
            <button type='submit' className={styles.headerLiRight} onClick={handleClickSignUp}>
              REGISTER
            </button>
            <p>|</p>
            <button type='submit' className={styles.headerLiRight} onClick={handleClickLogIn}>
              LOG IN
            </button>
          </ul>
        </nav>
      </div>

      <button onClick={() => setNav(!nav)} className={styles.OpenCloseButton}>
        {nav ? <FaTimes /> : <FaBars />}
      </button>

      {/* Render the Register modal */}
      <Register show={showForm} onClose={handleCloseModal}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfBFrZdtH6BavnEWN2QMyRpR0lsD48Oy1O6mEUy9SS9dcLgGg/viewform?embedded=true"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Registration Form"
        >
          Loading…
        </iframe>
      </Register>
    </header>
  );
}