import React from 'react'
import './info.css';
import {Pic_16} from './data'

function Info() {
  return (
    <main className='webpageContainer'>
        <section className='infoSection'>
            <div className='InfosContainer'>
              <div className='infoBox'>
                  <div className='infoHeading'>Our Contacts</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoIconsContainer'>
                    <div className='infoIconContainer'>Icon 1</div>
                    <div className='infoIconContainer'>Icon 2</div>
                  </div>
              </div>
              <div className='infoBox'>
                  <div className='infoHeading'>Infos</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
              </div>
            </div>
            <div className='mapImageContainer'>
              <img className='mapImage' src={Pic_16} />
            </div>
        </section>

    </main>
  )
}

export default Info