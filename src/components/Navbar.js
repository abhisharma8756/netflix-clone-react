import React, {useEffect, useState} from 'react'
import "../Navbar.css"

function Navbar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 100){
            handleShow(true)
        }else handleShow(false);
    });
    return() =>{
        window.removeEventListener("scroll", handleShow);
    };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo'
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
      <img className='nav__avatar'
      src="https://www.pngall.com/wp-content/uploads/13/Netflix-Logo-PNG.png" alt="Netflix Logo" />
    </div>
  )
}

export default Navbar
