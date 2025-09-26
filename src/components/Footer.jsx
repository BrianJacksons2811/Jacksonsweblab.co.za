import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      <div className="container grid" style={{gridTemplateColumns:'1.2fr .8fr .8fr'}}>
        <div>
          <div className="brand">
            <img src="/favicon.svg" alt="Jacksonsweblab"/>
            <span>Jacksonsweblab</span>
          </div>
          <p className="small">© {new Date().getFullYear()} Jacksonsweblab. All Rights Reserved.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul className="small">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <div className="small address">
            jwadmin@jacksonsweblab.co.za
            {'\n'}+27 63 908 6636
            {'\n'}2341 Umphofu Street, Olievenhoutbosch Ext 15, Centurion, Gauteng, 0157
          </div>
        </div>
      </div>
    </footer>
  )
}
