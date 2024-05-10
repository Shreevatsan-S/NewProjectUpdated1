import React, { useState, useEffect } from 'react';
import './assets/css/style.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PreviousEvents() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents(); // Fetch events when the component mounts
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('YOUR_BACKEND_PREVIOUS_EVENTS_API_ENDPOINT');
      if (response.ok) {
        const data = await response.json();
        setEvents(data.events); // Assuming your API response contains events array
      } else {
        throw new Error('Failed to fetch previous events');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="top">
      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <div className="all-events-text">
            <h2>Previous Events</h2>
          </div>
          <section className="event-section">
            {events.length === 0 && <p>No previous events yet.</p>}
            {events.map((event, index) => (
              <div className="event-box" key={index}>
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <p>About: {event.about}</p>
                  <p>Date: {event.date}</p>
                  <p>Time: {event.time}</p>
                  <p>Venue: {event.venue}</p>
                  {event.image && <img src={event.image} alt={`Event ${index + 1}`} style={{ width: '200px' }} />}
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
