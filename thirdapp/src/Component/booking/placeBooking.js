import React,{Component} from 'react';

const BookingUrl = "http://localhost:3400/booking";

class PlaceBooking extends Component {
    constructor(props) {
        super(props)

        this.state={
            id: Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:'',
            email:'',
            phone:'',
            cost:sessionStorage.getItem('cost'),
            image:sessionStorage.getItem('img')
        }
    }
    handleInput = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state)
        fetch(BookingUrl,{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.history.push('/viewBooking'))

    }
    render(){
        return(
            <div className="panel panel-info">
                <div className="panel-heading">
                    Booking
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>OrderId</label>
                        <input className="form-control" readOnly name="id" value={this.state.id}/>
                    </div>
                    <div className="form-group">
                        <label>Hotel Name</label>
                        <input className="form-control" readOnly name="hotel_name" value={this.state.hotel_name}/>
                    </div>
                    <div className="form-group">
                        <label>Cost</label>
                        <input className="form-control" readOnly name="cost" value={this.state.cost}/>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" name="name" value={this.state.name} 
                        onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" name="email" value={this.state.email} 
                        onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input className="form-control" name="phone" value={this.state.phone} 
                        onChange={this.handleInput}/>
                    </div>
                    <button className="btn btn-success" onClick={this.handleSubmit}>
                        Place booking
                    </button>
                </div>
            </div>
        )
    }
}

export default PlaceBooking;