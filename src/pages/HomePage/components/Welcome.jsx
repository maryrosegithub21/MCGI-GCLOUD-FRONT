
// === To applied the style you have to import this === //
import styles from './Welcome.module.css'
// === To applied the style you have to import this === //

// === Import Photos from the folder=== //
import creativity from '../../../assets/home/free1.png'
import critical from '../../../assets/home/free2.png'
import communication from '../../../assets/home/free3.png'
import technology from '../../../assets/home/free4.png'

import classroom from '../../../assets/hero/legacy.png'

// ===== FOR SHOWING THE PROGRAMMES HELPS TEACHER AND SCHOOL === //
import { useState } from 'react'
import { useEffect } from 'react'
// import { FaBullseye } from 'react-icons/fa6'

import Register from './Register';
// import PropTypes from 'prop-types'; // Import PropTypes

// Welcome.propTypes = {
//   welcomeRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({ current: PropTypes.instanceOf(Element) })
//   ]),
//   // Add prop types for other props here
//   // For example:
//   // someProp: PropTypes.string,
//   // anotherProp: PropTypes.number,
//   // isSomething: PropTypes.bool,
//   // anArrayProp: PropTypes.arrayOf(PropTypes.string),
//   // anObjectProp: PropTypes.shape({
//   //   prop1: PropTypes.string,
//   //   prop2: PropTypes.number
//   // })
// };
// for showing the sign up or log in form

