import React from 'react'

import './styles.css'
import Avatar from '../assets/avatar.png'

function Comment(props) {
        return(
            <div className="comments">
                <img src={Avatar} alt="Avatar"/>
                <div className="comment">
                    <p><strong>{props.data.author.name}</strong> {props.data.content}</p>
                </div>
            </div>
        )
}


export default Comment