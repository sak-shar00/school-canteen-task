import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";

const OrderModal = ({ snack, close }) => {
  const { students, orderSnack } = useCanteen();
  const { register, handleSubmit } = useForm();

  async function submit(data) {
    await orderSnack({
      studentId: Number(data.studentId),
      snack,
      quantity: Number(data.quantity),
    });
    close();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Order {snack.name}</h3>
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Student</label>
            <select {...register("studentId")} className="w-full p-2 border rounded">
              {students.map(s => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              max="5"
              {...register("quantity")}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={close}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;