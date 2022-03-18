import React ,{useState,useEffect} from 'react'
import './menu.css'
import Menu_filter from './Menu_filter'
import {Pic_10, Pic_11, Pic_12,Pic_13,Pic_14,Pic_15} from './data'

function Menu() {
  const [isImageActive, setIsImageActive] = useState(false)

  useEffect(()=>{
    setIsImageActive(true)
  },[])


  return (
    <main className='webpageContainer BGpurplewhite'>
        <section className='menuImageSection'>
            <div className={`menuImageContainer ${!isImageActive&&'menuImageContainerInactive'}`}>
                <img className='menuImage' src={Pic_10}  />
                <div className={`menuImageContainer2 ${!isImageActive&&'menuImageContainer2Inactive'}`} >
                    <img className='menuImage' src={Pic_11} />
                </div>
            </div>
        </section>


        <section className='menuSelectionSection'>
            <div className='menuSelectionTitle'>
              Good Food Everyday - All Day 
            </div>
            <div className='menuSelectionImagesContainer'>
                <div className='menuSelectionImageContainer'>
                    <img className='menuSelectionImage' src={Pic_12} />
                </div>
                <div className='menuSelectionImageContainer'>
                    <img className='menuSelectionImage' src={Pic_13} />
                </div>
                <div className='menuSelectionImageContainer'>
                    <img className='menuSelectionImage' src={Pic_14} />
                </div>
                <div className='menuSelectionImageContainer'> 
                    <img className='menuSelectionImage' src={Pic_15} />
                </div>
            </div>

            <div className='menuContainer'>
                <div className='menuRecommendationTitle'>Recommendation:</div>
                
                {/* menu Functionality */}
                <div className='menuRecommendationItemsContainer'>
                  <div className='menuRecommendationItemContainer'>
                    <div className='menuItemTitle'>Goldren Waffles<div className='purpleLine lineProperties' /></div>
                  
                    <div className='menuItemPrice'>$2.00</div>
                    <div className='menuItemDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a impedit molestiae quis nulla nisi unde, ea aliquid eligendi facilis!</div>
                  </div>
                  <div className='menuRecommendationItemContainer'>
                    <div className='menuItemTitle'>Goldren Waffles<div className='purpleLine lineProperties' /></div>
                  
                    <div className='menuItemPrice'>$2.00</div>
                    <div className='menuItemDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a impedit molestiae quis nulla nisi unde, ea aliquid eligendi facilis!</div>
                  </div>
                  <div className='menuRecommendationItemContainer'>
                    <div className='menuItemTitle'>Goldren Waffles<div className='purpleLine lineProperties' /></div>
                  
                    <div className='menuItemPrice'>$2.00</div>
                    <div className='menuItemDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a impedit molestiae quis nulla nisi unde, ea aliquid eligendi facilis!</div>
                  </div>
                </div>
            </div>
            <Menu_filter />
            
            



        </section>
    </main>
  )
}

export default Menu