export default function Body2() {
 
  //  ==== FOR HOW THE PROGRAMMES HELPS TEACHER AND SCHOOL==== ///
  const [learningPathways, setLearningPathways] = useState(true)
  const [digitalTechnologies, setDigitalTechnologies] = useState(false)
  const [keycompetencies, setKeycompetencies] = useState(false)
  const [ir, setIr] = useState(false)
  const [showForm, setShowForm] = useState(false); // State for modal visibility


  // const navigate = useNavigate(); 


  function handleClickKeyCompetencies() {
    setKeycompetencies(true); 
  }
  function handleClickLearningPathways(){
    setLearningPathways(true)
  }
  
  function handleClickDigitalTechnologies(){
    setDigitalTechnologies(true)
  }

  function handleClickIr(){
    setIr(true)
  }

// keycompetencies
  useEffect(() => {
    console.log(keycompetencies);
    console.log(learningPathways);
    console.log(digitalTechnologies);
    console.log(ir);
  
    if(keycompetencies === true) {
      setKeycompetencies(true)
      setDigitalTechnologies(false)
      setLearningPathways(false)
      setIr(false)
     }  
  }, [keycompetencies])

// learning pathways
  useEffect(() => {
    console.log(keycompetencies);
    console.log(learningPathways);
    console.log(digitalTechnologies);
    console.log(ir);
    if(learningPathways === true) {
      setLearningPathways(true)
      setKeycompetencies(false)
      setDigitalTechnologies(false)
      setIr(false)
    }
  },[learningPathways])

  // digital technologies 
  useEffect(() => {
    console.log(keycompetencies);
    console.log(learningPathways);
    console.log(digitalTechnologies);
    console.log(ir);
    if(digitalTechnologies === true) {
      setLearningPathways(false)
      setKeycompetencies(false)
      setDigitalTechnologies(true)
      setIr(false)
    }
  },[digitalTechnologies])

// IR4.0
  useEffect(() => {
    console.log(keycompetencies);
    console.log(learningPathways);
    console.log(digitalTechnologies);
    console.log(ir);
  
    if(ir === true) {
      setKeycompetencies(false)
      setDigitalTechnologies(false)
      setLearningPathways(false)
      setIr(true)
     }  
  }, [ir])
 

// ===== FOR SIGN UP BUTTON ===== //
const [isSignUpClass, setIsSignUpClass] = useState(false);
function handleClicksignUpClass(e) {
  e.preventDefault();
  setShowForm(true); // Show the modal when the button is clicked
}

const handleCloseModal = () => {
  setShowForm(false); // Hide the modal when closed
};

useEffect(() => {
  console.log(isSignUpClass);
  if(isSignUpClass === true) {
    setIsSignUpClass(true)
    } 
  
}, [isSignUpClass]) 
// ===== FOR SIGN UP BUTTON ===== //


  return (
    <div>
       <div className={styles.parentDivBody2MRA}>
       <h2 id="event" className={styles.childH2Body2MRA}>Feast Dedicated to God</h2>
    <div className={styles.childDivImageBody2MRA}>
      <img className={styles.imgCreativity}src={creativity} alt="creativity" ></img>
       <img className={styles.imgCritical}src={critical} alt="critical" ></img>
       <img className={styles.imgCommunication}src={communication} alt="communication" ></img>
       <img className={styles.imgTechnology}src={technology} alt="technology" ></img>
    </div>
    <div className={styles.childDivBody2MRA}>
    <button id="welcome-our-beliefs" onClick={handleClickLearningPathways}  className={styles.LearningPathwaysButtonBody2MRA}>
    Our Beliefs
    </button>
    <button onClick={handleClickDigitalTechnologies}  className={styles.DigitalTechnologiesButtonBody2MRA}>
      About Bro. Eli
    </button>
    <button onClick={handleClickKeyCompetencies} className={styles.KeyCompetenciesButtonBody2MRA}>
      About Bro Daniel
    </button>
    <button onClick={handleClickIr} className={styles.IR4ButtonBody2MRA}>
    Church Services
    </button>
    </div>

    {/*  ==== For Fifth Row on the page start from banner the enchance competencies and description === */}

  {/*=================== Church Doctrines ========= */}
  {learningPathways &&  <div className={styles.childEnchanceDivBody2MRA}>
<h1>Church Doctrines</h1>

<div className={styles.descriptionEnchanceBody2MRA}>
<p className={styles.descriptionEnchancePBody2MRA}>The Members Church of God International (MCGI) adheres to its faith and principle that all its doctrines must come solely from the Lord Jesus Christ. <br/> <br/>
An indoctrination is an intensive study of Christian doctrines that come directly from the Bible. An aspiring member must complete all indoctrination sessions to be eligible for baptism and officially become a part of the Church. <br/> <br/>
Through the indoctrination sessions, an aspiring member will learn God’s fundamental commandments preached by our Lord Jesus Christ and His apostles. The aspirant will also be oriented about the Christian way of living being strictly followed inside the congregation. The idea of God’s words being preached first to a person before receiving baptism stems from the biblical principle that faith comes from hearing the words of God (Rom 10:17).. <br/> <br/>
Aspirants who wholeheartedly believe and willingly submit to all the Christian doctrines that they heard during the indoctrination sessions can undergo baptism, the spiritual event that marks a person’s official membership to the Church and the start of their service to God. To inquire about Indoctrination session schedules and other related concerns, you may send an email to info@mcgi.org.
</p>

</div>

    </div> }
    {/*=================== Church Doctrines ========= */}


 {/*=================== Bro. Eli Soriano ========= */}
 {digitalTechnologies &&  <div className={styles.childEnchanceDivBody2MRA}>
<h1>Bro. Eli Soriano</h1>

<div className={styles.descriptionEnchanceBody2MRA}>
<p className={styles.descriptionEnchancePBody2MRA}>Bro. Eliseo F. Soriano, a multi-awarded international evangelist and host of the longest-running religious program in the Philippines, “Ang Dating Daan,” (The Old Path), was a Servant of the religious organization Members Church of God International (MCGI)...
<br/> <br/> 
Born on April 4, 1947, Bro. Eli is the second to the youngest among the eight children of Bro. Triunfo Soriano and Sis. Catalina Fernando.  Basically, he was a very shy lad that whenever visitors would come to their house he would readily ran inside their bedroom and hide under a bed.  It was also because of his shyness that, even when he reached school age, he was still hesitant to attend school. In fact, it was only during the time when his youngest sister (Sis. Beth) was about to pursue her first grade in school that Bro. Eli finally decided to go to school, but still without the enthusiasm and excitement normally seen among first graders.  He would rather stay home than mingle with other people. There was even an instance when, on their way to school, he deliberately slid himself on a swamp, making his uniform wet and dirty. That way he now had a reason to go back home and not attend school anymore. But this was not for long. When he realized that students who performed well in class were being awarded with medals at the end of a school year, Bro. Eli started to take his studies seriously.  He then excelled in all his subjects, he became president of their student council, and was a consistent top-notch in class.
<br/> <br/> 
A couple of months before his graduation in high school Bro. Eli felt that fervent desire to read the Bible, immediately right after his parents tagged him along in a worship service. 
<br/>  <br/> 
On April 7, 1964, Bro. Eli was baptized in the Iglesia ng Dios kay Kristo Hesus, Haligi at Suhay ng Katotohanan (Church of God in Christ Jesus, Pillar and Support of the Truth), which at that time was headed by Bro. Nicolas Perez.  He was barely seventeen years old then. Eventually, he became a regular worker in the Church. Because of the zealousness and passion that he displayed in learning more about the word of God, in addition to his dedication in performing his duties as a worker, he became Bro. Perez’s protégé.  He had been tasked to conduct Bible Studies and to represent the Church in debates against other religious denominations. Years after, from being an ordinary worker, Bro. Eli had been appointed as a church minister.
<br/> <br/> 
When Bro. Nicolas Perez died in 1975, there developed a schism in the Church that resulted to three factions.  Of the three groups, only Bro. Eli’s group flourished and grew in number tremendously.
<br/> <br/> 
In 1977, Bro. Eli registered with the Securities and Exchange Commission the Mga Kaanib sa Iglesia ng Dios kay Kristo Hesus, Haligi at Saligan ng Katotohanan sa Pilipinas (Members, Church of God in Christ Jesus, Pillar and Ground of the Truth in the Philippines).  However, due to its growing membership and chapters, not only in the Philippines but in other countries as well, the Church had been renamed and re-registered as Members, Church of God International (MCGI).
<br/> <br/> 
Since he became a preacher, there had never been an idle day for Bro. Eli.  Each day he had a schedule of Bible Study, which in the 1980’s was called Grand Pulong, whose concentration is mostly in the province of Pampanga.  After several years of preaching in Pampanga, without being able to cover even half of the province, Bro. Eli saw the need to use the broadcast media to reach more and more people.
<br/> <br/>
In 1980, the radio program “Ang Dating Daan” (The Old Path) was first heard over DWWA 1206 Khz.  Later on, several other local radio stations, like DWAR, DZME, DZMB, DWAD, DZRD, DWAN, and DZXQ likewise aired the program.  Seeing the positive results that the radio broadcasts yielded, Bro. Eli also decided to use television in propagating the word of God.
<br/> <br/>
It was in 1983 that the program “Ang Dating Daan” was aired on television via IBC-13.  But when other religious organizations, whose programs are also being aired on the said channel, saw how their respective doctrines are being shattered by the Biblical truths that Bro. Eli was preaching, they connived and pressured the network’s management to cancel Bro. Eli’s program.  Hence, the program moved from one channel to another.
<br/> <br/>
Until, finally, in 2004, “Ang Dating Daan” and the other programs of Bro. Eli like “Truth in Focus” and “Itanong mo Kay Soriano” found a new and permanent home – UNTV 37.
<br/> <br/>
Due to religious persecution Bro. Eli was forced to leave the Philippines in 2005.  He left the country with a very heavy heart – he didn’t want to leave his loved ones especially his brethren in the Church.  But eventually, he realized that what happened to him was a God-given opportunity for him to be able to fulfill His admonition to make disciples in all nations.  He started preaching the Gospel in different parts of the globe; he held Bible Expositions in foreign lands – addressing people of different races and different tongues.  And with God’s help, all these efforts resulted to the conversion of many souls and the formation of more international chapters of the Church.
<br/> <br/>
Bro. Eli is utilizing all avenues available to make the word of God known to all men.  In the Philippines, aside from UNTV 37, “Ang Dating Daan” is also being aired in Radyo La Verdad 1350Khz.  And with the advent of the digital age, he has also used different social media platforms such as Facebook and YouTube to expose erroneous doctrines of other religions, to preach the good news of salvation, and to lead more and more people back to God.
<br/> <br/>
Despite his fame and stature in the religious arena, Bro. Eli continues to live a simple and austere life.  He works to earn a living; he does not burden the brethren in the Church for his day to day subsistence. And unlike other preachers, Bro. Eli never, and will never, make religion and the word of God a kind of commodity or business.  He remains to be a humble and faithful servant of God and of our Lord Jesus Christ.
<br/> <br/>
After holding two consecutive Bible Expositions in one day, God gave Bro. Eliseo Fernando Soriano his well-deserved rest on February 10, 2021 in Brazil, but in the Philippines, it was already February 11.
<br/> <br/>
An outpouring of sentiments and expressions of love and respect came in from people from all walks of life and various religions — from those who constantly listened to The Old Path program, to the local and national government officials, up to the president of the nation.
<br/> <br/>
Up to the last moments of his life, Bro. Eli was able to fulfill his vow to the Almighty that manifests in his love to serve the brethren. “And I will very gladly spend and be spent for you; though the more abundantly I love you, the less I be loved” (2 Cor. 12:15). And as Bro. Eli once said: “To be privileged to serve you in Christ is the greatest opportunity in life.”
</p>
</div>

    </div> }
    {/*=================== Bro. Eli Soriano ========= */}



    {/*=================== Bro. Daniel Razon========= */}
  {keycompetencies &&  <div className={styles.childEnchanceDivBody2MRA}>
<h1>Bro. Daniel Razon</h1>
<div className={styles.descriptionEnchanceBody2MRA}>
<p className={styles.descriptionEnchancePBody2MRA}>Beyond being a broadcast journalist and prominent television and radio personality, Bro. Daniel S. Razon acts as Overall Servant of the Members Church of God International (MCGI).
<br/> <br/>
Bro. Daniel is fondly called by many as “Kuya Daniel” and “Mr. Public Service,” inspired by the works and innovations he has pioneered that are centered on helping the public, especially the marginalized members of society. “Kuya” is “Big Brother” in English.
<br/> <br/>
He was born in Bulacan on October 11, 1967. Growing up, he was guided by his parents, Brother Dan and Sister Beth Razon, and his uncle Bro. Eli Soriano, Overall Servant of MCGI. At a young age, he was exposed to public speaking when he performed poem recitals, Bible verse reading, speeches in Church and in school, as well as Bible preaching.
<br/> <br/>
As Servant of the MCGI
<br/> <br/>
Although he once aspired to be a doctor, Bro. Daniel walked a different career path when he took up Mass Communications in college as advised by Bro. Eli. It proved useful when Bro. Eli started preaching on radio and television through the program Ang Dating Daan (The Old Path), now widely recognized as the longest-running religious television program in the Philippines.
<br/> <br/>
In 1986, Bro. Daniel finished his degree in Bachelor of Arts in Mass Communications major in Broadcasting at the Centro Escolar University. Alongside his studies and, later on, his professional career in mass media, he played a significant part as the director and executive producer of Ang Dating Daan. Since then, he has been helping Bro Eli in the overall propagation and broadcast efforts of the Church which have now reached many countries.
<br/> <br/>
He first served as a Regular Worker in the Church and was eventually delegated as the Officer-In-Charge for the Metro Manila Division. In 1997, he was officially elected as the Vice Presiding Minister to assist Bro. Eli in leading the activities and propagation endeavors of the Church, as well as to attend to the overall spiritual, physical, and mental welfare of the brethren.
<br/> <br/>
Bro. Daniel founded many of MCGI’s ministries and committees, such as the Music Ministry, the “Teatro Kristiano” theater group, and MCGI Youth (formerly KKTK or Kapisanan ng mga Kabataan Tungo sa Kasakdalan) and many others.
<br/> <br/>
He is also active in forming media partnerships to help the Church spread the gospel worldwide.
<br/> <br/>
He likewise co-founded the Bible Readers (BRead) Society International, a non-profit, non-sectarian youth organization that promotes Bible reading primarily among students and other members of the academe. Other groups in MCGI that Bro. Daniel established include the Church’s photographers’ pool known as Photoville International, ADD Productions, and the Church’s ushering team called Guest Coordinators (GCOS).
<br/> <br/>
Bro. Daniel, together with Bro. Eli, also conceptualized various activities that are aimed at edifying the brethren, like the A Song Of Praise (ASOP) Music Festival, International Youth Convention, Couples’ Conventions, and Music Ministry and Theatre Summits, among others.
<br/> <br/>
The putting up of the Church’s renowned Worldwide Bible Expositions were also spearheaded by Bro. Daniel. This gathering, regularly held by MCGI in the Philippines and abroad, invites visitors from all walks of life to ask questions about faith and spirituality. They are given answers straight from the Bible through MCGI’s Overall Servant, Bro. Eli Soriano. Visitors attending at any MCGI remote point across the globe are able to participate via satellite and the internet. Bro. Daniel co-hosts the symposium, including those which are centered in Spanish- and Portuguese-speaking countries in the Latin Americas.
<br/> <br/>
Bro. Daniel regularly visits MCGI Coordinating Centers in the Philippines and in other countries to personally see the brethren and look after their condition and well-being. His visits are usually coinciding with Thanksgiving gatherings and other special events.
<br/> <br/>
As a Broadcast Journalist
<br/> <br/>
Bro. Daniel’s professional career in media and communications started right after he finished his undergraduate studies in 1986. From 1987 to 1988, he worked as an FM disc jockey at DZRH and DWST on the radio airwaves. Though prior to this, he already did disc jockey stints at GV 99.1 in Angeles, Pampanga, and at KYFM.
<br/> <br/>
He shifted to television in 1992, first as the host of People’s Television Network’s (PTV 4) “Pandayan ni Mang Pandoy.” From then on, Bro. Daniel had various stints in the country’s network giants, ABS-CBN and GMA, as a host and newscaster.
<br/> <br/>
In 2004, he was entrusted to lead the television channel, UNTV 37. He then established media company Breakthrough and Milestones Productions International (BMPI) as a content provider and marketing firm of the channel. This marked the beginning of the many innovations at the local television channel both in broadcasting and public service through Bro. Daniel as CEO and President. Among these is UNTV’s “Tulong Muna, Bago Balita” (Rescue First, Report Later) advocacy, launched in 2010, which encourages media practitioners to prioritize helping people in times of accidents and disasters. Bro. Daniel also pioneered the use of drones in broadcast journalism in the Philippines and the radio station-on-wheels of UNTV’s AM station Radyo La Verdad 1350 kHz and FM station Wish 107.5.
<br/> <br/>
The religious programs of MCGI, “Ang Dating Daan” and “Itanong Mo Kay Soriano”, are being broadcast in the station, as well as in UNTV Radyo La Verdad 1350 kHz.
<br/> <br/>
As a Public Servant
<br/> <br/>
His being the Assistant Overall Servant of the Members Church of God International and a media personality, Bro. Daniel earned the moniker “Mr. Public Service” for his innovations and undertakings that are intended to help, not just the poor and the marginalized, but all people.
<br/> <br/>
Among the main philanthropic projects of Bro. Daniel include the charity basketball league UNTV Cup and the free educational institution La Verdad Christian College.
<br/> <br/>
UNTV, in partnership with MCGI’s Kamanggagawa Foundation Inc. and ADD Foundation Inc., also conducts regular medical, dental, and legal missions in different barangays in the Philippines.
<br/> <br/>
Bro. Daniel also provides public service through UNTV programs “Serbisyong Kasangbahay” and “Munting Pangarap.” FM station Wish 107.5, a brainchild of Bro. Daniel, also has a one-of-a-kind feature of granting wishes and requests of its listeners. The station’s Wish Music Awards also gives monetary donations to charitable institutions, which were chosen awardees.
</p>


</div>

    </div> }
    {/*=================== Bro Daniel ========= */}



    {/*=================== Church Services and Events========= */}
    {ir &&  <div className={styles.childEnchanceDivBody2MRA}>
<h1>Church Services and Events</h1>
<div className={styles.descriptionEnchanceBody2MRA}>
<p className={styles.descriptionEnchancePBody2MRA}>The Members Church of God International (MCGI) offers services that are based on the doctrines of the Lord Jesus Christ. Members attend gatherings prescribed by the Holy Bible. Visitors are welcome to attend gatherings in any of our coordinating centers and locale churches around the world.
<br/> <br/>
Hebrews 10:24-25
And let us consider one another to provoke unto love and to good works: Not forsaking the assembling of ourselves together, as the manner of some is; but exhorting one another: and so much the more, as ye see the day approaching.
<br/> <br/>
Worship Service
<br/> <br/>
It is a regular Church gathering held on the first day of each week. This service includes the singing of hymns, Bible reading, and studying of a biblical topic (1 Corinthians 16:2). At present, the Worship Service is broadcast via satellite and video streaming at 4:30 am, Philippine time.
<br/> <br/>
Prayer Meeting
<br/> <br/>
It is a mid-week Church service that was intended for praying at first. Today, the gathering follows the setup of the Worship Service (1 Corinthians 16:2). The topic discussed in the Worship Service is continued in the Prayer Meeting. This gathering is also broadcast live via satellite and video streaming at 4:30 am of Wednesday, Philippine time.
<br/> <br/>
Both the Worship Service and Prayer Meeting are streamed for reruns in different schedules.
<br/> <br/>
Weekly Thanksgiving of God’s People
<br/> <br/>
This is a weekend celebration of thanksgiving to God and the Lord Jesus Christ (Colossians 3:15). Members offer their Thanksgiving song before the congregation (Psalms 107:22; 116:14). Presentations are done in groups: Group Celebrants, Newly Baptized brethren, Kawan ng Cordero (Flock of Lambs) and Whole Congregation. A biblical topic is discussed during the celebration. The weekly Thanksgiving is held live every Saturday at 5 p.m., Philippine time.
<br/> <br/>
Special Thanksgiving of God’s People
<br/> <br/>
The Special Thanksgiving of God’s People is a quarterly event where brethren offer thanksgiving to God as a nation (Jeremiah 30:19, Colossians 3:15). Before the global pandemic, members travel to major venues worldwide to celebrate the event altogether (Zechariah 8:21). It is held for three consecutive days (Exodus 5:3) with offerings of Thanksgiving songs and discussions of special biblical topics.
<br/> <br/>
One-Day Special Thanksgiving of God’s People
<br/> <br/>
This celebration is held one week after the Special Thanksgiving of God’s People. Its purpose is to thank God for the special wisdom He gave to the congregation during the three-day Special Thanksgiving (Psalms 50:23). The event follows the setup of the Weekly Thanksgiving of God’s People.
<br/> <br/>
Christian New Year
<br/> <br/>
The Christian New Year celebrates the biblical new year based on the Hebrew calendar (Exodus 12:2). Members gather to study a biblical topic and offer thanksgiving, with songs and prayers to the Almighty Father for another year He has given them.
<br/> <br/>
Lord’s Supper
<br/> <br/>
The Lord’s Supper is an annual tribute to Christ’s selfless act of love for mankind (1 Corinthians 11:20, 24). This service is held every 13th of Nisan of the Hebrew Calendar.
<br/> <br/>
Feast Dedicated to God (Fiesta ng Dios)
<br/> <br/>
This is a joyous event for both Church members and visitors, especially the poor and the disabled, who are the feast’s special guests (Luke 14:13-14). They are treated to free meals as well as other fun activities. It is a feast that honors God Almighty above all.
Gatherings dedicated to the learning of the doctrines and beliefs observed by Members Church of God International
<br/> <br/>
Mass Indoctrination
<br/> <br/>
The Mass Indoctrination is a series of sessions where the doctrines of the Lord Jesus Christ are learned. It is for those who would like to become members of the Church. Baptism follows when all sessions are completed and a person accepts the teachings of Christ. (Matthew 28:19-20).
<br/> <br/>
Worldwide Bible Exposition
<br/> <br/>
This is a unique question-and-answer program that gives answers to questions about life, religion, and faith (1 Samuel 9:9, 1 Peter 3:15, Haggai 2:11). The event is presented in many languages and is broadcast via satellite and in various social media platforms.
<br/> <br/>
Worldwide Bible Study
<br/> <br/>
It is a biblical talk which aims to help people learn the Bible deeper through an assigned topic (Isaiah 34:16, Revelations 1:3). It focuses on guiding people to understand the Bible and correct false concepts about the Holy Scriptures.
 </p>

</div>

    </div> }
    {/*=================== Church Services and Events========= */}
    {/*  ^^^ For Fifth Row on the page start from banner the enchance competencies and description ^^^ */}


<div className={styles.classDivConatinerBody2MRA}>
          <img className={styles.classRoomPhoto} src={classroom} alt="classroom" />
          <div className={styles.classroomInquiryBody2RightMRA}>
            <h1 className={styles.waitingH1}>The Legacy Continues</h1>
            <br />
            <br />
            <h2 className={styles.startH1}>
              Know more about the charity works of the Members Church of God International.
            </h2>
            <br />
            <br />
            <p className={styles.informationP}>
              If you need more information, we are happy to answer any questions you may have.
            </p>

            <div className={styles.btnDivBody2classroomMRA}>
              <button
                type="button"
                onClick={handleClicksignUpClass}
                className={styles.SignUpButtonBody2MRA}
              >
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </div>

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
    </div>
  );
}
