import './App.css';
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {Comment} from "./components/Comment/Comment";
import CatsDogs from "./components/CatsDogs/CatsDogs";

function App() {
    return (
        <div>
            <Header/>
            <div className="App">
                <Routes>
                    <Route path={'/cats_dogs'} element={<CatsDogs/>}/>
                    <Route path={'/post'} element={<Posts/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
