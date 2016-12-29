import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {

    //defining an object on a PostsNew class
    // giving us access to this.router from the parent,  try to avoid using in general
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.params.id)
            .then(() => {
                //Post has been created and navigate user
                this.context.router.push('/');
            });
    }

    render() {
        const {post} = this.props; // const post = this.props.post
        if (!this.props.post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back To Index</Link>
                <button className="btn btn-danger float-right"
                    onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);