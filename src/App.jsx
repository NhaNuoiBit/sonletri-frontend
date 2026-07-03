import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Presentation from "./pages/Presentation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
