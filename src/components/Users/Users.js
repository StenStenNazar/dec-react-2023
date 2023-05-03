import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services/user.service";
import {userActions} from "../../store/slices/user.slice";
import User from "../User/User";
import './Users.css'
import UserForm from "../UserForm/UserForm";

const Users = () => {
    const {users} = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        userService.getAll().then(value => dispatch(userActions.setUsers(value)))
    }, [])

    return (
        <div className={'users'}>
            <UserForm/>
            <div className={'users_block'}>
                {users && users.map(user => <User key={user.id} user={user}/>)}
            </div>
        </div>
    );
}

export default Users;