import React, { Component } from 'react';
import CommentWidget from './CommentWidget';
import CommentsView from './CommentsView';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        	showComment: false, 
        	comments: [] 
        };
    }

    commentWidgetShow = () => {
        this.setState({
            ...this.state,
            showComment: true
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
            <div>
       			<h2>Post-1</h2>
       			<button onClick={this.commentWidgetShow}>Comment</button>
       			{ this.state.showComment && <CommentWidget onComment={this.addComments}/> }
       			<CommentsView comments={this.state.comments}/>
       		</div>
        );
    }
}

export default Post;