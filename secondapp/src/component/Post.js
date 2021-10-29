import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => {
    return(
        <div class="card">
            <div class="card-header bg-success">
                <h3 style={{color:'white'}}>Post Page</h3>
            </div>
            <div class="card-body">
                <h5 class="card-title">Post Page</h5>
                <p class="card-text">
                    Post is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    With supporting text below as a natural lead-in to additional content.
                </p>
                <h2>JavaScript</h2>
                <Link to="/post/JavaScript?page=1" class="btn btn-primary">Details</Link>
                <h2>React</h2>
                <Link to="/post/React?page=2" class="btn btn-success">Details</Link>
                <h2>Node</h2>
                <Link to="/post/Node?page=3" class="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Post;