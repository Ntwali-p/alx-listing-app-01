import React, { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const nights = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);

    return nights > 0 ? nights * price : 0;
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl sticky top-20">
      <h3 className="text-2xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full rounded-md mt-1"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full rounded-md mt-1"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total */}
      <div className="mt-4 text-lg">
        Total payment:{" "}
        <strong>${calculateTotal()}</strong>
      </div>

      <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition">
        Reserve Now
      </button>
    </div>
  );
};

export default BookingSection;
