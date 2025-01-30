// === To applied the style you have to import this === //
import styles from './SlideShowMain.module.css'
// === To applied the style you have to import this === //

// === Import Photos from the folder on the Left Side=== //
import quote1 from '../../../assets/home/quote1.png'
import quote2 from '../../../assets/home/quote2.png'
import quote3 from '../../../assets/home/quote3.png'
import quote4 from '../../../assets/home/quote4.png'

// === Import Photos from the folder Right Side=== //
import fiesta1 from '../../../assets/home/Fiesta 4.png'
import fiesta2 from '../../../assets/home/Fiesta 2.png'
import fiesta3 from '../../../assets/home/Fiesta 3.png'
import fiesta4 from '../../../assets/home/Fiesta.png'


// ==== For SlideShow  on the right==== //
import { useState } from 'react'
import { useEffect } from 'react'


export default function Body1() {


// =====  For Slide show on the right ===== //
const [img1, setImg1] = useState(true)   
const [img2, setImg2] = useState(false)   
const [img3, setImg3] = useState(false)   
const [img4, setImg4] = useState(false)   

// ===== Function for buttons on the slide ===== //
function handleClickImg1(){
  setImg1(true)
}

function handleClickImg2(){
  setImg2(true)
}

function handleClickImg3(){
  setImg3(true)
}

function handleClickImg4(){
  setImg4(true)
}

// ====== Image 1 on right side ====== //

useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img1 === true) {
    setImg1(true)
    setImg2(false)
    setImg3(false)
    setImg4(false)
   }  
}, [img1])

// ====== Image 2 on right side ===== //

useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img2 === true) {
    setImg1(false)
    setImg2(true)
    setImg3(false)
    setImg4(false)
   }  
}, [img2])

// ====== Image 3 on right side ===== //
useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img3 === true) {
    setImg1(false)
    setImg2(false)
    setImg3(true)
    setImg4(false)
   }  
}, [img3])

// ====== Image 4 on right side ===== //
useEffect(() => {
  console.log(img1);
  console.log(img2);
  console.log(img3);
  console.log(img4);

  if(img4 === true) {
    setImg1(false)
    setImg2(false)
    setImg3(false)
    setImg4(true)
   }  
}, [img4])


  return (

    <div>
       
<div className={styles.parentDivBody1MRA}>
<div className={styles.grandchildBody1LeftMRA}>
        <h1 className={styles.grandchilSlideH1}>Welcome to MCGI New Zealand</h1>
        <br />
        <p className={styles.body1PMRA}>Welcome to Members Church of God International (MCGI) in New Zealand, a place where faith is nurtured, and spirituality flourishes. Our congregation is united by a shared belief in the teachings of Jesus Christ and a commitment to spreading His message of faith, hope and love. We embrace all who seek spiritual growth, offering a sanctuary of worship and a community of support.</p>
        <br />
        <div className={styles.imageQuoteBody1MRA}>
      <img className={styles.quote} src={quote1} alt="quote"></img> 
        < img  className={styles.quote} src={quote2} alt="quote"></img>
        <img  className={styles.quote} src={quote3} alt="quote"></img>
        <img  className={styles.quote} src={quote4} alt="quote"></img>
        
        </div>
</div>
<div className={styles.grandchildBody1RightMRA}  >

{/* ===== SLIDE SHOW OF PHOTOS ON THE RIGHT SIDE ===== */}
{img1 && <img className={styles.fiestaimg} src={fiesta1} alt="animation" ></img> }
{img2 && <img className={styles.fiestaimg} src={fiesta2} alt="animation" ></img> }
{img3 && <img className={styles.fiestaimg} src={fiesta3} alt="animation" ></img> }
{img4 && <img className={styles.fiestaimg} src={fiesta4} alt="animation" ></img> }

{/* ===== BUTTON ON BELOW ON THE RIGHT SIDE ===== */}
<div className={styles.dotDivSlideMRA}>
<span className={styles.dot} onClick={handleClickImg1}></span> 
<span className={styles.dot} onClick={handleClickImg2} ></span> 
<span className={styles.dot} onClick={handleClickImg3} ></span> 
<span className={styles.dot} onClick={handleClickImg4} ></span> 
</div>

</div>

</div>

</div>

  )
}



