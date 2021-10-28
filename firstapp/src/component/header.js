import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {

    constructor(){
       super() 
       console.log("inside constructor")
       
       this.state={
          title:'Developer Funnel',
          userInput:'User Text Here'
       }

    }

    handleChange = (event) => {
        // console.log("inside handleChange")
        // console.log(event.target.value)
        this.setState({userInput:event.target.value})
        // here we are passing data to home with props
        this.props.userText(event.target.value)
    }

    render(){
        console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input onChange={this.handleChange}/>
                        <div style={{color:'white'}}>{this.state.userInput}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}


export default Header;