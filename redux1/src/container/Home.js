import React, {Component} from 'react';
import {connect} from 'react-redux';
import {movieList} from '../action/actionFile';
import DisplayComponent from '../component/Display';

class Home extends Component {
    // call action 
    componentDidMount(){
        this.props.dispatch(movieList())
    }

    render(){
        return(
            <div>
                <h1>My Movie List</h1>
                <DisplayComponent datalist={this.props.mydata}/>
            </div>
        )
    }

}

// we will receive the update state from store
function mapStateToProp(state){
    console.log(state)
    return{
        mydata:state.films
    }
}

export default connect(mapStateToProp)(Home)