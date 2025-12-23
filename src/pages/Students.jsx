import { useCanteen } from "../context/CanteenContext";
import CreateStudentForm from "../components/CreateStudentForm";
import { Link } from "react-router-dom";

const Students = () => {
  const { students } = useCanteen();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Students</h2>
      <CreateStudentForm />

      <div className="mt-6 space-y-4">
        {students.map(s => (
          <div key={s.id} className="bg-white shadow-md rounded-lg p-4 border">
            <p className="text-lg font-semibold">{s.name}</p>
            <p className="text-gray-700">Referral: {s.referralCode}</p>
            <p className="text-gray-700">Total Spent: ₹{s.totalSpent}</p>
            <Link
              to={`/students/${s.id}`}
              className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;