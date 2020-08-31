import React, { Component } from 'react'

class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showIngredient: false,
             button: "Show Ingredients"
        }
    }

    handler = (e) =>{
        e.preventDefault()
        this.setState({
            showIngredient: !this.state.showIngredient
        })

        this.state.showIngredient ? this.setState({button: 'Show Ingredients'}) : this.setState({button: 'Hide Ingredients'})
    }
    
    render() {
        const {recipe} = this.props
        return (
            <div className="detail-recipe">
                {recipe.recipe.cautions.length?
                    <div>Cautions: {recipe.recipe.cautions.map((caution, index) => <React.Fragment key={index}>{`${caution} `}</React.Fragment>)}</div>
                    :<div>No need to be cautious</div>}
                {recipe.recipe.dietLabels.length?
                    <div>Diet Labels: {recipe.recipe.dietLabels.map((label, index) => <React.Fragment key={index}>{`${label}`}</React.Fragment>)}</div>
                    :<div>No diet labels. Who cares anyway?</div>
                }
                <button onClick={this.handler}>{this.state.button}</button>
                {
                    this.state.showIngredient ?
                        recipe.recipe.ingredients.length?
                        <div>Ingredients: {recipe.recipe.ingredients.map((ingredient, index) => <div key={index}>{`${ingredient.text}`}</div>)}</div>
                        :<div>Smash them up</div>
                    :null
                }
            </div>
        )
    }
}

export default Detail
