import { Route, Routes } from "react-router-dom";
import {
  About,
  Archive,
  Contact,
  Home,
  PageNotFound,
  WorkHistory,
} from "./pages";

function App() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
