import React from 'react'

const items = [
  { title: 'Website Development & Design', text: 'Fully responsive sites built from scratch using HTML, CSS, JavaScript or WordPress.' },
  { title: 'Graphic Design', text: 'Creative assets like flyers, social media posts, business cards and logos.' },
  { title: 'E-commerce Solutions', text: 'Scalable online stores designed to maximize conversions and drive sales.' },
  { title: 'Website Maintenance', text: 'Ongoing updates, backups, and security checks so your site runs smoothly.' },
]

export default function Services(){
  return (
    <div className="section">
      <h1>What We Offer</h1>
      <p>Crafted with creativity, backed by code.</p>
      <div className="grid" style={{marginTop:16}}>
        {items.map((it)=>(
          <article className="card" key={it.title}>
            <h3>{it.title}</h3>
            <p>{it.text}</p>
          </article>
        ))}
      </div>

      <div className="card" style={{marginTop:24}}>
        <h2>Need a digital partner?</h2>
        <p>Let’s bring your ideas to life with strategy, design, and tech.</p>
      </div>
    </div>
  )
}
