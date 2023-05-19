import React from 'react'
import Logo from "../img/logo.png"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>Made by <Link className='linkedin-ref' to="https://www.linkedin.com/in/rafo0x63/">Antonio Rafajec</Link> using React.js and Node.js</span>
    </footer>
  )
}

export default Footer;