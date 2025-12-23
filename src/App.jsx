import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CanteenProvider } from "./context/CanteenContext";
import Snacks from "./pages/Snacks";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import { ShoppingCart, Users, Home } from "lucide-react";

function App() {
  return (
    <CanteenProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
          <header className="bg-white shadow-lg border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-8 w-8 text-indigo-600" />
                  <h1 className="text-2xl font-bold text-gray-900">School Canteen</h1>
                </div>
                <nav className="flex space-x-8">
                  <Link
                    to="/"
                    className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <Home className="h-5 w-5" />
                    <span>Snacks</span>
                  </Link>
                  <Link
                    to="/students"
                    className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
                  >
                    <Users className="h-5 w-5" />
                    <span>Students</span>
                  </Link>
                </nav>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 px-2 sm:px-3 lg:px-4 flex-grow">
            <Routes>
              <Route path="/" element={<Snacks />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentDetail />} />
            </Routes>
          </main>

          <footer className="bg-indigo-50 border-t border-indigo-200 mt-12">
            <div className="max-w-7xl mx-auto py-6 px-2 sm:px-3 lg:px-4">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm text-gray-600">© 2025 School Canteen. Made with ❤️ for students.</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>📧 support@canteen.edu</span>
                  <span>📞 +91 98765 43210</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </CanteenProvider>
  );
}

export default App;