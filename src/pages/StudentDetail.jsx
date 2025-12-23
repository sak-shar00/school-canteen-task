import { useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useCanteen } from "../context/CanteenContext";
import { X, ShoppingBag, Hash, Receipt } from "lucide-react";

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
    <div>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{student.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Hash className="h-5 w-5 text-gray-500" />
            <span className="text-gray-700">Referral Code: <span className="font-semibold">{student.referralCode}</span></span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Total Spent: <span className="font-semibold text-green-600">₹{student.totalSpent}</span></span>
          </div>
        </div>
        <button
          onClick={() => setShowOrderModal(true)}
          className="mt-6 flex items-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Place New Order</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Receipt className="h-6 w-6 text-gray-600" />
          <h3 className="text-2xl font-semibold text-gray-900">Order History</h3>
        </div>

        {student.orders.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No orders yet</p>
        ) : (
          <div className="space-y-4">
            {student.orders.map((o, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-gray-900">{o.snackName}</p>
                    <p className="text-gray-600">Quantity: {o.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">₹{o.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showOrderModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            <div className="bg-indigo-600 text-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Place Order for {student.name}</h3>
                </div>
                <button
                  onClick={() => setShowOrderModal(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit(submitOrder)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Snack
                  </label>
                  <select
                    {...register("snackId")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  >
                    <option value="">Choose a snack...</option>
                    {snacks.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.name} - ₹{s.price}
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
                    onClick={() => setShowOrderModal(false)}
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
      )}
    </div>
  );
};

export default StudentDetail;