import React,{Component} from 'react';
import axios from 'axios'

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component {
    constructor(props) {
        super()

        this.state={
            hotelDetails:''
        }
    }
    render(){
        //let hotelDetails = this.state.hotelDetails
        let {hotelDetails} = this.state
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>{hotelDetails.name}</h3>
                </div>
                <div className="panel-body">
                    
                </div>
            </div>
        )
    }

    //call api when page load 
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({hotelDetails:response.data[0]})
    }


}

export default Details;