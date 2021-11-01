import React,{Component} from 'react';
import './Search.css'

const locUrl = "https://developerfunnel.herokuapp.com/location"

class Search extends Component {
    constructor(props){
        super()

        this.state={
            location:''
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

    handleCity = (event) => {
        console.log(event.target.value)
    }

    render(){
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
                    <select className="hotelDropDown">
                        <option>----SELECT YOUR HOTEL----</option>
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

export default Search