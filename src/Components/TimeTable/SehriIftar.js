import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import './TimeTable.css'

const SehriIftar = () => {
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
    name:'Khatm-E-Saher',
    selector:row => row.sfks
  },
  {
    name:'Waqt-E-Iftaar',
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
         title='SehriIftar' 
         fixedHeader 
         fixedHeaderScrollHeight='450px'
         selectableRowsHighlight  
         highlightOnHover
        //  actions={
        //   <button className='customBtn'>Export</button>
        //  }
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

export default SehriIftar