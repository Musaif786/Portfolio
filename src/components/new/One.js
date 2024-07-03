import React, { useState, useEffect } from "react";
//import Resume from '../../../public/images/myresume.pdf'
import "../newCss/One.css";
import Contact from "./Contact";
import Register from "./Register";
import Footer from "./Footer";

function One() {

  const [randomPhoto, setRandomPhoto] = useState('');
  useEffect(() => {
    const imgFull = () => {
      let img = document.querySelector(".about-img");
      img.addEventListener("click", () => {
        //  img.style.height = "500px";
        img.classList.toggle("aboutImg");
      });
    };
    imgFull();

    const fetchRandomPhoto = async () => {
      
      const apiKey = 'wCYj8T5TMJgfkOjU4GohaXhPTR4ivnanIoRM64SolxQ'; // Replace with your actual API key
      const apiUrl = 'https://api.unsplash.com/photos/random';
      

      try {
          const response = await fetch(apiUrl, {
              headers: {
                  'Authorization': `Client-ID ${apiKey}`
              }
          });

          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setRandomPhoto(data.urls.regular);
      } catch (error) {
          console.error('Error fetching random photo:', error);
      }
  };

  fetchRandomPhoto();

  }, []);

  //const width = window.innerWidth;
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="h1-box" data-aos="zoom-in-down">
            <h1>
              Hi, I am <span>Mohammed Musaif</span> Full stack React developer &
              splunk admin/ Developer at solugenix india
            </h1>
          </div>
          <div className="img-box">
            <img
              src={randomPhoto}
              alt="Auto/img"
            />
          </div>
        </div>

        <div id="about" className="about">
          <div className="about-h1" data-aos="zoom-in-down">
            <h1>About</h1>
          </div>
          <div className="about-container" data-aos="zoom-in-down">
            <div className="about-img">
              <img src="./images/musaif.jpg" alt="auto/img" />
            </div>
            <h3 data-aos="zoom-in-down">Mohammed Musaif</h3>
            <p data-aos="zoom-in-down">
              I am Musaif, a dedicated and skilled programmer with a
              strong educational foundation. I completed my graduation in 2021,
              and since then, I've been on a journey to excel in the world of
              software development. My passion for coding, problem-solving, and
              continuous learning drives my pursuit of excellence in the field.
              <button>
                {/* <a href="https://musaifresume.000webhostapp.com/">More</a> */}
                {/* download btn */}
              <a href='./images/Musaif-Resume-D.pdf' download='resume.pdf'>Download</a>
              </button>
            </p>
          </div>
        </div>

        <div id="skills" className="skills">
          <div className="about-h1" data-aos="zoom-in-down">
            <h1>Skills</h1>
          </div>
          <div className="skills-container">
            <h3 data-aos="zoom-in-down"> Professional skills </h3>
            <div className="progress-box">
              <progress data-aos="zoom-in-down" value="90" max="100" ></progress>
              <p>HTML</p>
              <hr />
              <progress data-aos="zoom-in-down" value="90" max="100"></progress>
              <p>CSS</p>
              <hr />
              <progress data-aos="zoom-in-down" value="80" max="100"></progress>
              <p>JavaScript</p>
              <hr />
              <progress data-aos="zoom-in-down" value="80" max="100"></progress>
              <p>React-js</p>
              <hr />
              <progress data-aos="zoom-in-down" value="80" max="100"></progress>
              <p>Bootstrap</p>
              <hr />
              <progress data-aos="zoom-in-down" value="80" max="100"></progress>
              <p>Core Java</p>
              <hr />
              <progress data-aos="zoom-in-down" value="70" max="100"></progress>
              <p>Python</p>
              <hr />
              <progress data-aos="zoom-in-down" value="80" max="100"></progress>
              <p>Firebase</p>
              <hr />
              <progress data-aos="zoom-in-down" value="40" max="100"></progress>
              <p>basic Reactive-Native</p>
              <hr />
              <progress data-aos="zoom-in-down" value="50" max="100"></progress>
              <p>Mysqli CRUD</p>
              <hr />
              <progress data-aos="zoom-in-down" value="70" max="100"></progress>
              <p>Mongoose</p>
              <hr />
              <progress data-aos="zoom-in-down" value="60" max="100"></progress>
              <p>Express</p>
              <hr />
              <progress data-aos="zoom-in-down" value="70" max="100"></progress>
              <p>Terraforn</p>
              <hr />
              <progress data-aos="zoom-in-down" value="60" max="100"></progress>
              <p>Ansible</p>
              <hr />
            </div>
          </div>
        </div>

        <div id="tools" className="Tools">
          <div data-aos="zoom-in-down" className="tools-h1">
            <h1>Tools</h1>
          </div>
          <div className="tools-container">
            <ol>
              <li data-aos="zoom-in-down">VSCode</li>
              <li data-aos="zoom-in-down">Eclipse</li>
              <li data-aos="zoom-in-down">Github</li>
            </ol>
          </div>
        </div>

        <div id="project" className="tools projects">
          <div data-aos="zoom-in-down" className="tools-h1 project-h1">
            {" "}
            <h1>Projects</h1>
          </div>
          <div className="projects">
            <div className="projects-imgs">
              <p data-aos="zoom-in-down">
                Below are the projects which are created and developed by
                Musaif. by click on the photo you will redirect to main website.
                aliquam possimus dolorum recusandae laudantium assumenda
                incidunt veritatis sint vitae.
              </p>
              <a href="https://zfwork.netlify.app/">
              
                {" "}
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src="./images/Screenshot (39).png"
                  alt="auto/img"
                />
              </a>

              <a href="https://musaifchat.netlify.app/">
                {" "}
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src="./images/Screenshot (35).png"
                  alt="auto/img"
                />
              </a>

              <a href="http://musaifofficial.000webhostapp.com/">
                {" "}
                <img
                  data-aos="zoom-in-down"
                  src="./images/Screenshot (36).png"
                  alt="auto/img"
                />
              </a>
              <a href="https://musaifapi.netlify.app">
                {" "}
                <img
                  data-aos="zoom-in-down"
                  src="./images/apiwebsite.png"
                  alt="auto/img"
                />
              </a>
              <a href="https://musaif-database.netlify.app/">
                {" "}
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src="./images/Screenshot (38).png"
                  alt="auto/img"
                />
              </a>

              <a href="http://musaifofficial.000webhostapp.com/">
                {" "}
                <img
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src="./images/Screenshot (37).png"
                  alt="auto/img"
                />
              </a>
              <a href="https://musaifresume.000webhostapp.com/">
                {" "}
                <img
                  data-aos="zoom-in-down"
                  src="./images/Screenshot (40).png"
                  alt="auto/img"
                />
              </a>
              <a href="https://musaif-ads.netlify.app/">
                {" "}
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  src="./images/chatwebsite.png"
                  alt="auto/img"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          id="contact"
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Register />
        </div>

        <div id="footer" className="footer">
          <Footer />
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
