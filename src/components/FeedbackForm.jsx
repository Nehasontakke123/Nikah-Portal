import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/CSS/FeedbackForm.css'

const FeedbackForm = () => {
  const [formData, setFormData] = useState({ name: '', message: '', rating: 5 });
  const [feedbacks, setFeedbacks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get('http://localhost:7001/api/blogs');
      setFeedbacks(res.data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      if (editingId) {
        await axios.put(`http://localhost:7001/api/blogs/${editingId}`, formData);
        setSuccess('Feedback updated successfully!');
        setEditingId(null);
      } else {
        await axios.post('http://localhost:7001/api/blogs', formData);
        setSuccess('Feedback submitted successfully!');
      }
      setFormData({ name: '', message: '', rating: 5 });
      fetchFeedbacks();
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Try again!');
    }
  };

  const handleEdit = (fb) => {
    setFormData({ name: fb.name, message: fb.message, rating: fb.rating });
    setEditingId(fb._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:7001/api/blogs/${id}`);
      fetchFeedbacks();
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete feedback.');
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-form-container">
  <h2 className="form-heading">
    {editingId ? 'Edit Feedback ✏️' : 'Share Your Feedback 💌'}
  </h2>
  <form onSubmit={handleSubmit} className="feedback-form">
    <input
      type="text"
      name="name"
      placeholder="Your name"
      value={formData.name}
      onChange={handleChange}
      required
      className="form-input"
    />
    <textarea
      name="message"
      placeholder="Your message"
      value={formData.message}
      onChange={handleChange}
      required
      rows="4"
      className="form-input"
    />
    <input
      type="number"
      name="rating"
      min="1"
      max="5"
      value={formData.rating}
      onChange={handleChange}
      className="form-input"
    />
    <button type="submit" className="submit-button">
      {editingId ? 'Update Feedback' : 'Submit Feedback'}
    </button>
  </form>

  {success && <p className="success-text">{success}</p>}
  {error && <p className="error-text">{error}</p>}

  <hr className="divider" />

 <h3 className="feedbacks-heading">Latest Feedbacks 📝</h3>
{feedbacks.length > 0 ? (
  <div className="feedback-scroll-wrapper">
    {feedbacks.map((fb) => (
      <div key={fb._id} className="feedback-card">
        <strong>{fb.name}</strong> ({fb.rating}/5)
        <p>{fb.message}</p>
        <small>{new Date(fb.createdAt).toLocaleString()}</small>
        <div className="button-group">
          <button onClick={() => handleEdit(fb)} className="edit-button">Edit</button>
          <button onClick={() => handleDelete(fb._id)} className="delete-button">Delete</button>
        </div>
      </div>
    ))}
  </div>
) : (
  <p>No feedback yet!</p>
)}

</div>

  );
};

export default FeedbackForm;
