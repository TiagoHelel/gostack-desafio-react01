import React from 'react'
import { Component } from 'react'

import './styles.css'

import PostList from './PostList'

import facebook from '../assets/facebook.png'
import person from '../assets/person.jpeg'

class Header extends Component {
    render() {
        return(
            <>
                <div>
                    <div className="header">
                        <img className="facebook" src={facebook} alt="Facebook"/>
                        <div className="profile">
                            <a href="">Meu perfil</a>
                            <img className="person" src={person} alt="Person"/>
                        </div>
                    </div>
                    <div>
                        <PostList />
                    </div>
                </div>
            </>
        )
    }
}

export default Header
