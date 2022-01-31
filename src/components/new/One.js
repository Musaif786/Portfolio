import React, { useState } from "react";
import "../newCss/One.css";
import Contact from "./Contact";
import Register from "./Register";


function One() {

  
  
  //const width = window.innerWidth;
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="h1-box" data-aos="fade-down-left">
            <h1>
              Hi, I am <span>Mohammed Musaif</span> Full stack web developer{" "}
            </h1>
          </div>
          <div className="img-box">
            <img
              src="./images/musaif.jpg"
              alt="auto/img"
            />
          </div>
        </div>

        <div id="about" className="about">
        
          <div className="about-h1" data-aos="fade-down-left">
            <h1>About</h1>
          </div>
          <div className="about-container" data-aos="fade-down-right">
            <div className="about-img">
              <img
                src="./images/musaif.jpg"
              alt="auto/img"
                alt="auto/img"
              />
            </div>
            <h3>Moahmmed Musaif</h3>
            <p data-aos="fade-down-left">
              I'm 23 year's old i graduated in Mechanical Engineer at CMR
              Engineering College and i'm from Banjara hills Hyderabad India
            </p>
          </div>
        </div>

        <div id="skills" className="skills">
          <div className="about-h1" data-aos="fade-down-left">
            <h1>Skills</h1>
          </div>
          <div className=" skills-container">
            <h3> professional skills </h3>
            <div className="progress-box">
              <progress
                data-aos="fade-down-left"
                value="90"
                max="100"
              ></progress>
              <p>HTML</p>
              <hr />
              <progress
                data-aos="fade-down-right"
                value="90"
                max="100"
              ></progress>
              <p>CSS</p>
              <hr />
              <progress
                data-aos="fade-down-left"
                value="80"
                max="100"
              ></progress>
              <p>JavaScript</p>
              <hr />
              <progress
                data-aos="fade-down-right"
                value="80"
                max="100"
              ></progress>
              <p>React-js</p>
              <hr />
              <progress
                data-aos="fade-down-left"
                value="80"
                max="100"
              ></progress>
              <p>Bootstrap</p>
              <hr />
              <progress
                data-aos="fade-down-right"
                value="80"
                max="100"
              ></progress>
              <p>Core Java</p>
              <hr />
              <progress
                data-aos="fade-down-left"
                value="60"
                max="100"
              ></progress>
              <p>Firebase</p>
              <hr />
              <progress
                data-aos="fade-down-right"
                value="40"
                max="100"
              ></progress>
              <p>basic Reactive-Native</p>
              <hr />
              <progress
                data-aos="fade-down-left"
                value="50"
                max="100"
              ></progress>
              <p>Mysqli CRUD</p>
              <hr />
            </div>
          </div>
        </div>

        <div id="tools" className="Tools">
          <div data-aos="fade-down-left" className="tools-h1">
            <h1>Tools</h1>
          </div>
          <div className="tools-container">
            <ol>
              <li data-aos="fade-down-right">VSCode</li>
              <li data-aos="fade-down-right">Eclipse</li>
              <li data-aos="fade-down-right">Github</li>
            </ol>
          </div>
        </div>

        <div id="project" className="tools projects">
          <div data-aos="fade-down-left" className="tools-h1 project-h1">
            {" "}
            <h1>Projects</h1>
          </div>
          <div className="projects">
            <div className="projects-imgs">
            <a href="https://zfwork.netlify.app/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (39).png"
                alt="auto/img"
              /></a>

<a href="https://musaif-connecting-people.netlify.app/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (35).png"
                alt="auto/img"
              /></a>


<a href="http://musaifofficial.000webhostapp.com/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (36).png"
                alt="auto/img"
              /></a>

<a href="https://musaif-database.netlify.app/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (38).png"
                alt="auto/img"
              /></a>

<a href="http://musaifofficial.000webhostapp.com/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (37).png"
                alt="auto/img"
              /></a>
              <a href="https://musaifresume.000webhostapp.com/"> <img data-aos="fade-down-left" 
                src="./images/Screenshot (40).png"
                alt="auto/img"
              /></a>


            </div>
          </div>
        </div>
    <div id="contact">
      <Register/>
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
