import React, { Component } from 'react'
import { Link,withRouter } from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hiii!!!!</h1>
            </div>
        )
    }
}
export default withRouter(Home);