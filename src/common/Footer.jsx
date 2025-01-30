import styles from './Footer.module.css';

export default function Footer() {
  const openFacebookPage = () => {
    window.open('https://www.facebook.com/MCGICaresOfficial', '_blank');
  };
  const openInstagramPage = () =>{
    window.open('https://www.instagram.com/mcgionline/?hl=en','_blank')
  };
  const openYoutubePage = () =>{
    window.open('https://www.youtube.com/c/mcgichannel','_blank')
  };
  const openTwitterPage = () =>{
    window.open('https://x.com/mcgidotorg','_blank')
  };
  const openPrivacyPage = () =>{
    window.open('https://www.mcgi.org/privacy-policy/','_blank')
  };
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.footerH3MRA}>Contact Us</h3>
          
          <ul>
            <li href ="mailto: info@mcgi.org.nz" className={styles.footerList} >info@mcgi.org.nz</li>
            <li className={styles.footerList}>+64274380184</li>
            <li className={styles.footerList}>35 Acheron Drive, Riccarton, Christchurch 8041</li>
          </ul>
         
        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Our Website</h3>
          <ul>
            <li className={styles.footerList} onClick={openPrivacyPage}>Privacy information</li>
            <li className={styles.footerList}>Developed by Mary Rose</li>
            <li className={styles.footerList}> ©2024 MCGI International | All right reserved</li>
          </ul>
          <br />

        </div>

        <div>
          <h3 className={styles.footerH3MRA}>Connect With Us</h3>

          <ul>
          <li className={styles.footerList} onClick={openFacebookPage}>Facebook</li>
          <li className={styles.footerList} onClick={openInstagramPage}>Instagram</li>
          <li className={styles.footerList} onClick={openYoutubePage}>Youtube</li>
          <li className={styles.footerList} onClick={openTwitterPage}>Twitter</li>
          </ul>
        </div>

       
        
      </div>
    </div>
  );
}
