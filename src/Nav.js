import React, { useEffect, useState } from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import { Maxime_logo } from './data'
import './nav.css'

function Nav() {
  const [navbarBG, setNavbarBG] = useState(false)
  let location = useLocation();
  const changeNavBackground = () => {
    if (window.scrollY <= 88 && location.pathname === '/') {
      setNavbarBG(true)
    } else {
      setNavbarBG(false)
    }
  }

  useEffect(() =>{
    changeNavBackground()
    window.addEventListener("scroll", changeNavBackground)
    return () => {
      window.removeEventListener('scroll', changeNavBackground);
    };
  })

  // function usePageViews() {
  //   useEffect(() => {
  //     console.log(location.pathname);
  //   }, [location]);
  // }
  // usePageViews()


  return (
    <section className={navbarBG ? 'navBarSectionTransparent' : 'navBarSection'}>
        <div className='navBar'>
            <div className='logoContainer'>
                <img src={Maxime_logo}/>
                <div className='chineseName'>紫色餐厅</div>
            </div>
            <div className='navBtnContainer'>
                <NavLink to='/' className='navBtn' activeClassName='activeNavBtn' exact={true}>Home</NavLink>
                <NavLink to='/Gallery' className='navBtn' activeClassName='activeNavBtn'>Gallery</NavLink>
                <NavLink to='/Menu' className='navBtn' activeClassName='activeNavBtn'>Menu</NavLink>
                <NavLink to='/Info' className='navBtn' activeClassName='activeNavBtn'>Info</NavLink>
                {/* <div className='navbtn'>join</div>
                <div className='navbtn'>join</div> */}

                {/* <div className='navInfo'>Info</div> */}
            </div>
            
        </div>
    </section>
  )
}

export default Nav