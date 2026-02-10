import { Route, Routes } from "react-router-dom";
import { About, Archive, Home, WorkHistory } from "./pages";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </main>
  );
}

export default App;
