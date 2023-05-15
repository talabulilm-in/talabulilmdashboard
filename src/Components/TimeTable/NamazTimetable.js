import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component'

import axios from 'axios';
import './TimeTable.css'

const NamazTimetable = () => {

  const[search, setSearch] = useState("");
  const[times, setTimes] = useState([]);
  const[filtertimes, setFilterTimes] = useState([]);

  const getTime = async () =>{
      try {
        const response = await axios.get('https://talabulilm.in/getData.php?slimit=269&elimit=299')
        setTimes(response.data)
        setFilterTimes(response.data)
      } catch (error) {
        console.log(error)
      }
  };
const columns = [
  {
    name:'Date',
    selector:row => row.date,
    sortable:true
  },
  {
    name:'Shuru-E-Fajr/Khatm-E-Saher',
    selector:row => row.sfks
  },
  {
    name:'Khatm Fajr/Tulu Aftab',
    selector:row => row.gawi
  },
  {
    name:'Shuru Zohar/Zawal Aftab',
    selector:row => row.sfks
  },
  {
    name:'Khatm Zohar/Shuru Asar',
    selector:row => row.gawi
  },
  {
    name:'Ghuroob Aftab/Waqt Iftar',
    selector:row => row.sfks
  },
  {
    name:'Khatm Maghrib/Shuru Isha',
    selector:row => row.gawi
  }
  // {
  //   name:'Actions',
  //   cell:row=><button className='customBtn' onClick={()=>{alert(row.kfta);}}>Edit</button>
  // }
]

useEffect(()=> {
  getTime();
},[])

useEffect(()=>{
 const result = times.filter(time => {
  return time.date.toLowerCase().match(search.toLowerCase());
 });
 setFilterTimes(result)
},[search])
  return (
    <div className='contain'>
        <DataTable 
         columns={columns} 
         data={filtertimes} 
         pagination 
         title='Namaz TimeTable' 
         fixedHeader
         fixedHeaderScrollHeight='460px'
         selectableRowsHighlight  
         highlightOnHover
        //  subHeader
        //  subHeaderComponent = {
        //   <input 
        //    type='text' 
        //    placeholder="Search here..." 
        //    value={search}
        //    onChange={(e)=>setSearch(e.target.value)}
           
        //   />
        //  }
        
         />
    </div>
  )
}

export default NamazTimetable;