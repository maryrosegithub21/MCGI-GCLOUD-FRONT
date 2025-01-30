// import React, { useState } from 'react';
import { useState } from 'react';
import styles from '../components/HeroBanner.module.css';
import Modal from '../../../pages/HomePage/components/Register';

export default function HeroBanner() {
  const [showForm, setShowForm] = useState(false);

  const handleClicksignUpHero = (e) => {
    e.preventDefault();
    setShowForm(true); // Show the form when the button is clicked
  };

  const handleCloseModal = () => {
    setShowForm(false); // Hide the form when the modal is closed
  };

  return (
    <div className={styles.parentContainerHeroMRA}>
      <div className={styles.btnSignUpDivHero}>
        <button
          type='submit'
          className={styles.SignUpButtonHeroMRA}
          onClick={handleClicksignUpHero}
        >
          REGISTER NOW
        </button>
        <p className={styles.HeroBanH5MRA}>
          The Feast Dedicated to God is available quarterly.
        </p>
      </div>
      <Modal show={showForm} onClose={handleCloseModal}>
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
      </Modal>
    </div>
  );
}
