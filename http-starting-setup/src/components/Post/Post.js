import React from 'react';
import { withRouter } from 'react-router-dom';

// withRouter is used to make sure that Link - related special props 
// also get passed down to the Route - related components

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default withRouter(post);