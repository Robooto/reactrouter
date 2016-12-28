import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { createPost } from '../actions/index';

class PostsNew extends Component {
    //defining an object on a PostsNew class
    // giving us access to this.router from the parent,  try to avoid using in general
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => { 
                //Post has been created and navigate user
                this.context.router.push('/');
            })
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props; // const handleSubmit = this.props.handleSubmit;
        // const title = this.props.fields.title;
        // {...title} destructures the object into its keys

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create A New Post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="form-control-feedback">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="form-control-feedback">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea type="text" className="form-control" {...content}></textarea>
                    <div className="form-control-feedback">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Enter a username';
    }

    if (!values.categories) {
        errors.categories = 'Enter categories';
    }

    if (!values.content) {
        errors.content = 'Enter some content';
    }

    return errors;
}

// putting our component into reduxForm
// form name needs to be unique
// redux form injects helpers into the props
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, { createPost })(PostsNew);

// { createPost } === { createPost: createPost }
// user types something in..record it on application state