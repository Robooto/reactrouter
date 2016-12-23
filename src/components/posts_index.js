import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
    //lifecycle method - react will call when componet is rendered first time
    componentWillMount() {
        this.props.fetchPosts();
    };

    render() {
        return (
            <div>List of blog posts</div>
        );
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
// }

// passing null because we don't have state to map over
// fetch posts object is the same as the mapDispatchToProps function
export default connect(null, { fetchPosts })(PostsIndex);