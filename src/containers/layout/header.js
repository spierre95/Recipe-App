import React from 'react';
import SearchBar from '../../components/SearchBar';
import DropDownButton from '../../components/favourites/DropDownButton';


const Header = () => {

    return (
        <header className="header">
            <SearchBar classModifier={"header"}/>
            <DropDownButton/>
        </header>
    )

}

export default Header 