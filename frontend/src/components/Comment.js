import React, { Component } from 'react';
import ReplyWidget from './ReplyWidget';
import CommentsView from './CommentsView';
import './Comments.css';

class Comment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			doReply: false,
			comments: [],
			curr: null
		}
	}

	replyWidgetShow = () => {
        this.setState({
            ...this.state,
            doReply: true
        });
    }

    addComments = (comment) => {
    	// let tempComments = this.state.comments;
    	// tempComments.push(comment);
    	// this.setState({
            // ...this.state,
            // comments: tempComments
        // });

        // console.log(this.state.comments);

        // let tempComments = this.state.comments;

    	//fill 'next' of last comment
    	let tempComments = this.state.comments;
    	const len = tempComments.length
		if(len !== 0)
			tempComments[len-1].next = comment.commentId

    	tempComments.push(comment);
    	this.setState({
            ...this.state,
            //curr update 
            curr: comment.commentId,
            comments: tempComments
        });

        console.log(this.state.comments);
    }

	render() {
		return (
			<div className="comment">
				{this.props.data.comment} 
				<button onClick={this.replyWidgetShow}>r</button>
				{this.state.doReply && <ReplyWidget tHead={this.props.data.commentId} currComment={this.state.curr} onComment={this.addComments} />}
				<CommentsView comments={this.state.comments}/>
			</div>
		);
	}
}

export default Comment;