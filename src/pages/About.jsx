import React from 'react'

export default function About(){
  return (
    <div className="section">
      <h1>About Us</h1>
      <p>We’re a team of passionate innovators who blend creativity, technology, and strategy to bring your business’s digital future to life.</p>

      <div className="grid" style={{marginTop:16}}>
        <section className="card">
          <h2>Who We Are</h2>
          <p>We specialize in designing, developing, and growing digital spaces that help businesses connect with their customers in a powerful and impactful way. Our team collaborates closely with you to bring your unique vision to life.</p>
        </section>
        <section className="card">
          <h2>Our Mission</h2>
          <p>To empower businesses to reach their full potential online by delivering bespoke digital solutions that reflect their goals and values.</p>
        </section>
      </div>

      <div className="section">
        <h2>Meet The Team</h2>
        <div className="grid">
          <div className="card">
            <h3>Brian Mkhwanazi</h3>
            <p>Web designer/developer</p>
          </div>
          <div className="card">
            <h3>Pontsho Mashava</h3>
            <p>Lead social media marketing</p>
          </div>
        </div>
      </div>
    </div>
  )
}
