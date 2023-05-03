import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {commentService} from "../../services/comment.service";
import {commentActions} from "../../store/slices/comment.slice";

const CommentForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();


    const save = async (comment) => {
        const {data} = await commentService.create(comment)
        dispatch(commentActions.addComments({data}))
        reset();

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'}{...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>save</button>
        </form>
    );
}

export default CommentForm;