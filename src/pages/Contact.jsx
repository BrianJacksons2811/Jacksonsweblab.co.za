import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e){
    setForm(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // Simple mailto fallback. Replace with API/Email service later.
    const body = encodeURIComponent(form.message + '\n\nFrom: ' + form.name + ' <' + form.email + '>')
    window.location.href = `mailto:jwadmin@jacksonsweblab.co.za?subject=Website enquiry&body=${body}`
    setStatus('Opening your email app…')
  }

  return (
    <div className="section">
      <h1>Get in Touch</h1>
      <p>We'd love to hear from you. Fill in the form or use the details below to connect with us.</p>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input className="input" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className="input" id="email" type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea className="input" id="message" rows="6" name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button className="btn primary" type="submit">Send Message</button>
        {status && <p className="small">{status}</p>}
      </form>

      <div className="grid" style={{marginTop:24}}>
        <div className="card">
          <h3>Contact Info</h3>
          <p className="small">Email: jwadmin@jacksonsweblab.co.za</p>
          <p className="small">Phone: +27 63 908 6636</p>
          <p className="small address">2341 Umphofu Street
Olievenhoutbosch Ext 15,
Centurion, Gauteng, 0157</p>
        </div>
        <div className="card">
          <h3>Connect with Us</h3>
          <ul className="small">
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter/X</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
