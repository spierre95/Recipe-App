import React, { Component } from 'react'

export class SearchBar extends Component {

    state = { input: null, }

    handleChange (event){
        this.setState({ input: event.target.value });
    }

    handleClick (){

        console.log(this.state.input)
        
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} type="text" name="input"/>
                <button onClick={this.handleClick.bind(this)}>Search</button>
            </div>  
        )
    }
}

export default SearchBar;