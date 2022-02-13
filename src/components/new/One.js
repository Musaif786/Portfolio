import React, { useState, useEffect } from "react";
import "../newCss/One.css";
import Contact from "./Contact";
import Register from "./Register";
import Footer from "./Footer";


function One() {

  useEffect(()=>{
   const imgFull =()=>{
     let img = document.querySelector(".about-img");
     img.addEventListener("click",()=>{
      //  img.style.height = "500px";
      img.classList.toggle("aboutImg");
     });
   }
   imgFull();
  },[])
  
  
  
  //const width = window.innerWidth;
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="h1-box" data-aos="zoom-in-down"
>
            <h1>
              Hi, I am <span>Mohammed Musaif</span> Full stack web developer & Mobile software Technician
            </h1>
          </div>
          <div className="img-box">
            <img
              src="https://source.unsplash.com/400x250/?computer/hacker"
              alt="auto/img"
            />
          </div>
        </div>

        <div id="about" className="about">
        
          <div className="about-h1" data-aos="zoom-in-down"
>
            <h1>About</h1>
          </div>
          <div className="about-container" data-aos="zoom-in-down"
>
            <div className="about-img">
              <img
                src="./images/musaif.jpg"
              alt="auto/img"
                alt="auto/img"
              />
            </div>
            <h3 data-aos="zoom-in-down">Mohammed Musaif</h3>
            <p data-aos="zoom-in-down"
>
             my name is Md Musaif. i'm from Hyderabad, telangana. i did my graduation in b.tech from CMR engineering college.
             <button ><a href="https://musaifresume.000webhostapp.com/">More</a></button>
            </p>
          </div>
        </div>

        <div id="skills" className="skills">
          <div className="about-h1" data-aos="zoom-in-down"
>
            <h1>Skills</h1>
          </div>
          <div className=" skills-container">
            <h3 data-aos="zoom-in-down" > professional skills </h3>
            <div className="progress-box">
              <progress
                data-aos="zoom-in-down"

                value="90"
                max="100"
              ></progress>
              <p>HTML</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="90"
                max="100"
              ></progress>
              <p>CSS</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="80"
                max="100"
              ></progress>
              <p>JavaScript</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="80"
                max="100"
              ></progress>
              <p>React-js</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="80"
                max="100"
              ></progress>
              <p>Bootstrap</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="80"
                max="100"
              ></progress>
              <p>Core Java</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="60"
                max="100"
              ></progress>
              <p>Firebase</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="40"
                max="100"
              ></progress>
              <p>basic Reactive-Native</p>
              <hr />
              <progress
                data-aos="zoom-in-down"

                value="50"
                max="100"
              ></progress>
              <p>Mysqli CRUD</p>
              <hr />
            </div>
          </div>
        </div>

        <div id="tools" className="Tools">
          <div data-aos="zoom-in-down"
 className="tools-h1">
            <h1>Tools</h1>
          </div>
          <div className="tools-container">
            <ol>
              <li data-aos="zoom-in-down"
>VSCode</li>
              <li data-aos="zoom-in-down"
>Eclipse</li>
              <li data-aos="zoom-in-down"
>Github</li>
            </ol>
          </div>
        </div>
        

        <div id="project" className="tools projects">
          <div data-aos="zoom-in-down"
 className="tools-h1 project-h1">
            {" "}
            <h1>Projects</h1>
          </div>
          <div className="projects">
            <div className="projects-imgs">
            <a href="https://zfwork.netlify.app/"> <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
 
                src="./images/Screenshot (39).png"
                alt="auto/img"
              /></a>

<a href="https://musaif-connecting-people.netlify.app/"> <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
 
                src="./images/Screenshot (35).png"
                alt="auto/img"
              /></a>


<a href="http://musaifofficial.000webhostapp.com/"> <img data-aos="zoom-in-down"
 
                src="./images/Screenshot (36).png"
                alt="auto/img"
              /></a>

<a href="https://musaif-database.netlify.app/"> <img data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
 
                src="./images/Screenshot (38).png"
                alt="auto/img"
              /></a>

<a href="http://musaifofficial.000webhostapp.com/"> <img data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
 
                src="./images/Screenshot (37).png"
                alt="auto/img"
              /></a>
              <a href="https://musaifresume.000webhostapp.com/"> <img data-aos="zoom-in-down"
 
                src="./images/Screenshot (40).png"
                alt="auto/img"
              /></a>


            </div>
          </div>
        </div>
    <div id="contact"  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <Register/>
    </div>

    <div id="footer" className="footer">
  <Footer/>
    </div>



        {/* <div className="tools contact">
        <div className="tools-h1"><h1>Contact</h1> </div>
        <div className="form-wrapper">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="name here" value={name} onChange={handleSubmit}/>

            <label htmlFor="name">Phone</label>
            <input type="number" name="phone" id="number" placeholder="number here" value={phone} onChange={handleSubmit}/>
            
            <label htmlFor="comment">Comment</label>
            <textarea name="comment" id="comment" cols="30" rows="10" placeholder="comment here" value={comment} onChange={handleSubmit}></textarea>
            
          </form>
        </div>

        </div> */}
      </main>
    </>
  );
}

export default One;
