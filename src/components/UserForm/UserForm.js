import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services/user.service";
import {useDispatch} from "react-redux";
import {userActions} from "../../store/slices/user.slice";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();

    const save = async (user) => {
        const {data} = await userService.createUser(user)
        dispatch(userActions.createUser({data}))
        reset()

    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')} />
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>save</button>
        </form>
    );
};

export default UserForm;