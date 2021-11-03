import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails"

class Details extends Component {
    constructor(props) {
        super()

        this.state={
            hotelDetails:'',
            rooms:[{},{},{}],
            tripId: sessionStorage.getItem('tripId')?sessionStorage.getItem('tripId'):1
        }
    }
    render(){
        //let hotelDetails = this.state.hotelDetails
        let {hotelDetails} = this.state
        let {rooms} = this.state
        return(
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3>{hotelDetails.name}</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-12">
                            <img src={hotelDetails.thumb} style={{height:400,width:1100}}/>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <h3>
                            <span className="label label-danger">
                                {hotelDetails.locality}
                            </span>
                        </h3>
                        <h3>
                            <span className="label label-info">
                                {hotelDetails.address}
                            </span>
                        </h3>
                        <h3>
                            <span className="label label-primary">
                                Rs. {hotelDetails.cost}
                            </span>
                        </h3>
                        
                    </div>
                    
                </div>
                
                <hr/>
                <Tabs>
                    <TabList>
                        <Tab>Details</Tab>
                        <Tab>Contact</Tab>
                        <Tab>Rooms</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>{hotelDetails.name}</h2>
                        <p>
                            {hotelDetails.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            With supporting text below as a natural lead-in to additional content.
                        </p>
                    </TabPanel>
                    <TabPanel>
                        <h2>{hotelDetails.address}</h2>
                        <h2>9876543210</h2>
                    </TabPanel>
                    <TabPanel>
                        <h3>
                            <span className="label label-primary">
                                {rooms[0].name}
                            </span> &nbsp;
                            <span className="label label-success">
                                {rooms[1].name}
                            </span> &nbsp;
                            <span className="label label-warning">
                                {rooms[2].name}
                            </span> &nbsp;
                        </h3>
                    </TabPanel>
                </Tabs>
                <Link className="btn btn-danger" to={`/list/${this.state.tripId}`}>Back</Link>&nbsp;
                <Link className="btn btn-success" to={`/placeBooking/${hotelDetails.name}`}>Proceed</Link>
            </div>
        )
    }

    //call api when page load 
    async componentDidMount(){
        let hotelId = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelId}`)
        this.setState({hotelDetails:response.data[0], rooms:response.data[0].type})
        sessionStorage.setItem('cost', response.data[0].cost)
        sessionStorage.setItem('img', response.data[0].thumb)
    }


}

export default Details;