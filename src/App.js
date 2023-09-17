import React,{ useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Tudo from "./components/tudobox/Tudo";
import One from "./components/new/One";
import Header from "./components/new/Header";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//aos
import Aos from "aos";
import "aos/dist/aos.css";
import Button from './components/new/Button';

function App() {
  useEffect(()=>{
    Aos.init({ duration:1200});
},[]);
  return ( <>
{/* <Tudo/> */}


<BrowserRouter>
  <Header/>
  <Button/>
    <Routes>
      
        <Route index element={<One/>} />
        <Route path="/" element={<One />}/>
    </Routes>
  </BrowserRouter>,
  
  </>
  );
}

export default App;
