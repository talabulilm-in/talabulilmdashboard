import logo from './logo.svg';
import './App.css';
import TopHeader from './Components/TopHeader/TopHeader';
import Layout from './Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const[isClass, setClass] = useState();
  
  // useEffect(() => {
  //   document.body.classList.toggle('active', isClass)},[isClass]);
  const setClassName = () =>{
    if(window.innerWidth < 993){
      setClass(!isClass);
    }
  }

  return (
    <div className={`container ${isClass ? 'nav-slided' : ''}`}>
      <BrowserRouter>
         <Layout setClassName={setClassName}  isClass={isClass} />
      </BrowserRouter>
      
    </div>
  );
}
export default App;







// import React, { createContext, useEffect, useState } from 'react' 
// import CustomTopbar from './CustomTopbar' 
// import CustomLayout from './Layout/CustomLayout' 
// function MainLayouts() { 
//   const [isClass, setClassName] = useState(); 
//   useEffect(() => { 
//     document.body.classList.toggle('modal-open', isClass); },[isClass]);
//      const SetClass = () => { 
//       if(window.innerWidth < 769){
//          setClassName(!isClass); } }
//           return ( <>
//            <CustomTopbar isClass={isClass} SetClass={SetClass} /> 
//            <CustomLayout isClass={isClass} SetClass={SetClass} />
//             </> 
//             ) 
//           }
//            export default MainLayouts