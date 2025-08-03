import EventCard from '../components/EventCard';

const events = [
  { id: '1', title: 'Tech Conference 2025', date: '2025-09-10', description: 'Learn from top tech leaders.' },
  { id: '2', title: 'Music Festival', date: '2025-10-05', description: 'Enjoy live music and good vibes.' },
  { id: '3', title: 'Art Expo', date: '2025-11-20', description: 'Explore modern art exhibits.' },
];

export default function Events() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upcoming Events</h2>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
