import {Component} from "react";

import './Comment.css'

class Comment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, name, email, body} = this.props.comment
        return (
            <div className={'comment'}>
                <li>{id}</li>
                <li>{name}</li>
                <li>{email}</li>
                <li>{body}</li>
            </div>
        )
    }
}

export {Comment}