"use client";
import { useState } from "react";

const OPTIONS = [1, 5, 10, 25, 100, -1]; // -1 = Global

export function MatchRadius({
  value,
  onChange,
}: {
  value?: number;
  onChange?: (mi: number) => void;
}) {
  const [radius, setRadius] = useState<number>(value ?? 10);

  function set(mi: number) {
    setRadius(mi);
    onChange?.(mi);
  }

  const label = (mi: number) => (mi === -1 ? "Global" : `${mi} mi`);

  return (
    <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
      <div className="text-xl font-semibold">Match Radius</div>
      <p className="text-sm text-gray-500 mb-3">
        Control who can discover you and whose looks you’ll rate.
      </p>
      <div className="flex flex-wrap gap-2">
        {OPTIONS.map((mi) => (
          <button
            key={mi}
            onClick={() => set(mi)}
            className={`px-3 py-1.5 rounded-full border transition ${
              radius === mi
                ? "bg-black text-white border-black"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
            }`}
          >
            {label(mi)}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Smaller radius = more local relevance. Global = max reach.
      </p>
    </div>
  );
}
