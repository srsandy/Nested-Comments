import React, { Component } from 'react';
import uuid1 from 'uuid/v1';

class ReplyWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            comment: '',
            commentId: '',
            head: this.props.tHead,
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
        this.setState((state, props) => {
            state.commentId = uuid1();
            state.prev = props.currComment;
        }, () => {
            this.props.onComment(this.state);  
            this.setState({
                ...this.state,
                comment: '',
                commentId: '',
                next: null,
                prev: null
            });  
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
