import React from 'react';
import $ from 'jquery';
import './index.css'

class RestApi extends React.Component {
    
    constructor(props) {
        super(props)
        this.postData = {
            // "country": "USA3",
            // "iso": "USDA",
            // "isd": "1",
            // "status": "1",
            // "active_status": true,
            // "mobile_number_digits": 9,
            // "currency": 1
        }
        this.state = {
            users:[]
        }
        console.log(this.state.users)
    }

    componentDidMount() {
        
        $.ajax ({
            type:"GET",
            url:'https://taxisecure.ddns.net/api/v1/country/',
            // data: JSON.stringify(this.postData),
            contentType: 'application/json',
            success:(data) => {
                console.log(data.data)
                this.setState({
                    users: data.data
                })
            }
        })
    }

    componentWillMount() {
        $.ajax({
            type:"POST",
            url:'https://taxisecure.ddns.net/api/v1/country/',
            data:JSON.stringify(this.postData),
            contentType: 'application/json',
            success: function(response){
                console.log(response.data)
                console.log("ADDED")
            }.bind(this),
            error: function(xhr, status, err){
                console.log(xhr);
                console.log(status)
                console.log(err.toString)
                console.log(xhr.data)
                // , status, err.toString());
            }.bind(this)
        });
    }
    render() {
        return (
            this.state.users.map(user => {
                return <TableStr 
                    key={user.id} 
                    name={user.country} 
                    email={user.iso} 
                    website={user.isd}
                />
            })
        )
    }

}

const TableStr =(props) => {
        return(
            // <table id='customers'>
            // <tbody>
            <tr id='customers'>
                <td>{props.name}</td>
                <td>{props.email}</td>
                <td>{props.website}</td>
            </tr>
            // </tbody>
            // </table>
        )
    }

export default RestApi;