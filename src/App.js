import "./App.css";
import About from "./components/About";
import Homescreen from "./components/Homescreen";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Writepost from "./components/Writepost";

function App() {

  return (
    <>
      <Router>

        <Navbar />
        
        <Routes>
        <Route exact path='/' element={<Signup/>}></Route>
        </Routes>

        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
        
        <Routes>
        <Route exact path='/home' element={<Homescreen/>}></Route>
        </Routes>

        <Routes>
        <Route exact path='/about' element={<About/>}></Route>
        </Routes>

        <Routes>
        <Route exact path='/write' element={<Writepost/>}></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
