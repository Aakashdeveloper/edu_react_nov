import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {

    constructor(){
       super() 

       this.state={
          title:'Developer Funnel',
          userInput:'User Text Here'
       }

    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>{this.state.userInput}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}


export default Header;