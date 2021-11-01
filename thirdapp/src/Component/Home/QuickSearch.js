import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';

const url = "https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends Component {
    constructor(props) {
        super(props);

        this.state={
            tripType:''
        }
    }

    render(){
        return(
            <>
                <QuickDisplay tripData={this.state.tripType}/>
            </>
        )
    }


    // apicall
    // call after render and only call once at time of page load
    componentDidMount() {
        fetch(url,{method: 'GET'})
        // return the promise
        .then((res) => res.json())
        // return the data
        .then((data) => {
            console.log(data)
            // set the data in the state
            this.setState({tripType:data})
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export default QuickSearch