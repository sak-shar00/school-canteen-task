import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CanteenProvider } from "./context/CanteenContext";
import Snacks from "./pages/Snacks";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";

function App() {
  return (
    <CanteenProvider>
      <BrowserRouter>
        <nav className="p-4 border-b border-gray-300 bg-gray-100">
          <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">Snacks</Link>
          <Link to="/students" className="text-blue-600 hover:text-blue-800">Students</Link>
        </nav>

        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Snacks />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CanteenProvider>
  );
}

export default App;