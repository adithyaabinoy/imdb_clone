import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Movieinfo from "./pages/Movieinfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/movie/:id" element={<Movieinfo />} />
      </Routes>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
