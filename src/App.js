import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Navbarpg from "./pages/Navbarpg";
import Footerpg from "./pages/Footerpg";
import Form from "./components/Form"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbarpg />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="form" element={<Form/>}/>
          </Route>
        </Routes>
        <Footerpg />
      </div>
    </BrowserRouter>
  );
}

export default App;
