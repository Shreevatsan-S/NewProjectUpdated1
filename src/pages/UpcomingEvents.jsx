import React, { useState } from 'react';
import './assets/css/style.css'; // Import your CSS file
import './assets/js/script.js';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';

function UpcomingEvents() {
  // Define state to hold events
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    name: '',
    about: '',
    date: '',
    time: '',
    venue: '',
    image: null, // To store the selected image
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

  // Function to handle image selection
  const handleImageChange = e => {
    const image = e.target.files[0];
    setNewEvent(prevEvent => ({
      ...prevEvent,
      image: URL.createObjectURL(image),
    }));
  };

  // Function to handle adding a new event
  const addEvent = () => {
    // Check if any of the fields are empty
    if (!newEvent.name || !newEvent.about || !newEvent.date || !newEvent.time || !newEvent.venue || !newEvent.image) {
      alert('Please fill in all fields and select an image.');
      return;
    }

    setEvents(prevEvents => [...prevEvents, newEvent]);
    setNewEvent({
      name: '',
      about: '',
      date: '',
      time: '',
      venue: '',
      image: null,
    });
  };

  return (
    <div id="top">
      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <div className="all-events-text">
            <h2>Upcoming Events</h2>
          </div>
          <div className="add-event-box-container" style={{ border: '2px solid purple', padding: '10px', width: '500px', height: 'auto', marginBottom: '5px' }}>
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
                    style={{ width: '300px', border: '1px solid black' }}
                  />
                </div>
                <div className="form-field">
                  <label>About:</label><br />
                  <input
                    type="text"
                    name="about"
                    value={newEvent.about}
                    onChange={handleChange}
                    style={{ width: '300px', border: '1px solid black' }}
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
                    style={{ width: '300px', border: '1px solid black' }}
                  />
                </div>
                <div className="form-field">
                  <label>Image:</label><br />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {newEvent.image && (
                    <img src={newEvent.image} alt="Event" style={{ width: '200px', marginTop: '10px' }} />
                  )}
                </div>
              </div><br />
              <button type="button" onClick={addEvent} style={{ backgroundColor: 'purple', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
                Save Event
              </button>
            </div>
          </div>
          <section className="event-section">
            {events.length === 0 && <p>No events yet.</p>}
            {events.map((event, index) => (
              <div className="event-box" key={index}>
                {event.image && <img src={event.image} alt={`Event ${index + 1}`} style={{ width: '200px' }} />}
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

export default UpcomingEvents;
