import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🎉 Evento - Event Booking</h1>
        <p>Find and book events effortlessly!</p>
      </header>

      <main>
        <section className="event-list">
          <h2>Upcoming Events</h2>

          <div className="event-card">
            <h3>Tech Conference 2025</h3>
            <p>Date: 25th August 2025</p>
            <p>Location: Hyderabad</p>
            <button>Book Now</button>
          </div>

          <div className="event-card">
            <h3>Music Festival</h3>
            <p>Date: 10th September 2025</p>
            <p>Location: Bangalore</p>
            <button>Book Now</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

