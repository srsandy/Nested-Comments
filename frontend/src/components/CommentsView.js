import React from 'react';
import Comment from './Comment';

const CommentsView = (props) => {
    return (
        <div className="comments">
			{props.comments.map((comment, index) => (
    			<Comment key={index} data={comment}/>
      		))}
		</div>
    );
}

export default CommentsView;