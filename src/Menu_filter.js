import React, {useState} from 'react'
import './menu_filter.css'
import {items} from './data'


function Menu_filter() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState()

    const filterItems = (category) => {
        if(category === "All"){
          console.log('all')
          setMenuItems(items);
          return;
        }

        const newMainItems = items.filter((item) => item.category === category)
        setMenuItems(newMainItems)
        
    }

    const filterItems2 = (Subcategory) => {
        
      const newSecondaryItems = items.filter((item) => item.Subcategory === Subcategory)
      setMenuItems(newSecondaryItems)
      
  }



const Categories = (props) =>{ 
    const {filterItems} = props
        return (
          <section className='filterSection'>
            <h3>Filter</h3>
            <div className='filterButtonsContainer'>
              <button className='primaryFilterButton' onClick={()=>filterItems("All")}>
                  All
              </button>
            </div>
            <div className='filterButtonsContainer'>
              <button className='primaryFilterButton' onClick={()=>filterItems("Appetizer")}>
                  Appetizer
              </button>
              <div className='secondaryFilterButtonsContainer'>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Soup")}>
                    Soup
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Salad")}>
                    Salad
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Veggie Platter")}>
                    Veggie Platter
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Meat Platter")}>
                    Meat Platter
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Bruchetta")}>
                    Bruchetta
                </button>
              </div>
            </div>
            <div className='filterButtonsContainer'>
              <button className='primaryFilterButton' onClick={()=>filterItems("Main Course")}>
                  Main Course
              </button>
              <div className='secondaryFilterButtonsContainer'>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Flammekuche")}>
                  Flammekuche
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Steak")}>
                  Steak
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Sides")}>
                  Sides
                </button>
              </div>
            </div>
            <div className='filterButtonsContainer'>
              <button className='primaryFilterButton' onClick={()=>filterItems("Desert")}>
                  Desert
              </button>
              <div className='secondaryFilterButtonsContainer'>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Cake")}>
                  Cake
                </button>
                <button className='secondaryFilterButton' onClick={()=>filterItems2("Ice Cream")}>
                  Ice Cream
                </button>
              </div>
            </div>
            <div className='filterButtonsContainer'>
              <button className='primaryFilterButton' onClick={()=>filterItems("Drinks")}>
                  Drinks
              </button>
            </div>

          </section>

        );         
    }

    const Menu = ({items}) => {
      return (
      <div className='menuContainer'>
        <div className="menuItemsContainer">
            {items.map((menuItem) => {
            const {id, title, desc, price} = menuItem;
            return <article key={id} className="menuItemContainer">
                    <div className='menuItemTitle'>{title}<div className='purpleLine lineProperties' /></div>
                    <div className="menuItemPrice">${price}</div>
                <div className='menuItemDescription'>{desc}</div>
            </article>
            })}
        </div>
      </div>
      );
      };
    

  return (
    <section className='menuUISection'>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems}/>
    </section>
  )
}

export default Menu_filter