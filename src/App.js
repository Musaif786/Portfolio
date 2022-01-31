import React,{ useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Tudo from "./components/tudobox/Tudo";
import One from "./components/new/One";
import Header from "./components/new/Header";

//aos
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    Aos.init({ duration:1200});
},[]);
  return ( <>
{/* <Tudo/> */}

  <Header/>
<One/>
  
  </>
  );
}

export default App;
