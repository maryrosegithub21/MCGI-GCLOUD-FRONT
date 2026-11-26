// === Routes === //
// import React from 'react'
import NavBar from '../../common/Navbar.jsx';
import HeroBanner from '../HomePage/components/HeroBanner.jsx';
import Welcome from '../HomePage/components/Welcome.jsx';
import Slide from '../HomePage/components/SlideShowMain.jsx';
import Footer from '../../common/Footer.jsx'
////////=======ASKED TO REMOVED======
// import ChatBot from './components/ChatBot.jsx';
//<ChatBot />
////////=======ASKED TO REMOVED======

export default function Home() { 
   return (
    <div>
<NavBar />
<HeroBanner />
<Slide />
<Welcome />
<Footer />


   </div>
  )
}
