import React from 'react'
import './assets/css/style.css'; // Import your CSS file
import './assets/js/script.js';

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';
function Events(){
    return(
        <div id="top">
        <section className="section event" id="event" aria-label="event">
          <div className="container">
            <div className="all-events-text">
              <h2>Previous-events</h2>
            </div>
            <section className="event-section">
              <div className="event-box">
              <img src= {require("./images/Competitions 2011A/20110808b_007105002_eenadu.jpg")}
                  alt="Event 1"/>
                <div className="event-info">
                <h3>Name:</h3>
                  <p>About:</p>
                 <p>Date:</p>
                 <p>Time:</p>
                 <p>Venue:</p>
                </div>
              </div>
              <div className="event-box">
                <img src={require("./images/Competitions 2012A/D25772974.JPG")} alt="Event 2"/>
                <div className="event-info">
                <h3>Name:</h3>
                  <p>About:</p>
                 <p>Date:</p>
                 <p>Time:</p>
                 <p>Venue:</p>
                </div>
              </div>
              <div className="event-box">
                <img src={require("./images/Competitions 2018/PrajaaSakthi.jpg")} alt="Event 3"/>
                <div className="event-info">
                <h3>Name:</h3>
                  <p>About:</p>
                 <p>Date:</p>
                 <p>Time:</p>
                 <p>Venue:</p>
                </div>
              </div>
              <div className="event-box">
                <img src={require("./images/Competitions 2023/Sakshi 01-05-2023 Competition 2023.jpg")} alt="Event 3"/>
                <div className="event-info">
                <h3>Name:</h3>
                  <p>About:</p>
                 <p>Date:</p>
                 <p>Time:</p>
                 <p>Venue:</p>
                </div>
              </div>
              <div className="event-box">
                <img src={require("./images/Competitions 2023/Andhra Jyothi 01-05-2023 Competition 2023.jpg")} alt="Event 3"/>
                <div className="event-info">
                  <h3>Name:</h3>
                  <p>About:</p>
                 <p>Date:</p>
                 <p>Time:</p>
                 <p>Venue:</p>
                </div>
              </div>
              
            </section>
            
      
            
          </div>
        </section>
      
      
      </div>
    )
}
export default Events
