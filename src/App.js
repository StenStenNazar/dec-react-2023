import React, {useState} from "react";

import './App.css';
import Posts from './componets/Task_1/Posts/Posts'
import Launches from './componets/Task_2/Launches/Launches'
import Users from './componets/Task_3/Users/Users'
import UserPosts from './componets/Task_3/UserPosts/UserPosts'

function App() {

    const [id, setId] = useState(null);
    const getUserId = (id) => {
        setId(id)
    }

    return (
        <div className="App">
            <h1>Task-1</h1>
            <Posts/>
            <hr/>
            <h1>Task-2</h1>
            <Launches/>
            <hr/>
            <h1>Task-3</h1>
            <div className={'users_user_post'}>
                <Users getUserId={getUserId}/>
                {id && <UserPosts id={id}/>}
            </div>
        </div>
    );
}

export default App;
