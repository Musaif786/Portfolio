import React, { useEffect } from "react";
import "../newCss/Header.css";

function Header() {

  const toggleBtn =()=>{
    let btn = document.querySelector(".header-btn");
   let ul = document.querySelector("ul");
   let up = document.querySelector("#up");
   let down = document.querySelector("#down");

   btn.addEventListener("click", ()=>{
         //ul.style.display = "block";
         ul.classList.toggle("openbar");
         up.classList.toggle("openbar");
         down.classList.toggle("openbar");


        })
    
  }

  useEffect(()=>{
    toggleBtn();
  })
  return (
    <>
      <header>
        <div className="header-box">
          <div className="logo">
            <h1>Musaif</h1>
          </div>
          <div className="header-list">
            <ul>
              <li>
                {" "}
                <a href="#home">Home</a>{" "}
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#tools">Tools</a>
              </li>
              <li>
                <a href="#project">Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
