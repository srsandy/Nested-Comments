import React from 'react';

const Comment = (props) => {
	return(
		<div>
			{props.data.comment}
		</div>
	);
}

export default Comment;