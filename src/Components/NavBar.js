import { Link } from 'react-router-dom';
import React from 'react'
import './NavBar.css'


const NavBar = () => {
    // const myFunction =()=> {
    //     var x = document.getElementById("myTopnav");
    //     if (x.className === "topnav") {
    //       x.className += " responsive";
    //     } else {
    //       x.className = "topnav";
    //     }
    //   }

  return (
    <div>
        <div className="topnav" id="myTopnav">
  <Link to="/" className="">Home</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/about">About</Link>
  <Link to = "/" className='brandname'>Portfolio</Link>
  {/* <Link to="javascript:void(0);" className="icon" onClick={myFunction}> */}
    {/* <i className="fa fa-bars"></i> */}
  {/* </Link> */}
 
</div>
    </div>
  )
}

export default NavBar