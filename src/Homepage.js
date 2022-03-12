import React from 'react'
import {NavLink} from 'react-router-dom'
import './homepage.css'
// import {Pic_2, Pic_3, Pic_4, Pic_5} from './data'
import {GiForkKnifeSpoon} from 'react-icons/gi'


function Homepage() {
  return (
    <main className='webpageContainer'>
        <section className='heroSection'>
            <div className='heroImageContainer'>
                <img className='heroImage' src='./Images/Wine_table.jpg'/>
            </div>
        </section>
        <section className='introSection'>
            <div className='introContainer'>
                <h2>Maxime</h2>
                <p className='introText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam excepturi libero ullam mollitia qui! Iusto, aperiam? Modi dolores accusantium voluptas aspernatur officiis, officia dolore. Asperiores.</p>
                <NavLink to='/Menu' className='navigationButton introContainerButton'>Make reservation</NavLink>
            </div>
            <div className='introImageContainer'>
                <img className='introImage' src='./Images/concept_structure.jpg'/>
            </div>
        </section>
        
        <section className='descriptionSection'>
            <div className='descriptionHeading'>Our Restaurant</div>
            <div className='descriptionCardContainer'>
                <div className='descriptionCard'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa, cum hic! Sed aliquid facilis vel obcaecati et?</div>
                    <div className='iconContainer'><GiForkKnifeSpoon size={68}/></div>
                </div>
                <div className='descriptionCard'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa, cum hic! Sed aliquid facilis vel obcaecati et?</div>
                    <div className='iconContainer'><GiForkKnifeSpoon size={68}/></div>
                </div>
                <div className='descriptionCard'>
                    <div className='descriptionTitle'>This is just a good restaurant<div className='purpleLine lineProperties' /></div>
                    <div className='descriprtionText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, reprehenderit quas officia aut sint illo dolore odio iusto. Illo id porro voluptatibus facere nulla tempore officia voluptate, voluptatem autem culpa, cum hic! Sed aliquid facilis vel obcaecati et?</div>
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
        </section>

        <section className='gallerySection'>
            <div className='gallerySectionContainer'>
                <div className='gallerySectionImageContainer'>
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