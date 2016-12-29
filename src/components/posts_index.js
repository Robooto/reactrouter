import React, { Component } from 'react';
import { connect } from 'react-redux';
//this isn't needed due to what I did below
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';


import Modal from './modal';


class PostsIndex extends Component {
    //lifecycle method - react will call when componet is rendered first time
    componentWillMount() {
        this.props.fetchPosts();
    };

    renderPost({id, title, categories}) {
            return (
                <li className="list-group-item" key={id}>
                    <Link to={`posts/${id}`}>
                        <span className="float-right">{categories}</span>
                        <strong>{title}</strong>
                    </Link>
                </li>
            );
    }

    render() {
        return (
            <div>
                <div className="text-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                    <Modal>
                        <h1>Modal information!</h1>
                    </Modal>
                </div>
                <h3></h3>
                <ul className="list-group">
                    {this.props.posts.map(this.renderPost)}
                </ul>
            </div>
        );
    };
}

//map state to props
function mapStateToProps(state) {
    return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// passing null because we don't have state to map over
// fetch posts object is the same as the mapDispatchToProps function
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);