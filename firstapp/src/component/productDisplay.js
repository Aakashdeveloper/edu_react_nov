import React from 'react';

const ProductDisplay = (props) => {
    console.log(props)

    const renderProduct = props.prodData.map((item) => {
        return (
            <div class="col">
                <div class="card">
                <img src={item.image} class="card-img-top" style={{height:'150px'}}/>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <p class="card-text">Use: {item.uses}</p>
                    <p class="card-text">Rs {item.cost}</p>
                </div>
                </div>
            </div>
        )
    })

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
    )
}

export default ProductDisplay;

/*
import React from 'react';

const ProductDisplay = (props) => {

    const renderProduct = props.prodData.map((item) => {
        return(
            <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.uses}</td>
            </tr>
        )
        
    })

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Uses</th>
                    </tr>
                </thead>
                <tbody>
                {renderProduct}
                </tbody>
            </table>
        </div>
        
    )
}

export default ProductDisplay;
*/