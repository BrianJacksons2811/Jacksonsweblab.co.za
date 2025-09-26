import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="container nav">
      <Link to="/" className="brand">
        <img src="/favicon.svg" alt="Jacksonsweblab logo"/>
        <span>Jacksonsweblab</span>
      </Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}
