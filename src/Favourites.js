import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './index.css';

let favList = [
    {"id":1, "name": "Sajay Dutt", "number":"362798989899", "country":1},
    {"id":2,"name": "Aamir Khan", "number":"989899", "country":1},
    {"id":3,"name": "Salman Khan", "number":"9098989899", "country":2},
    {"id":4,"name": "Gaurav Rathore", "number":"9898329899", "country":1},
    {"id":5,"name": "Ajay Devgan", "number":"898989899", "country":2}
]

const countryInfo = [
    {'id':1, 'isd':91, 'num':12},
    {'id':2, 'isd':1, 'num':9}
]

class FavouriteContacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:favList
        }
        this.className = ''
    }
    changeHandler = (event) => {
        
    }
    render() {
        let rows = this.state.data.map(user => {
            let userCountryId = user.country
            let countryIsd = countryInfo.map(country => {
                if (country.id===user.country) {
                    if (country.num===user.number.length) {
                        this.classNames = 'thclass'
                    }
                    else {
                        this.classNames = 'thclass2'
                    }
                }
            })
            return (
                    <div className={this.classNames}>
                        <RenderTableData key={user.id} name={user.name} number={user.number} />
                    </div>
            )
        })
        return (
            <div>{rows}</div>
        )
    }
}

const RenderTableData = (props) => {
    return (
        <div>
        <h3>{props.name}</h3>
        <h3>{props.number}</h3>
        </div>
    )
}

export default FavouriteContacts;

