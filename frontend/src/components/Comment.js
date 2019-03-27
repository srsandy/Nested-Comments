import React, { Component } from 'react';
import ReplyWidget from './ReplyWidget';
import CommentsView from './CommentsView';
import './Comments.css';

class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			doReply: false,
			comments: []
		}
	}

	replyWidgetShow = () => {
        this.setState({
            ...this.state,
            doReply: true
        });
    }

    addComments = (comment) => {
    	let tempComments = this.state.comments;
    	tempComments.push(comment);
    	this.setState({
            ...this.state,
            comments: tempComments
        });

        console.log(this.state.comments);
    }



	render() {
		return (
			<div className="comment">
				{this.props.data.comment} 
				<button onClick={this.replyWidgetShow}>r</button>
				{this.state.doReply && <ReplyWidget onComment={this.addComments} />}
			</div>
		);
	}
}

export default Comment;