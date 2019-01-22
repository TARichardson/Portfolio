import React from 'react'
import { Link } from 'react-router-dom';
// nav bar with links to : home,and about


export default () => {
  const Home     = () => <li className="navLink"><Link to='/home'>Home</Link></li>
  const About     = () => <li className="navLink"><Link to='/about'>About</Link></li>

  return (
    <ul className="navContainer">
      {Home()}
      {About()}
    </ul>
  )
}
