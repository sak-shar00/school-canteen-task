import { useState } from "react";
import { useCanteen } from "../context/CanteenContext";
import SnackCard from "../components/SnackCard";
import OrderModal from "../components/OrderModal";
import { Plus } from "lucide-react";

const Snacks = () => {
  const { snacks } = useCanteen();
  const [selectedSnack, setSelectedSnack] = useState(null);

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Available Snacks</h2>
        <p className="text-gray-600">Choose from our delicious selection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {snacks.map(snack => (
          <SnackCard
            key={snack.id}
            snack={snack}
            onOrder={() => setSelectedSnack(snack)}
          />
        ))}
      </div>

      {selectedSnack && (
        <OrderModal
          snack={selectedSnack}
          close={() => setSelectedSnack(null)}
        />
      )}
    </div>
  );
};

export default Snacks;