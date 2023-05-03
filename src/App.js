import './App.css';
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router";
import Comments from "./components/Comments/Comments";
import Cars from "./components/Cars/Cars";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/cars'} element={<Cars/>}/>
                <Route path={'/'} element={<Users/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
            </Routes>
        </div>
    );
}

export default App;
