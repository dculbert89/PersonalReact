import React from 'react'
import "./clients.css"

export const Clients = () => {
  return (
    <div id="clients">
    <h2 className="contactPageTitle">My Clients</h2>
    <p className="clientDesc">
      I have had the oppurtunity to work with a diverse group of compaines.
      Some of the notable companies I have worked with inclueds
    </p>

    <div className="clientImgs">
      <img src={Walmart} alt="Client" className="clientImg" />
      <img src={Adobe} alt="Client" className="clientImg" />
      <img src={Microsoft} alt="Client" className="clientImg" />
      <img src={Facebook} alt="Client" className="clientImg" />
    </div>
  </div>

  )
}
