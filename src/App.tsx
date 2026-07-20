import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NannyMaidPage } from "./pages/NannyMaidPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nanny-and-maid-services" element={<NannyMaidPage />} />
      </Routes>
    </Router>
  );
}

export default App;
