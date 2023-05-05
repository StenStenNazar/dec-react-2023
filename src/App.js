import {Route, Routes} from "react-router";

import {Cars, Comments, Header, Users} from "./components";
import './App.css';

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
