import React, { useEffect, useState } from "react";
import "../newCss/Header.css";
import {useLocation , Link} from 'react-router-dom';

function Header() {

 const location = useLocation();
 // console.log(location);

 const getColor = (current)=>{
  if(location.hash === current){
    return "1px solid purple"
  }
 }

  const toggleBtn =()=>{
    let btn = document.querySelector(".header-btn");
   let ul = document.querySelector("ul");
   let up = document.querySelector("#up");
   let down = document.querySelector("#down");

   ul.classList.toggle("openbar");
         up.classList.toggle("openbar");
         down.classList.toggle("openbar");

  //  btn.addEventListener("click", ()=>{
  //        //ul.style.display = "block";
  //        ul.classList.toggle("openbar");
  //        up.classList.toggle("openbar");
  //        down.classList.toggle("openbar");


  //       })
    
  }

  useEffect(()=>{
    // toggleBtn();
  });

  return (
    <>
      <header>
        <div onClick={toggleBtn} className="header-box">
          <div className="logo">
            <h1>Musaif</h1>
          </div>
          <div className="header-list">
            <ul>
              <li>
                <a href="#home" style={{borderBottom:getColor("#home")}}>Home</a>
              </li>
              <li>
                <a href="#about" style={{borderBottom:getColor("#about")}}>About</a>
              </li>
              <li>
                <a href="#skills" style={{borderBottom:getColor("#skills")}}>Skills</a>
              </li>
              <li>
                <a href="#tools" style={{borderBottom:getColor("#tools")}}>Tools</a>
              </li>
              <li>
                <a href="#project" style={{borderBottom:getColor("#project")}}>Work</a>
              </li>
              <li>
                <a href="#contact" style={{borderBottom:getColor("#contact")}}>Contact</a>
              </li>
            </ul>
          </div>
          <div className="header-btn">
            <button>
            <i id="down" class="fa fa-sort-desc" aria-hidden="true"></i>
            <i id="up" class="fa fa-sort-asc" aria-hidden="true"></i>

            </button>
          </div>
        </div>
        {/* <hr className="header-hr" /> */}
      </header>
    </>
  );
}

export default Header;
