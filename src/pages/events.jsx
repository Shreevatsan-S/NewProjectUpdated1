import React, { useState, useEffect } from 'react';
import './assets/css/style.css'; // Import your CSS file
import './assets/js/script.js';

// Import SVG (use it as a component)
import { ReactComponent as MySVG } from '../pages/faxicon.svg';

function PreviousEvents() {
  // Define state to hold events
  const [events, setEvents] = useState([]);

  // Fetch events data (replace this with your actual data fetching logic)
  useEffect(() => {
    // Fetch events data here and set it to the state
    // Example:
    const fetchedEvents = [
      { name: 'Previous Event 1', about: 'About Previous Event 1', date: new Date('2024-05-01'), time: '10:00 AM', venue: 'Venue 1' },
      { name: 'Previous Event 2', about: 'About Previous Event 2', date: new Date('2024-05-05'), time: '11:00 AM', venue: 'Venue 2' },
      { name: 'Previous Event 3', about: 'About Previous Event 3', date: new Date('2024-05-10'), time: '12:00 PM', venue: 'Venue 3' },
    ];
    setEvents(fetchedEvents);
  }, []);

  // Filter previous events based on current date
  const currentDate = new Date();
  const previousEvents = events.filter(event => event.date <= currentDate);

  return (
    <div id="top">
      <section className="section event" id="event" aria-label="event">
        <div className="container">
          <div className="all-events-text">
            <h2>Previous Events</h2>
          </div>
          <section className="event-section">
            {previousEvents.map((event, index) => (
              <div className="event-box" key={index}>
                <img alt={`Event ${index + 1}`} />
                <div className="event-info">
                  <h3>{event.name}</h3>
                  <p>About: {event.about}</p>
                  <p>Date: {event.date.toLocaleDateString()}</p>
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
