import {Routes, Route} from "react-router-dom";

import Todos from './components/Todos/Todos'
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Albums from "./components/Albums/Albums";
import Comments from "./components/Comments/Comments";
import CommentsPosts from "./components/CommentsPosts/CommentsPosts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/comments'} element={<Comments/>}>
                    <Route path={':id'} element={<CommentsPosts/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
