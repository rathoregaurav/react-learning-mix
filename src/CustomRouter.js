import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

const Home = ({match}) => (
    <div>
        <h1>HELLO</h1>
    </div>
)

function TopicFetch(props) {
    // alert(props.match.params.topicId)
    console.log(props.match.params.topicId)
    return (
        <h1>Topic ID: {props.match.params.topicId}</h1>
        
    )
}

class Topics extends React.Component {
    constructor(props) {
        super(props)
        this.match = props.match;
    }

    render() {
        return (
            <BrowserRouter>
            <div>
            <Link to={`${this.match.url}/1`}>Topic1</Link>
            <Link to={`${this.match.url}/2`}>Topic2</Link>
            <Link to={`${this.match.url}/3`}>Topic3</Link>
            <Route path={`${this.match.url}/:topicId`} component={TopicFetch} />
            </div>
            </BrowserRouter>
            
        )
    }
}

class Header extends React.Component {
    
    render() {
        return (
            <BrowserRouter>
            <div>
            <Link to='/home'>Home</Link><p></p>
            <Link to='/topic'>Topics</Link>
            <Route path='/home' component={Home} />
            <Route path='/topic' component={Topics} />
            </div>
            
            </BrowserRouter>
            
        )
    }
}

export default Header;