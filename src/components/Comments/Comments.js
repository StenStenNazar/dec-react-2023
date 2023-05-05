import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services/comment.service";
import {commentActions} from "../../store/slices/comment.slice";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import './Comments.css'

const Comments = () => {
    const {comments} = useSelector(state => state.commentReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        commentService.getAll().then(value => dispatch(commentActions.setComments(value)))
    }, [])

    return (
        <div className={'comments'}>
            <CommentForm/>
            <div>
            {comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>).reverse()}
            </div>
        </div>
    );
};


export {Comments} ;