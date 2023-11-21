import React, { useEffect, useState } from 'react';
import getEvents from '../utils/data/eventData';
import EventCard from '../components/EventsCard';

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Assuming getEvents is a function to fetch events from an API
    getEvents().then((data) => setEvents(data));
  }, []);

  return (
    <article className="events">
      <h1>Events</h1>
      <div className="event-cards">
        {events.map((event) => (
          <EventCard
            key={`event--${event.id}`}
            game={event.game}
            description={event.description}
            date={event.date}
            time={event.time}
            organizer={event.organizer}
          />
        ))}
      </div>
    </article>
  );
}

export default EventsPage;
