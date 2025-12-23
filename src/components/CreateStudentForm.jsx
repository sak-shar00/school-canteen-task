import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";

const CreateStudentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addStudent } = useCanteen();

  async function submit(data) {
    await addStudent(data.name);
    reset();
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 border mb-6">
      <h3 className="text-lg font-semibold mb-4">Add New Student</h3>
      <form onSubmit={handleSubmit(submit)} className="flex space-x-2">
        <input
          {...register("name", { required: true })}
          placeholder="Student name"
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default CreateStudentForm;