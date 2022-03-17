import React,{useState, useEffect} from 'react'
import './info.css';
import {Pic_16, Pic_17, Pic_18} from './data'



function Info() {
  const [isInfoBoxActive,setIsInfoBoxActive] = useState(false)

  // useEffect=(()=>{
  //   setIsInfoBoxActive(true)
  // },[])



  return (
    <main className='webpageContainer'>
        <section className='infoSection'>
            <div className='InfosContainer'>
              <div className={`infoBox ${isInfoBoxActive && 'infoBoxInactive'}`}>
                  <div className='infoHeading'>Our Contacts</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                  <div className='infoIconsContainer'>
                    <div className='infoIconContainer'><img className='infoIcon' src={Pic_16}/></div>
                    <div className='infoIconContainer'><img className='infoIcon' src={Pic_17} /></div>
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
              <img className='mapImage' src={Pic_18} />
            </div>
        </section>

    </main>
  )
}

export default Info