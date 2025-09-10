"use client";
import { useState } from "react";

export type DMReq = {
  id: string;
  name: string;
  headline: string;
  milesAway: number;
  photo?: string;
};

export default function DMRequestCard({ req, onAccept, onDecline }: {
  req: DMReq;
  onAccept?: (id: string) => Promise<void> | void;
  onDecline?: (id: string) => Promise<void> | void;
}) {
  const [loading, setLoading] = useState<"accept" | "decline" | null>(null);

  async function handle(action: "accept" | "decline") {
    setLoading(action);
    try {
      if (action === "accept") await onAccept?.(req.id);
      else await onDecline?.(req.id);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
      <img
        src={req.photo || "https://placehold.co/72x72?text=U"}
        className="w-14 h-14 rounded-xl object-cover"
        alt={`${req.name} avatar`}
      />
      <div className="flex-1">
        <div className="font-semibold">{req.name}</div>
        <div className="text-sm text-gray-600">{req.headline}</div>
        <div className="text-xs text-gray-500 mt-0.5">{req.milesAway} miles away</div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handle("decline")}
          disabled={loading !== null}
          className="px-3 py-1.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
        >
          {loading === "decline" ? "Declining…" : "Decline"}
        </button>
        <button
          onClick={() => handle("accept")}
          disabled={loading !== null}
          className="px-3 py-1.5 rounded-lg bg-black text-white hover:opacity-90 disabled:opacity-50"
        >
          {loading === "accept" ? "Accepting…" : "Accept"}
        </button>
      </div>
    </div>
  );
}
