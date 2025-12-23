const SnackCard = ({ snack, onOrder }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border">
      <h3 className="text-lg font-semibold mb-2">{snack.name}</h3>
      <p className="text-gray-700 mb-1">Price: ₹{snack.price}</p>
      <p className="text-gray-700 mb-4">Orders: {snack.ordersCount}</p>
      <button
        onClick={onOrder}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Order
      </button>
    </div>
  );
};

export default SnackCard;