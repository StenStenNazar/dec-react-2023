import {Component} from "react";

import './Post.css'

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, title, body} = this.props.post
        return (
            <div className={'post'}>
                <li>{id}</li>
                <li>{title}</li>
                <li>{body}</li>
            </div>
        )
    }
}

export {Post}