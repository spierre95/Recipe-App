import React from 'react';
import SearchBar from 'components/SearchBar';


const Header = () => {

    return (
        <header className="header">
            <SearchBar classModifier={"header"}/>
        </header>
    )

}

export default Header 