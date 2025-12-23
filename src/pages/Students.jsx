import { useCanteen } from "../context/CanteenContext";
import CreateStudentForm from "../components/CreateStudentForm";
import { Link } from "react-router-dom";
import { Eye, Hash } from "lucide-react";

const Students = () => {
  const { students } = useCanteen();

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Students</h2>
        <p className="text-gray-600">Manage student accounts and view their activity</p>
      </div>

      <CreateStudentForm />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(s => (
          <div key={s.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-semibold text-indigo-600">{s.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                    <Hash className="h-3 w-3" />
                    <span>{s.referralCode}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-green-600">₹{s.totalSpent}</div>
                <div className="text-sm text-gray-500">total spent</div>
              </div>
            </div>

            <Link
              to={`/students/${s.id}`}
              className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
            >
              <Eye className="h-5 w-5" />
              <span>View Details</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;