import React from 'react'

import Comment from './Comment'

import './styles.css'
import Avatar from '../assets/avatar.png'

function Post(props) {
        return(
            <div className="body">
                <div className="posts">
                    <div className="avatar">
                        <h1><img src={Avatar} alt="Avatar"/></h1>
                        <div className="name">
                            <strong>{props.data.author.name}</strong>
                            <p>{props.data.date}</p>
                        </div>
                    </div>
                    <div className="content">
                        <p>{props.data.content}</p>
                    </div>
                    {props.data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
                </div>
            </div>
        )
}

export default Post