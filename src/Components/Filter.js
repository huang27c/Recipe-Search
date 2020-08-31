import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Filter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             check: false,
             maxCal: 0
        }
    }
    

    checkHandler = (e) => {
        e.preventDefault()
        this.setState({
            check: true
        })

    }

    inputHandler = (e) => {
        this.setState({
            maxCal: e.target.value
        })
    }

    render() {
        return ReactDOM.createPortal(
          <div className="background"
            style={{
              position: 'absolute',
              top: '0',
              bottom: '0',
              left: '0',
              right: '0',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.3)',
            }}
          >
            <div
              style={{
                padding: 20,
                background: '#fff',
                borderRadius: '2px',
                display: 'inline-block',
                minHeight: '300px',
                margin: '1rem',
                position: 'relative',
                minWidth: '300px',
                boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                justifySelf: 'center',
              }}
            >
              <form className="filter-form">  
                <div>
                    <p>Max Calories: </p>
                    <input type="text" value={this.state.input} onChange={this.props.handler}></input>
                </div>
              </form>
              <hr />
              <button onClick={this.props.onClose}>Save</button>
            </div>
          </div>,
          document.getElementById('filter-popup')
        )
      }
}

export default Filter
