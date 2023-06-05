import { BrowserRouter,Routes, Route } from "react-router-dom";
import Calculator from "../pages/Calculator";


function App() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="Calculator" element={<Calculator/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;