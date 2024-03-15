// Form.js
import React, { useState } from 'react';
import './Form.css'; // Import CSS file for styling

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any action you want with the form data, like submitting it to a server
    console.log('Form submitted with data:', formData);
    // Optionally, you can clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      contact: ''
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>SELF-FORM</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
      <label htmlFor="contact">contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
}

export default Form;
