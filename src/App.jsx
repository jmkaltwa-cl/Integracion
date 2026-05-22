import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistroProvider } from "./context/RegistroContext";
import HomePage from "./pages/HomePage";
import RegistroPage from "./pages/RegistroPage";
import RegistroListPage from "./pages/RegistroListPage";

function App() {
  return (
    <RegistroProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/registros" element={<RegistroListPage />} />
          <Route path="/registros/:id" element={<RegistroPage />} />
        </Routes>
      </Router>
    </RegistroProvider>
  );
}

export default App;
