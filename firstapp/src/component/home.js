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
            products: JSON,
            filtered: JSON
        }
    }

    /*
    var a = [3,5,6,2,8,9,1,4,8]
    a.filter((data) => { return data>5})
    */

    filterProduct = (keyword) => {
        var output = this.state.products.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })

        this.setState({filtered:output})

    }

    render(){
        return(
            <React.Fragment>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <div className="container">
                    <ProductDisplay prodData={this.state.filtered}/>
                </div>
                <Footer year="2021" month="Oct"/>
               
            </React.Fragment>
        )
    }
    
}

export default Home;