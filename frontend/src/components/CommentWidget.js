import React, { Component } from 'react';
import uuid1 from 'uuid/v1';

class CommentWidget extends Component {
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
        // new Promise((resolve, reject) => {
        //     this.setState({
        //         ...this.state,
        //         commentId: uuid1(),
        //         prev: this.props.currComment
        //     });
        //     resolve();
        // }).then(() => {
        //     this.props.onComment(this.state);
        // }).then(() => {
        //     this.setState({
        //         userId: '',
        //         comment: '',
        //         commentId: '',
        //         head: null,
        //         next: null,
        //         prev: null
        //     });
        // });

        this.setState((state, props) => {
            state.commentId = uuid1();
            state.prev = props.currComment;
        }, () => {
            this.props.onComment(this.state);
            this.setState({
                userId: '',
                comment: '',
                commentId: '',
                head: null,
                next: null,
                prev: null
            });
        });
    }

    render() {
        return (
            <div> 
                   <input onChange={this.addComment} type="text" value={this.state.comment}/> 
                   <button onClick={this.submitComment}>post</button>
               </div>
        );
    }
}

export default CommentWidget;