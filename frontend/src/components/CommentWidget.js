import React, { Component } from 'react';

class CommentWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: ''
        }
    }

    addComment = (evt) => {
    	this.setState({
            ...this.state,
            comment: evt.target.value
        });
    }

    submitComment = () => {
    	this.props.onComment(this.state);
    }

    render() {
        return (
            <div>
       			Name : 
       			<input onChange={this.addComment} type="text"/> 
       			<button onClick={this.submitComment}>post</button>
       		</div>
        );
    }
}

export default CommentWidget;