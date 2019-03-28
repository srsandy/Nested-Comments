import React, { Component } from 'react';
import CommentWidget from './CommentWidget';
import CommentsView from './CommentsView';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        	doComment: false, 
        	comments: [],
        	curr: null
        };
    }

    commentWidgetShow = () => {
        this.setState({
            ...this.state,
            doComment: true
        });
    }

    addComments = (comment) => {
    	let tempComments = this.state.comments;

    	//fill 'next' of last comment
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
            <div>
       			<h2>Post-1</h2>
       			<button onClick={this.commentWidgetShow}>Comment</button>
       			{ this.state.doComment && <CommentWidget onComment={this.addComments} currComment={this.state.curr}/> }
       			<CommentsView comments={this.state.comments}/>
       		</div>
        );
    }
}

export default Post;