import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";
import { X, ShoppingBag } from "lucide-react";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="bg-indigo-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6" />
              <h3 className="text-xl font-semibold">Place Order</h3>
            </div>
            <button
              onClick={close}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900">{snack.name}</h4>
            <p className="text-gray-600">₹{snack.price} each</p>
          </div>

          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Student
              </label>
              <select
                {...register("studentId")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
              >
                <option value="">Choose a student...</option>
                {students.map(s => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity (1-5)
              </label>
              <input
                type="number"
                min="1"
                max="5"
                {...register("quantity")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                placeholder="Enter quantity"
              />
            </div>

            <div className="flex space-x-3">
              <button
                type="button"
                onClick={close}
                className="flex-1 py-3 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;