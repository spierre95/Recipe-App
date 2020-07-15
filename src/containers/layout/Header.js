import React from 'react';
import SearchBar from '../../components/SearchBar';
import DropDownButton from '../../components/favourites/DropDownButton';
import ShoppingListButton from '../../components/shopping/ShoppingListButton';


const Header = () => {

    return (
        <header className="header">
            <ShoppingListButton/>
            <SearchBar classModifier={"header"}/>
            <DropDownButton/>
        </header>
    )

}

export default Header 
