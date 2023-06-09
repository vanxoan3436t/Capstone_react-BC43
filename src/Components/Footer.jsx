import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className="row container">
        <div className="col-4">
          <h3>GET HELP</h3>
          <ul>
            <li>Home</li>
            <li>Nike</li>
            <li>Adidas</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="col-4">
          <h3>SUPPORT</h3>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Help</li>
            <li>Phone</li>
          </ul>
        </div>

        <div className="col-4">
          <h3>REGISTER</h3>
          <ul>
            <li>register</li>
            <li>login</li>
        
          </ul>
        </div>
      </div>
      <div className="copy-right ">
        <p className='container '>© 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải.</p>
      </div>
    </div>
  )
}
