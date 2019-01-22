import React from 'react'
import { Link } from 'react-router-dom';

export default () => {
  const Home     = () => <li className="navLink"><Link to='/home'>Home</Link></li>
  const About     = () => <li className="navLink"><Link to='/about'>About</Link></li>
  const Github     = () => <li className="navLink"><a  href='https://github.com/TARichardson'>Github</a></li>
  const Linkedin     = () => <li className="navLink"><a  href='https://www.linkedin.com/in/troyaaronrichardson'>Linkedin</a></li>

  return (
    <ul className="navContainer">
      {Home()}
      {About()}
      {Github()}
      {Linkedin()}
    </ul>
  )
}
