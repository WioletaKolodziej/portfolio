import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* TODO: dopisz strony */}
        <Route path="/about" element={<div>About me page</div>} />
        <Route path="/accessibility-checker" element={<div>Checker</div>} />
        <Route path="/flexbox-game" element={<div>Flexbox game</div>} />
        <Route path="/design" element={<div>Design & Coding</div>} />
        <Route path="/tools" element={<div>Tools</div>} />
        <Route path="/offer" element={<div>Offer</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
