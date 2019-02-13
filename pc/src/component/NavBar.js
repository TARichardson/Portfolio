import React from 'react'
import { Link } from 'react-router-dom';
const MyName = "Troy Aaron Richardson"
// nav bar with links to : home,and about
export default () => {
  const Name  = () => <li className="navName"><Link to='/home'>{MyName}</Link></li>
  const Home  = () => <li className="navLink"><Link to='/home'>Home</Link></li>
  const About = () => <li className="navLink"><Link to='/about'>About</Link></li>

  return (
    <ul className="navContainer">
      {Name()}
      {Home()}
      {About()}
    </ul>
  )
}
