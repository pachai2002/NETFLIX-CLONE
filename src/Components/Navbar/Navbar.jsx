import './Navbar.css'
import Logo from '../../assets/logo.png'
import Search_icon from '../../assets/search_icon.svg'
import Bell_icon from '../../assets/bell_icon.svg'
import Profile_icon from '../../assets/profile_img.png'
import Caret_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { logout } from '../../firebase'


const Navbar = () => {

 const navRef = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
       <div className="navbar-left">
        <img src={Logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
       </div>
       <div className="navbar-right">
        <img src={Search_icon} alt="" className='icons' />
        <p>Chidren</p>
        <img src={Bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={Profile_icon} alt="" className='profile' />
        <img src={Caret_icon} alt=""  />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar