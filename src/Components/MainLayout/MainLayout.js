import React from "react";
import './MainLayout.css'
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import SehriIftar from "../TimeTable/SehriIftar";
import JanuaryTimeTable from "../TimeTable/JanuaryTimeTable";
import SelectMonthTT from "../TimeTable/SelectMonthTT";
import FebruaryTimeTable from "../TimeTable/FebruaryTimeTable";
import AprilTimeTable from "../TimeTable/AprilTimeTable";
import MayTimeTable from "../TimeTable/MayTimeTable";
import JuneTimeTable from "../TimeTable/JuneTimeTable";
import JulyTimeTable from "../TimeTable/JulyTimeTable";
import ShabeBarat from "../ShabeBarat/ShabeBarat";
import SelectMonthSI from "../TimeTable/SelectMonthSI";
import Ramzan from "../RamzanulMubarak/Ramzan";
import ShabeQadr from "../ShabeQadr/ShabeQadr";
import EsaleSawab from "../EsaleSawab/EsaleSawab";
import EidulAdha from "../EidulAdha/EidulAdha";
import AalaHazrat from "../AalaHazrat/AalaHazrat";
import Wuzu from "../Wuzu/Wuzu";
import QuranShareef from "../QuranShareef/QuranShareef";
import MarchTimeTable from "../TimeTable/MarchTimeTable";
import AugustTimeTable from "../TimeTable/AugustTimeTable";
import SepTimeTable from "../TimeTable/SepTimeTable";
import OctTimeTable from "../TimeTable/OctTimeTable";
import NovTimeTable from "../TimeTable/NovTimeTable";
import DecTimeTable from "../TimeTable/DecTimeTable";
import JanuarySehriIftaar from "../TimeTable/SehriIftaar/JanuarySehriIftaar";
import FebruarySehriIftaar from "../TimeTable/SehriIftaar/FebruarySehriIftaar";
import MarchSehriIftaar from "../TimeTable/SehriIftaar/MarchSehriIftaar";
import AprilSehriIftaar from "../TimeTable/SehriIftaar/AprilSehriIftaar";
import MaySehriIftaar from "../TimeTable/SehriIftaar/MaySehriIftaar";
import JuneSehriIftaar from "../TimeTable/SehriIftaar/JuneSehriIftaar";
import JulySehriIftaar from "../TimeTable/SehriIftaar/JulySehriIftaar";
import AugustSehriIftaar from "../TimeTable/SehriIftaar/AugustSehriIftaar";
import SeptemberSehriIftaar from "../TimeTable/SehriIftaar/SeptemberSehriIFtaar";
import OctoberSehriIftaar from "../TimeTable/SehriIftaar/OctoberSehriIftaar";
import NovemberSehriIftaar from "../TimeTable/SehriIftaar/NovemberSehriIftaar";
import DecemberSehriIftaar from "../TimeTable/SehriIftaar/DecemberSehriIftaar";
import RamzanCalendar from "../RamzanCalendar/RamzanCalendar";

const MainLayout = ({isClass, setClassName}) => {
    return (
        <>
          <div className={`MainLayout ${isClass ? 'nav-slided' : ''}`}>
            <Sidebar isClass={isClass} setClassName={setClassName} />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/selectmonthtt' element={<SelectMonthTT />} />
              <Route path='/selectmonthsi' element={<SelectMonthSI />} />
              <Route path='/sehriIftar' element={<SehriIftar />} />
              <Route path='/januarytimetable' element={<JanuaryTimeTable />} />
              <Route path='/februarytimetable' element={<FebruaryTimeTable />} />
              <Route path='/marchtimetable' element={<MarchTimeTable />} />
              <Route path='/apriltimetable' element={<AprilTimeTable />} />
              <Route path='/maytimetable' element={<MayTimeTable />} />
              <Route path='/junetimetable' element={<JuneTimeTable />} />
              <Route path='/julytimetable' element={<JulyTimeTable />} />
              <Route path='/augusttimetable' element={<AugustTimeTable />} />
              <Route path='/septembertimetable' element={<SepTimeTable />} />
              <Route path='/octobertimetable' element={<OctTimeTable />} />
              <Route path='/novembertimetable' element={<NovTimeTable />} />
              <Route path='/decembertimetable' element={<DecTimeTable />} />
              <Route path='/januarysehriiftaar' element={<JanuarySehriIftaar /> } />
              <Route path='/februarysehriiftaar' element={<FebruarySehriIftaar /> } />
              <Route path='/marchsehriiftaar' element={<MarchSehriIftaar /> } />
              <Route path='/aprilsehriiftaar' element={<AprilSehriIftaar /> } />
              <Route path='/maysehriiftaar' element={<MaySehriIftaar />} />
              <Route path='/junesehriiftaar' element={<JuneSehriIftaar /> } />
              <Route path='/julysehriiftaar' element={<JulySehriIftaar /> } />
              <Route path='/augustsehriiftaar' element={<AugustSehriIftaar /> } />
              <Route path='/septembersehriiftaar' element={<SeptemberSehriIftaar /> } />
              <Route path='/octobersehriiftaar' element={<OctoberSehriIftaar /> } />
              <Route path='/novembersehriiftaar' element={<NovemberSehriIftaar /> } />
              <Route path='/decembersehriiftaar' element={<DecemberSehriIftaar /> } />
              <Route path='/shabebarat' element={<ShabeBarat />} />
              <Route path='/ramzanulmubarak' element={<Ramzan />} />
              <Route path='/shabeqadr' element={<ShabeQadr />} />
              <Route path='/esalesawab' element={<EsaleSawab />} />
              <Route path='/ramzancalendar' element={<RamzanCalendar />} />
              
              <Route path='/eiduladha' element={<EidulAdha />} />
              <Route path='/aalahazrat' element={<AalaHazrat /> } />
              <Route path='/wuzukabayan' element={<Wuzu />} />
              <Route path='/quranShareefPadhneKiFazilat' element={<QuranShareef />} />
              
              <Route path="/*" element={<Navigate to ="/" />}  />
           </Routes>
          </div>
        </>
    )
}

export default MainLayout;