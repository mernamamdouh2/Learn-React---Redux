import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import '../../CSS/MenuFood.css';
import { menuItems } from '../../DataBase/menuFood';
import NavbarMenu from './NavbarMenu';
import HeaderMenu from './HeaderMenu';
import Categories from './Categories';
import ItemsList from './ItemsList';

const MenuFood = () => {
    const [itemsData, setItemsData] = useState(menuItems)

    //get all category uniqe
    const allCategories = ['All', ...new Set(menuItems.map((item) => item.category))];

    //filter by category
    const filterbyCategory = (cat) =>{
        if (cat === "All") { 
            setItemsData(menuItems)
        }else {
            const filteredData = menuItems.filter(item => item.category === cat)
            setItemsData(filteredData)
        }
    }

     //filter by search
     const filterbySearch = (word) =>{
        if (word !== "") {
            const searchData = menuItems.filter(item => item.title === word)
            setItemsData(searchData)
        }
    }
  
    return (
        <div className='color-body font'>
            <NavbarMenu filterbySearch={filterbySearch}/>
            <Container>
                <HeaderMenu/>
                <Categories  filterbyCategory={filterbyCategory} allCategories={allCategories}/>
                <ItemsList itemsData={itemsData} />
            </Container>
        </div>
    )
}

export default MenuFood;
