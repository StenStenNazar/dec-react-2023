import React, {Component} from 'react';

import {PostService} from "../../services/post.service";
import {Post} from "../Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        PostService.getAll().then(value => value.data).then(value => this.setState({posts: value}))
    }

    render() {
        console.log(this.state.posts)
        return (
            <div>
                {
                    this.state.posts && this.state.posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
        )
    }
}

export {Posts}