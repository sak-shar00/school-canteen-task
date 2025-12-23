import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";
import { UserPlus } from "lucide-react";

const CreateStudentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addStudent } = useCanteen();

  async function submit(data, event) {
    event.preventDefault();
    await addStudent(data.name);
    reset();
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <UserPlus className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold text-gray-900">Add New Student</h3>
      </div>

      <form onSubmit={handleSubmit(submit)} className="flex space-x-4">
        <div className="flex-1">
          <input
            {...register("name", { required: true })}
            placeholder="Enter student name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          />
        </div>
        <button
          type="submit"
          className="flex items-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          <UserPlus className="h-5 w-5" />
          <span>Add Student</span>
        </button>
      </form>
    </div>
  );
};

export default CreateStudentForm;