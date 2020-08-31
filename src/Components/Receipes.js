import React, { Component } from 'react'
import axios from 'axios'
import Recipe from './Recipe'
import Filter from './Filter'
import './Recipes.css'

class Receipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            search_input: "",
            showFilter: false,
            cal_input: Number.MAX_SAFE_INTEGER
        }

        this.inputRef = React.createRef()
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        var input_copy = this.state.search_input.replace(" ", '')
        if(input_copy !== ''){
            this.setState({
                search_input: ""
            })
            this.search()
        }
    }

    inputHandler = (e) => {
        this.setState({
            search_input: e.target.value
        })
    }

    filterHandler = (e) => {
        this.state.cal_input = e.target.value
    }

    showFilter = (e) => {
        e.preventDefault()
        this.setState({
            showFilter: true
        })
    }

    closeFilter = (e) => {
        e.preventDefault()

        this.setState({
            showFilter: false,
            cal_input: this.state.cal_input
        })
    }

    search = () => {
        let APP_ID = "e6410cef"
        let APP_KEY = "65a9af64b0ecef767d90c6e00846e6ac"
        console.log(this.state.search_input)
        let exampleReq = `https://api.edamam.com/search?q=${this.state.search_input}&app_id=${APP_ID}&app_key=${APP_KEY}`

        axios.get(exampleReq)
        .then(response => {
            this.setState({
                recipes: response.data.hits,
            })
            console.log(this.state.recipes)
        })
        .catch(error => {console.log(error)})       
    }
    

    render() {
        const {recipes} = this.state
        return (           
            <div>
                <h1>Search for Your Next Meal</h1>
                <form className="search-form"> 
                    <input className="search-bar" type="text" value={this.state.search_input} onChange={this.inputHandler} ref={this.inputRef}></input>
                    <button className="search-button" type="submit" onClick={this.submitHandler}>Search</button>
                </form>

                {recipes.length? 
                    <div>
                        <button className="filter-button" onClick={this.showFilter}>Filter</button>
                        {
                            this.state.showFilter? <Filter onClose={this.closeFilter} handler={this.filterHandler}/>:null
                        }
                        <h1>Here are the recipes...</h1>
                        <hr></hr>
                        {recipes.map(recipe => 
                            recipe.recipe.calories < this.state.cal_input ? 
                                <div key={recipe.recipe.label}>
                                    <Recipe recipe={recipe}/>
                                </div>
                            :null)}
                    </div>
                    :null
                }
            </div>
        )
    }
}

export default Receipes
