import React from 'react'
import './gallery.css'
import Swiper from './Swiper'

import {Pic_6, Pic_7, Pic_8, Pic_9} from './data'

function Gallery() {
  return (
    <main className='webpageContainer BGdarkGrey'>
        <section className='galleryHeroSection'>
            <div className='galleryHeroImageContainer'>
                <img className='galleryHeroImage' src='./Images/Wine_table.jpg'/>
                <img className='galleryHeroImage glassOverlay' src='./Images/glass_crack.png'/>
            </div>
        </section>
        
        <section className='neonDisplaySection'>
            <div className='displayTitle'>What's New?</div>
            <Swiper />
            <div className='galleryImagesContainer'>
                <div className='galleryImageContainer verticalSmall'>
                    <div className='ImageContainerVerticalSmall'>
                        <img className='galleryImage' src={Pic_6} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>1 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div className='ImageContainerVerticalSmall'>
                        <img className='galleryImage' src={Pic_7}/>
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>2 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
                <div className='galleryImageContainer horizontalSmall'>
                    <div className='ImageContainerHorizontalBig'>
                        <img className='galleryImage' src={Pic_8} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>3 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
                <div className='galleryImageContainer verticalBig'>
                    <div className='ImageContainerVerticalBig'>
                        <img className='galleryImage' src={Pic_9} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>4 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
                <div className='galleryImageContainer'>
                    <div className='ImageContainerVerticalSmall'>
                        <img className='galleryImage' src={Pic_6} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>5 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                    <div className='ImageContainerVerticalSmall'>
                        <img className='galleryImage' src={Pic_7}/>
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>6 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
                <div className='galleryImageContainer'>
                    <div className='ImageContainerHorizontalBig'>
                        <img className='galleryImage' src={Pic_8} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>7 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>
                <div className='galleryImageContainer'>
                    <div className='ImageContainerVerticalBig'>
                        <img className='galleryImage' src={Pic_9} />
                        <div className='galleryDescriptionFrame'>
                            <div className='galleryDescriptionFrametitle'>8 title</div>
                            <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </main>
  )
}

export default Gallery


