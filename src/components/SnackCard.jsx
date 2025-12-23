import { ShoppingCart, TrendingUp } from "lucide-react";

const SnackCard = ({ snack, onOrder }) => {
  const getIcon = (name) => {
    const icons = {
      "Samosa": "🥟",
      "Sandwich": "🥪",
      "Pizza Slice": "🍕",
      "Burger": "🍔",
      "French Fries": "🍟",
      "Cold Drink": "🥤",
      "Ice Cream": "🍦",
      "Pasta": "🍝",
      "Chicken Nuggets": "🍗",
      "Hot Dog": "🌭",
      "Momos": "🥟",
      "Spring Roll": "🥢",
      "Donut": "🍩",
      "Milkshake": "🥤",
      "Fruit Salad": "🥗",
      "Cheese Toast": "🧀"
    };
    return icons[name] || "🍽️";
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-4xl">{getIcon(snack.name)}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{snack.name}</h3>
              <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                <TrendingUp className="h-3 w-3" />
                <span>{snack.ordersCount} orders</span>
              </div>
            </div>
          </div>
          <span className="text-2xl font-bold text-indigo-600">₹{snack.price}</span>
        </div>

        <button
          onClick={onOrder}
          className=" w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium mt-5"
        >
          <ShoppingCart className="h-5 w-5" />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
};

export default SnackCard;