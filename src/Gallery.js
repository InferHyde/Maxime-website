import React from 'react'

import './gallery.css'
import Swiper from './Swiper'

import {PictureBlocks, Pic_6, Pic_7, Pic_8, Pic_9} from './data'

function Gallery() {
  return (
    <main className='webpageContainer BGdarkGrey'>
        <section className='pictureBlockSection'>
            {PictureBlocks.map((pictureBlock)=>{
                return(
                    <div className='pictureBlockContainer'>
                        <img className='pictureBlock' src={pictureBlock} />
                    </div>
                )
            })}
        </section>
        
        <section className='neonDisplaySection'>
            <div className='displayTitle'>What's New?</div>
            <Swiper />
            <div className='galleryImageContainer'>
                <div className='ImageContainerVerticalSmall'>
                    <img className='galleryImage' src={Pic_6} />
                    <div className='galleryDescriptionFrame'>
                        <div className='galleryDescriptionFrametitle'>title</div>
                        <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
                <div className='ImageContainerVerticalSmall'>
                    <img className='galleryImage' src={Pic_7}/>
                    <div className='galleryDescriptionFrame'>
                        <div className='galleryDescriptionFrametitle'>title</div>
                        <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            <div className='galleryImageContainer'>
                <div className='ImageContainerHorizontalBig'>
                    <img className='galleryImage' src={Pic_8} />
                    <div className='galleryDescriptionFrame'>
                        <div className='galleryDescriptionFrametitle'>title</div>
                        <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
            <div className='galleryImageContainer'>
                <div className='ImageContainerVerticalBig'>
                    <img className='galleryImage' src={Pic_9} />
                    <div className='galleryDescriptionFrame'>
                        <div className='galleryDescriptionFrametitle'>title</div>
                        <div className='galleryDescriptionFrameText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Gallery

{/* <div className='galleryImageContainer'>
<img className='galleryImage' src='./Images/F01.JPG'/>
<div className='galleryTextContainer'>
    <div className='galleryTextTitle'>Sub Heading</div>
    <div className='galleryTextDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod alias, ratione reprehenderit facilis omnis inventore recusandae enim modi.</div>
</div>
</div> */}