import React, { useState } from 'react';
import './assets/css/style.css'; // Import your CSS file
import './assets/js/script.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';

function PreviousEvents() {
  // Define state to hold events
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    about: '',
    date: '',
    time: '',
    venue: '',
    image: '', // Add image field to newEvent state
  });
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle input change
  const handleChange = e => {
    const { name, value } = e.target;
    setNewEvent(prevEvent => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  // Function to handle adding a new event
  const addEvent = () => {
    // Check if any of the fields are empty
    if (!newEvent.name || !newEvent.about || !newEvent.date || !newEvent.time || !newEvent.venue) {
      alert('Please fill in all fields.');
      return;
    }

    setEvents(prevEvents => [...prevEvents, newEvent]);
    setNewEvent({
      name: '',
      about: '',
      date: '',
      time: '',
      venue: '',
      image: '', // Reset image field after adding the event
    });
  };

  return (
    <div id="top">
      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <div className="all-events-text">
            <h2>Previous Events</h2>
          </div>
          <div className="add-event-box-container" style={{ border: '2px solid purple', padding: '10px', width: '500px', height: '400px', marginBottom: '5px' }}>
            <div className="add-event-box">
              <h3>Add Event</h3>
              <div className="form-fields">
                <div className="form-field">
                  <label>Event Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={newEvent.name}
                    onChange={handleChange}
                    style={{ width: '300px', border: '1px solid black' }} // Set the width here and default border
                  />
                </div>
                <div className="form-field">
                  <label>About:</label><br />
                  <input
                    type="text"
                    name="about"
                    value={newEvent.about}
                    onChange={handleChange}
                    style={{ width: '300px', border: '1px solid black' }} // Set the width here and default border
                  />
                </div>
                <div className="form-field">
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={newEvent.date}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>Time:</label>
                  <input
                    type="time"
                    name="time"
                    value={newEvent.time}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>Venue:</label>
                  <input
                    type="text"
                    name="venue"
                    value={newEvent.venue}
                    onChange={handleChange}
                    style={{ width: '300px', border: '1px solid black' }} // Set the width here and default border
                  />
                </div>
                <div className="form-field">
                  <label>Image:</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleChange}
                  />
                </div>
              </div><br />
              <button type="button" onClick={addEvent} style={{ backgroundColor: 'purple', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                Save Event
              </button>
            </div>
          </div>
          <section className="event-section">
            {events.map((event, index) => (
              <div className="event-box" key={index}>
                <img src={event.image} alt={`Event ${index + 1}`} />
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <p>About: {event.about}</p>
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Venue: {event.venue}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </div>
  );
}

export default PreviousEvents;
