import React, {Component} from 'react';
import {latestNews, articleNews,galleryNews} from '../action/actionfile';
import {connect} from 'react-redux';
import LatestDisplay from '../component/Home/LatestDisplay';
import ArticleDisplay from '../component/Home/ArticleDisplay';
import GalleryDisplay from '../component/Home/GalleryDisplay';

class Home extends Component {
    //call action
    componentDidMount(){
        this.props.dispatch(latestNews())
        this.props.dispatch(articleNews())
        this.props.dispatch(galleryNews())
    }

    render(){
        return(
            <div>
                <LatestDisplay ldata={this.props.datalist.latestnews}/>
                <ArticleDisplay adata={this.props.datalist.articlenews}/>
                <GalleryDisplay gdata={this.props.gallist.galnews}/>
            </div>
        )
    }
}

function mapStateToProp(state){
    return{
        datalist:state.article,
        gallist:state.gallery
    }
}

export default connect(mapStateToProp)(Home)