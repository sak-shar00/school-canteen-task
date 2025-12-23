import { useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";

const StudentDetail = () => {
  const { id } = useParams();
  const { students, snacks, orderSnack } = useCanteen();
  const [showOrderModal, setShowOrderModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const student = students.find(s => s.id === Number(id));

  if (!student) return <p className="p-4 text-red-500">Student not found</p>;

  async function submitOrder(data) {
    const snack = snacks.find(s => s.id === Number(data.snackId));
    await orderSnack({
      studentId: student.id,
      snack,
      quantity: Number(data.quantity),
    });
    setShowOrderModal(false);
    reset();
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{student.name}</h2>
      <p className="text-gray-700 mb-2">Referral Code: {student.referralCode}</p>
      <p className="text-gray-700 mb-4">Total Spent: ₹{student.totalSpent}</p>

      <button
        onClick={() => setShowOrderModal(true)}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Place New Order
      </button>

      <h3 className="text-xl font-semibold mb-2">Order History</h3>
      <div className="space-y-2">
        {student.orders.map((o, i) => (
          <div key={i} className="bg-white shadow-md rounded-lg p-4 border">
            <p className="text-gray-700">
              {o.snackName} × {o.quantity} = ₹{o.amount}
            </p>
          </div>
        ))}
      </div>

      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">Place Order for {student.name}</h3>
            <form onSubmit={handleSubmit(submitOrder)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Snack</label>
                <select {...register("snackId")} className="w-full p-2 border rounded">
                  {snacks.map(s => (
                    <option key={s.id} value={s.id}>
                      {s.name} - ₹{s.price}
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
                  onClick={() => setShowOrderModal(false)}
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
      )}
    </div>
  );
};

export default StudentDetail;