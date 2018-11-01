import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchRecipes } from 'actions/recipe'
export class SearchBar extends Component {

    state = { input: null, }

    handleChange (event){
        this.setState({ input: event.target.value })
    }

    handleClick (){
       
        const  { searchRecipes } = this.props
        
        searchRecipes(this.state.input)
    
    }

    render(){
        return (
            <div>
                <input onChange={this.handleChange.bind(this)} type="text" name='input'/>
                <button onClick={this.handleClick.bind(this)}>Search</button>
            </div>  
        )
    }
}

export default connect(null,
 { searchRecipes }    
)(SearchBar);