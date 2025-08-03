import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{event.title}</h3>
      <p><strong>Date:</strong> {event.date}</p>
      <p>{event.description}</p>
      <Link to={`/book/${event.id}`}>
        <button style={{ padding: '0.5rem', background: '#007bff', color: 'white', border: 'none' }}>Book Now</button>
      </Link>
    </div>
  );
}
