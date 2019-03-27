import React, { Component } from 'react';

class ReplyWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            comment: '',
            commentId: '',
            head: null,
            next: null,
            prev: null
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
    	this.setState({
            ...this.state,
            comment: ''
        });
    }

    render() {
        return (
            <div className="replyWidget"> 
       			<input onChange={this.addComment} type="text" value={this.state.comment}/> 
       			<button onClick={this.submitComment}>post</button>
       		</div>
        );
    }
}

export default ReplyWidget;
