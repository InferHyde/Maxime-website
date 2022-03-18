import React,{useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'

import './homepage.css'
// import {Pic_2, Pic_3, Pic_4, Pic_5} from './data'
import './reservation_form.css'

//Assets
import {Reservation_section} from './Reservation_form'
import {GiForkKnifeSpoon} from 'react-icons/gi'
import {Reservation_form} from './Reservation_form'


function Homepage() {
    const [isDisplayingForm, setIsDisplayingForm] = useState(false)
    const [isIntroActive, setIsIntroActive] = useState(false)
    const [isCardActive, setIsCardActive] = useState(false)
    const [isGalleryActive, setIsGalleryActive] = useState(false)
    //one time animations - intro image's transition
    const introActiveAnimation = () =>{
        if (window.scrollY >= 138 ){
            setIsIntroActive(true)
        }
        else{
            setIsIntroActive(false)
        }
    }
    const descriptionActiveAnimation = () =>{
        if (window.scrollY >= 888 ){
            setIsCardActive(true)
        }
        else{
            setIsCardActive(false)
        }
    }
    const galleryActivateAnimation = () =>{
        const webpageHeight = document.documentElement.scrollHeight
        if (window.scrollY >= (webpageHeight - 1280)){
            setIsGalleryActive(true)
        }
        else{
            setIsGalleryActive(false)
        }
    }

    useEffect(() =>{
        introActiveAnimation()
        descriptionActiveAnimation()
        galleryActivateAnimation()
        window.addEventListener("scroll", introActiveAnimation )
        window.addEventListener("scroll", descriptionActiveAnimation )
        window.addEventListener('scroll',galleryActivateAnimation)
        return () => {
          window.removeEventListener('scroll', introActiveAnimation);
          window.removeEventListener('scroll', descriptionActiveAnimation);
          window.removeEventListener('scroll', galleryActivateAnimation);

        };
      },[])

  return (
    <main className='webpageContainer padding0'>
        {isDisplayingForm && <Reservation_form setDisplaying={setIsDisplayingForm} />}
        <section className='heroSection'>
            <div className='heroSectionContainer'>
                <div className='heroTitle'>Welcome to Maxime</div>
                <div className='heroSubTitle'>Come take a look around and enjoy yourself</div>
                <div className='navButtonContainer'>
                    <button className='heroNavButton' ><NavLink to='/Menu' className='heroNavlink'>see our menu</NavLink></button>
                    <button className='heroNavButton' onClick={()=>setIsDisplayingForm(true)}>make a reservation</button>
                    <button className='heroNavButton' ><NavLink to='/Menu' className='heroNavlink'>check out whats new</NavLink></button>
                </div>
            </div>   
        </section>
        <section className='introSection' >
            <div className='introContainer'>
                <h2 className={isIntroActive ? 'introTitleText':'introTitleTextInactive'}>Maxime</h2>
                <p className={isIntroActive ? 'introText':'introTextInactive'} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi libero ullam mollitia qui! Iusto, aperiam? Modi dolores accusantium voluptas aspernatur officiis, officia dolore. Asperiores.</p>
                <NavLink to='/Menu' className='navigationButton introContainerButton'>Make reservation</NavLink>
            </div>
            <div className={isIntroActive ? 'introImageContainer' : 'introImageContainerInactive'}>
                <img className='introImage' src='./Images/concept_structure.jpg'/>
            </div>
        </section>
        
        <section className='descriptionSection'>
            <div className='descriptionHeading'>Our Restaurant</div>
            <div className='descriptionCardContainer'>
                <div className={isCardActive ? 'descriptionCard': 'descriptionCardInactive'} id='card1'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa</div>
                    <div className='iconContainer'><GiForkKnifeSpoon size={68}/></div>
                </div>
                <div className={isCardActive ? 'descriptionCard': 'descriptionCardInactive'} id='card2'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa</div>
                    <div className='iconContainer'><GiForkKnifeSpoon size={68}/></div>
                </div>
                <div className={isCardActive ? 'descriptionCard': 'descriptionCardInactive'} id='card3'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa</div>
                    <div className='iconContainer'><GiForkKnifeSpoon size={68}/></div>
                </div>
            </div>
        </section>

        <section className='blackboardSection'>
            <img className='blackboardBG' src='./Images/Red_bar.jpg' />
            <div className='blackboardContainer'>
                <div className='blackboard'>
                    <div className='blackboardTitle'>Maxime services include...</div>
                    <div className='blackboardTextContainer'>
                        <div className='blackboardHeading chalkYellow'>Western Cusine (lunch-dinner)</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className='blackboardTextContainer'>
                        <div className='blackboardHeading chalkPurple'>Bar</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                    <div className='blackboardTextContainer'>
                        <div className='blackboardHeading chalkBlue'>Event Hosting</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                        <div className='blackboardText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div>
                </div>
            </div>
        </section>

        <section className='menuSection'>
                <div className='menuSectionImageContainer'>
                    <img className='menuSectionImage' src='./Images/Fine_dining.jpg' />
                </div>
                <h2 className='menuSectionBoldText'>
                    Take a look at what we have to offer
                </h2>
                <div className='menuSectionText'>Check out our amazing western style menu available during lunch and dinner at Maxime. Open all days(10am-3am)</div>
                <NavLink to='/Menu' className='navigationButton menuSectionButton'>Menu</NavLink>
                <div className='menuSectionText'>Or</div>
                <Reservation_section />
        </section>

        <section className='gallerySection'>
            <div className='gallerySectionContainer'>
                <div className={isGalleryActive ? 'gallerySectionImageContainer' : 'gallerySectionImageContainerInactive'}>
                    < img className='gallerySectionImage' src='./Images/Restaurant_prost.jpg' />
                </div>
                <div className='gallerySectionTextsContainer'>
                    <h2 className='gallerySectionTitle'>Explore our restaurant</h2>
                    <div className='gallerySectionHeading'>Discover the beauty of Maxime, find our exciting events</div>
                    <NavLink to='/Gallery' className='navigationButton gallerySectionButton'>View Gallery</NavLink>
                </div>
            </div>
        </section>
    </main>
  )
}


export default Homepage

