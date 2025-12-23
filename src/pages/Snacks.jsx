import { useState } from "react";
import { useCanteen } from "../context/CanteenContext";
import SnackCard from "../components/SnackCard";
import OrderModal from "../components/OrderModal";

const Snacks = () => {
  const { snacks } = useCanteen();
  const [selectedSnack, setSelectedSnack] = useState(null);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Snacks</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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