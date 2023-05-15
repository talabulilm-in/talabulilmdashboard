import React, { useEffect, useState } from "react";
import './Dashboard.css';
import { BsMoonStars } from "react-icons/bs";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
const Dashboard = () => {
const current = new Date();
const datemonth = `${current.getDate()}-0${current.getMonth()-21}`;
const date = `${current.getDate()}-0${current.getMonth()+1}-${current.getFullYear()}`;

const onlydate = `${current.getDate()}`;
console.log(onlydate);
const urduDate = Number(onlydate)-21;
const locale = 'en';
const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
const currenttime = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
const[times,setTimes] = useState([]);
const getTime = async () =>{
try {
const response = await axios.get('https://talabulilm.in/getData.php?slimit=1&elimit=359')
setTimes(response.data)
} catch (error) {
console.log(error)
}
};
useEffect(() => {
getTime();
},[])
const [updatedDt, setDt] = useState(new Date().toLocaleString());
useEffect(() => {
let secTimer = setInterval( () => {
setDt(new Date().toLocaleString())
},1000)
return () => clearInterval(secTimer);
}, []);
const timeWithSecond = updatedDt.substring(10);
return (
<>
<div className="Dashboard contain">
   {/* <img src={heroimg} alt='heroimg' width='100%' height='100%' /> */}
   <h1>Today's Time Table</h1>
   <p>Lucknow, Uttar Pradesh, INDIA</p>
   <div className="dashboard-header-section__tt">
      <div className="header-section__timetable">
         <div className="date">
            <IoCalendarNumberOutline />
            <span>{date} {timeWithSecond}</span>
         </div>
         <div className="urdu-date">
            <BsMoonStars />
            <span> {urduDate} Shawwal-Ul-Mukarram 1444 </span>
         </div>
      </div>
   </div>
   {times.map((items)=>{
   return(
   <>
   {datemonth===items?.date && (
   <div className="timetableData">
      <div className="timetableData__item">
         <span className="timetableData__item--first">Shuru-E-Fajr/Khatm-E-Saher</span>
         <span className="timetable-dots">:</span>
         <span>{items.sfks}</span>
      </div>
      <div className="timetableData__item">
         <span className="timetableData__item--first">Khatm-E-Fajr/Tulu-E-Aftab </span>
         <span className="timetable-dots">:</span>
         <span> {items.kfta}</span>
      </div>
      <div className="timetableData__item">
         <span className="timetableData__item--first">Shuru-E-Zohar/Zawal-E-Aftab</span>
         <span className="timetable-dots">:</span>
         <span> {items.szza}</span>
      </div>
      <div className="timetableData__item">
         <span className="timetableData__item--first">Khatm-E-Zohar/Shuru-E-Asar</span>
         <span className="timetable-dots">:</span>
         <span> {items.kzsa}</span>
      </div>
      <div className="timetableData__item">
         <span className="timetableData__item--first">Ghuroob-E-Aftab/Waqt-E-Iftar</span>
         <span className="timetable-dots">:</span>
         <span> {items.gawi}</span>
      </div>
      <div className="timetableData__item">
         <span className="timetableData__item--first">Khatm-E-Maghrib/Shuru-E-Isha</span>
         <span className="timetable-dots">:</span>
         <span>{items.kmsi}</span>
      </div>
   </div>
   )}
   </>
   )
   })}
   <div className="dash-btn-container">
      <Link to='../apriltimetable'>
      <button className="btn-btn-primary">View Monthly</button>
      </Link>
   </div>
</div>
<div className="contain">
   <div className="subGrid-section">
      <div className="subGrid-section__first">
         {/* Wuzu ka bayan */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               Wuzu ka Bayan
            </h2>
            <p className="contentSection_title--content">
               wuzu me 4 faraiz hain.
            </p>
            <ul className="contenetList">
               <li>1. Chehra Dhona </li>
               <li>2. Kohniyo'n samet dono hatho ko dhona</li>
               <li>3. Chauthai (1/4) sar ka masah karna</li>
               <li>4. Takhno samet dono paao (पाँव) ko dhona.</li>
            </ul>
            <div className="dash-btn-container">
               <Link to='wuzukabayan'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
         {/* Quran Shareef padhne ki fazilat */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               Quran Shareef Padhne Ki Fazilat
            </h2>
            <p className="contentSection_title--content">
               “ Rozana Quran-E-Azeem ki tilawat kiya karo isliye ke
               Hadees Shareef me Aaya hai Rasool Allah صَلَّى اللَّهُ عَلَيْهِ وَسَلَّم ne farmaya Quran padha karo isliye ke 
               ye Quran qayamat ke din Quran padhne walo ki shafa'at karega.
            </p>
            <span className="referenceTag">[ Muslim Shareef : 804 ]</span>
            <p className="contentSection_title--content">
               Hazrat Ayesha Siddiqa radiallahu anha riwayat karti hai ke NABI-E-KAREEM صَلَّى اللَّهُ عَلَيْهِ وَسَلَّم ne farmaya,
               Quran ka mahir moazzaz wa mohtaram farishto aur 
               moazzam wa mukarram Ambiya ke sath hoga aur wo shakhs jo....
            </p>
            <div className="dash-btn-container">
               <Link to='quranShareefPadhneKiFazilat'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
         {/* Shabe Barat ki Fazilat */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               Shabe Barat ki Fazilat
            </h2>
            <p className="contentSection_title--content">
               Huzur Nabi-E-Kareem صَلَّى اللَّهُ عَلَيْهِ وَسَلَّم ne irshad farmaya ki : “ Allah Paak Shaban ki 15vi shab 
               me apni tamam makhlooq ki taraf nazre rahmat farmata
               hai fir Mushrik aur (musalman se ) Dushmani rakhne wale ke
               siwa sari makhlooq ki maghfirat farma deta hai. ”
            </p>
            <span className="referenceTag">[ Ibne Majah : 1390 ]</span>
            <p className="contentSection_title--content">
               Shabe Barat ke bare me ye kahna bilkul galat hai ki iski koi fazilat hadees se sabit nahi hai, haqeeqat ye
               hai ki 10 صحابہ کرام رضوان اللہ علیہم اجمعین se ahaadees marwi hain, jisme
               Nabi kareem صَلَّى اللَّهُ عَلَيْهِ وَسَلَّم ne is raat ki fazilat bayan farmayi, unme se...
            </p>
            <div className="dash-btn-container">
               <Link to='shabebarat'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
         {/* Eid-ul-Adha */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               EID-UL-ADHA
            </h2>
            <h3 className="contentSection_subtitle">QURBAANI KA BAYAAN</h3>
            <p className="contentSection_title--content">
               Qurbaani hazrat saiyyiduna ibaraheem عليه السلام ki sunnat hai jo is ummat ke
               liye baaqi rah gayi aur nabi صلى الله تعالى علي ه وسلم ko qurbaani karne ka 
               hukm diya gaya irshad farmaya ّفَصَل لِرَبِّكَ وَانْحَر‌ْ Tum apne rabb ke liye namaz padho
               aur qurbaani karo.
            </p>
            <span className="referenceTag">[ Surah Al-Kausar aayat no. 2 ]</span>
            <h3 className="contentSection_subtitle">AHAADEES E KAREEMA</h3>
            <p className="contentSection_title--content">
               (1) ummul mumineen hazrat aaishah siddiaqa رضى الله تعالى عنها se riwayat hai
               keh huzur e aqdas صلى الله تعالى عليه وسلم ne irs had farmaya keh yaumunnahar 
               (daswen zilhijjah) me ibn e aadam ka koi amal khuda ke nazdeek khoon bahane 
               ( qurbaani karne) se ziyadah piyaara nahi aur oh jaanwar qiyaamat ke din apne 
               sing aur baal aur khuron ke saath aayega aur qurbaani ka khoon zmeen par girne se 
               qabl khuda ke nazdeek maqaam e qubool me pahunch jaata hai lihaza is ko....
            </p>
            <div className="dash-btn-container">
               <Link to='eiduladha'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
         {/* AALA HAZRAT */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               AALA HAZRAT
            </h2>
            <h3 className="contentSection_subtitle">Imam Ahmad Raza Khan Barelvi Rahmatullāhi Alaihi</h3>
            <h4 className="contentSection_subheading">Alqaab:</h4>
            <p className="contentSection_title--content">
               Aa’la Hazrat, Mujaddid E Deen O Millat, Imam E Ahle Sunnat,Imam E Ishqo Muhabbat,Kanzul Karamat,
               Azeem Ul Barkat, Faazil E Bareilwi.
            </p>
            <h4 className="contentSection_subheading">Aala Hazrat Ki Wiladat:</h4>
            <p className="contentSection_title--content">
               Aap Ki Wilaadat 10 Shawwaal 1272 Hijri (14 June 1856 A.D.) Ko Barely Shareef 
               (Uttar Pradesh) Me Hui.
            </p>
            <div className="dash-btn-container">
               <Link to='aalahazrat'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
         {/* SAJDA E TILAWAT */}
         <div className="contentSection">
            <h2 className="contentSection_title">
               Sajda-E-Tilaawat Ka Bayaan
            </h2>
            <h3 className="contentSection_subtitle">Qur’an Majeed me 14 aayaten aisi hain ke us 
               aayat ki tilaawat karne ya sunne se Sajda e Tilaawat karna waajib hota hai.
            </h3>
            <h4 className="contentSection_subheading">Sajda-E-Tilawat Kise Kahte hain....?</h4>
            <p className="contentSection_title--content">
               Jab Quran Me Koi Ayat Aisi Aati hai Jisme Ki Allah Ne Sajda Karne Ka hukm Dia ho Us Ayat 
               ko Ayaate Sajda Kehte hain Quraan Me Aisi Ayaaten Kul 14 Jagah hai Aur Sajde ki Pahli
               Ayat 9 me Paare me hai.   
            </p>
            <p className="contentSection_title--content">
               Sajda-e-Tilawat Kaise Kare..? Sadae-e-Tilawat Usi Tarah kia Jaata hai Jaisa ki hum Namaz 
               Me Sajde kerte hain Par Isme Sirf Yeh Fark hai ki Isme Aapko Sirf Ek Sajda karna hai Aur 
               Namaz me 2 Sajde hote hain.
            </p>
            <div className="dash-btn-container">
               <Link to='aalahazrat'>
               <button className="btn-btn-secondary">Read More</button>
               </Link>
            </div>
         </div>
      </div>
      <div className="subGrid-section__second">
         <div className="waqiaat">
            <h3 className="contentSection_subtitle ml-20">Sabaq Aamoz waqiaat</h3>
            <div className="waqiaat--section">
               <marquee direction="up" >
                  <ul>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                     <a href="google.com">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     </a>
                  </ul>
               </marquee>
            </div>
         </div>
      </div>
   </div>
</div>
</>
)
}

export default Dashboard;