import React,{Component} from 'react';
import axios from 'axios';
import UserDisplay from './UserDisplay';

const url ="https://developerjwt.herokuapp.com/api/auth/users"

class BookingApi extends Component{
    constructor(props){
        super()

        this.state={
            users:''
        }
    }
    render(){
        if(sessionStorage.getItem('ltk') === null ){
            this.props.history.push('/')
        }
        if(sessionStorage.getItem('ltk') !== null && sessionStorage.getItem('rtk') !== 'Admin'){
            this.props.history.push('/profile?msg=Your are not an admin')
        }
        return(
            <UserDisplay userdata={this.state.users}/>
        )
    }

    // call api 
    componentDidMount(){
        axios.get(url).then((res) => {this.setState({users:res.data})})
    }

}

export default BookingApi;