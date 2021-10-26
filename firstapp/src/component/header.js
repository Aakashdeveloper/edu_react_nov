import React,{Component, Fragment} from 'react';
import './header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">Developer Funnel</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>User Text Here</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        ) 
    }
}


export default Header;