import React from 'react';

class Mounter extends React.Component {
    constructor(props) {
        super(props)
        this.value=10
        this.state = {'count':0}
        console.log("constructor")
    }

    intCount = (val) => {
        this.setState(
            {'count': this.state.count+val}
        )
    }
    componentDidMount() {
        console.log("ComponentDidMount")
    }

    componentWillMount() {
        console.log("componentWillMount")
    }
    shouldComponentUpdate() {
        if (this.state.count>100) {
            return false;
        }
        return true
    }
    render() {
        console.log("Mounter")
        return(
            <section>
                <button value={this.value} onClick={(a) => this.intCount(this.value)}>increament</button>
                <h1>{this.state.count}</h1>
            </section>
        )
    }
}



export default Mounter;
