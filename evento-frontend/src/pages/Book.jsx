import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Book() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate success
    alert(`Booking successful for Event ID ${id}`);
    navigate('/success');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Book Event</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input type="text" value={form.name} required
            onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input type="email" value={form.email} required
            onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
