import React, { Component } from 'react'
import Detail from './Detail'

class Recipe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showMore: false,
             button: "Show more..."
        }
    }

    handler=()=>{
        this.setState({
            showMore: !this.state.showMore
        })

        this.state.showMore ? this.setState({button: 'Show more...'}) : this.setState({button: 'Show less...'})      
    }
    
    
    render() {
        const {recipe} = this.props
        return (
            <div className="recipe">
                <h1>{recipe.recipe.label}</h1>
                <p>Calories: {recipe.recipe.calories}</p>
                <img src={recipe.recipe.image}></img>
                <button className="show-more" onClick={this.handler}>{this.state.button}</button>
                {
                    this.state.showMore ? 
                        <Detail recipe={recipe}/>
                    :null
                }
            </div>
        )
    }
}

export default Recipe
