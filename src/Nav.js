import React from 'react'
import {NavLink} from 'react-router-dom'
import { Maxime_logo } from './data'
import './nav.css'

function Nav() {
  return (
    <section className='navBarSection'>
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