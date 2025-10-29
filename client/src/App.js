import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Plan from "./pages/Plan";
import Kontakt from "./pages/Kontakt";
import Zastepstwa from "./pages/Zastepstwa";
import Dokumenty from "./pages/Dokumenty";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/zastepstwa" element={<Zastepstwa />} />
        <Route path="/dokumenty" element={<Dokumenty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
