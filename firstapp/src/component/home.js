import React,{Component} from 'react';
import Header from './header';
import Footer from './footer';
import ProductDisplay from './productDisplay';
import JSON from './db.json';

class Home extends Component {

    // assign data to product
    constructor(props){
        super(props)

        this.state={
            products: JSON
        }
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <div className="container">
                    <ProductDisplay prodData={this.state.products}/>
                </div>
                <Footer year="2021" month="Oct"/>
               
            </React.Fragment>
        )
    }
    
}

export default Home;