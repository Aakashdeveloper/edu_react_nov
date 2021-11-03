import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const url ="http://localhost:3400/booking"

class BookingApi extends Component{
    constructor(props){
        super()

        this.state={
            booking:''
        }
    }
    render(){
        return(
            <BookingDisplay bookdata={this.state.booking}/>
        )
    }

    // call api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({booking:res.data})})
    }

}

export default BookingApi;