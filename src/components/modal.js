import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'modal';
        document.body.appendChild(this.modalTarget);
        this._render();
    }

    componentWillUpdate() {
        this._render();
    }

    // remove this form dom
    componentWillUnmount() {
        ReactDOM.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }

    _render() {
        // this.props.children is a way to pass components and dispalythem
        ReactDOM.render(
            <div>{this.props.children}</div>,
            this.modalTarget
        )
    }

    render() {
        return <noscript />;
    }
}

export default Modal;