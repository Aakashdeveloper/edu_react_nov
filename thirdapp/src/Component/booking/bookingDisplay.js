import React from 'react';

const BookingDisplay = (props) => {

    const renderTable = ({bookdata}) => {
        if(bookdata){
            return bookdata.map((item) => {
                return(
                    <tr>
                        <td>
                            <img src={item.image} style={{width:50,height:50}}/>
                        </td>
                        <td>{item.id}</td>
                        <td>{item.hotel_name}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>Rs.{item.cost}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <div>
            <center><h3>Booking</h3></center>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>OrderId</th>
                        <th>Hotel</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable(props)}
                </tbody>
            </table>
        </div>
    )
}

export default BookingDisplay;