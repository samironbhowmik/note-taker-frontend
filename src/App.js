import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddNote from "./components/addNote";
import Delete from "./components/delete";
import Export from "./components/export";
import Home from "./components/home";
import Logout from "./components/logout";
import Signin from "./components/signin";
import Signup from "./components/signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/addnote" element={<AddNote/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/export" element={<Export/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
