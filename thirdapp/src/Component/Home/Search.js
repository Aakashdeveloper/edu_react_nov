import React,{Component} from 'react';
import './Search.css';
import {withRouter} from 'react-router-dom'

const locUrl = "https://developerfunnel.herokuapp.com/location";
const hotelUrl = "https://developerfunnel.herokuapp.com/hotels?city="

class Search extends Component {
    constructor(props){
        super(props)

        this.state={
            location:'',
            hotels:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id} key={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }

    renderHotel = (data) => {
       if(data){
           return data.map((item) => {
               return(
                   <option value={item._id} key={item._id}>
                       {item.name} | {item.locality}
                   </option>
               )
           })
       } 
    }

    handleCity = (event) => {
        console.log(event.target.value)
        const cityId = event.target.value;
        fetch(`${hotelUrl}${cityId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => { 
            this.setState({hotels:data})
        })
    }

    handleHotel = (event) => {
        const hotelId = event.target.value;
        this.props.history.push(`/details/${hotelId}`)
    }

    render(){
        console.log("in search ",this.props)
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Your Trip With Us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="hotelDropDown" onChange={this.handleHotel}>
                        <option>----SELECT YOUR HOTEL----</option>
                        {this.renderHotel(this.state.hotels)}
                    </select>
                </div>
            </div>
        )
    }

    // on page load call api 
    componentDidMount(){
        fetch(locUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search)