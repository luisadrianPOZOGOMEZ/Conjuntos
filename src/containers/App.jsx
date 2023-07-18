import { BrowserRouter,Routes, Route } from "react-router-dom";
import Calculator from "../pages/Calculator";
import Quizz from "../pages/Quizz";


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="Calculator" element={<Calculator/>}/>
                <Route path="Quizz" element={<Quizz/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;