import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div>
          <h1>Launch Your<br/>Brand Into Orbit</h1>
          <p>Web design for bold brands that want to go beyond. We craft powerful digital experiences with cutting‑edge design, tech, and strategy — so your business stands out online.</p>
          <div className="cta">
            <Link to="/contact" className="btn primary">Get a Free Quote</Link>
            <Link to="/contact" className="btn ghost">Contact us</Link>
          </div>
        </div>
        <div className="card">
          <h3>Why Jacksonsweblab?</h3>
          <ul className="small">
            <li>✅ Custom design tailored to your brand</li>
            <li>✅ Built for speed, SEO, and conversions</li>
            <li>✅ Mobile‑first, modern, and scalable</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <article className="card"><h3>Web Design</h3><p>Custom, responsive, and SEO‑optimized designs that bring your brand to life online.</p></article>
          <article className="card"><h3>Web Maintenance</h3><p>We keep your site up‑to‑date, bug‑free, and running smoothly so you can focus on growth.</p></article>
          <article className="card"><h3>E‑commerce Solutions</h3><p>Scalable online stores designed to maximize conversions and drive sales.</p></article>
          <article className="card"><h3>Graphic Design</h3><p>Flyers, business cards, and more to make a lasting first impression.</p></article>
        </div>
      </section>

      <section className="section">
        <h2>Portfolio</h2>
        <p className="small">A showcase of flyers, social media posts, and other creative designs we’ve crafted.</p>
      </section>

      <section className="section">
        <h2>Testimonials</h2>
        <div className="grid">
          <blockquote className="testimonials">
            <p>“Superb service.. I promise you won't regret choosing them for the best service at a reasonable price. Best customer service. It's a 10/10”</p>
            <footer className="small">— prudie mois</footer>
          </blockquote>
          <blockquote className="testimonials">
            <p>“Brian service is very good. He created my website properly and within the timeline as discussed. He updated me with all the progress.”</p>
            <footer className="small">— Kgabo Pheme</footer>
          </blockquote>
          <blockquote className="testimonials">
            <p>“Received best service from jacksonsweblab and kept being updated that made me and my business feel like VIPs.”</p>
            <footer className="small">— Shihluke Tracy</footer>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Ready to bring your ideas to life?</h2>
          <p>Let's collaborate and take your business to the next level with stunning designs and powerful functionality.</p>
          <Link to="/contact" className="btn primary">Contact Us Today</Link>
        </div>
      </section>
    </div>
  )
}
