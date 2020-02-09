import React from 'react'
import { Component } from 'react'

import Post from './Post'

class PostList extends Component {
    state = {
        posts: [
            {
            id: 1,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? Pessoal, alguém sabe se a Rocketseat está contratando? ",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil podepá Chibil "
                }
            ]
            },
            {
            id: 2,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
            {
            id: 3,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
            {
            id: 4,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
            {
            id: 5,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
            {
            id: 6,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
            {
            id: 7,
            author: {
                name: "Julio Alcantara",
                avatar: "http://url-da-imagem.com/imagem.jpg"
            },
            date: "04 Jun 2019",
            content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
            comments: [
                {
                id: 1,
                author: {
                    name: "Diego Fernandes",
                    avatar: "http://url-da-imagem.com/imagem.jpg"
                },
                content: "podepá"
                }
            ]
            },
        ]
        };
    
    render() {
        return(
            <div>
                {this.state.posts.map(post => <Post key={post.id} data={post} />)}
            </div>
        )
    }
}

export default PostList