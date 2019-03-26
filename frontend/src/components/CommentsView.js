import React from 'react';
import Comment from './Comment';

const CommentsView = (props) => {

    // const showData = () => {
    //     console.log(props.comments);
    // }

    return (
        <div>
			{props.comments.map((comment, index) => (
    			<Comment key={index} data={comment}/>
      		))}
		</div>
    );
}

export default CommentsView;