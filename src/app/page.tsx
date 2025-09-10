"use client";

import { useState } from "react";
import { MatchRadius } from "@/components/MatchRadius";
import DMRequestCard, { DMReq } from "@/components/DMRequestCard";
import { CoachingTips } from "@/components/CoachingTips";

const MOCK: DMReq[] = [
  { id: "1", name: "Alex J.", headline: "“Mind rating my gym progress?”", milesAway: 3,  photo: "https://placehold.co/72x72?text=A" },
  { id: "2", name: "Riley S.", headline: "“Whole look — new outfit”",   milesAway: 14, photo: "https://placehold.co/72x72?text=R" },
  { id: "3", name: "Jordan P.", headline: "“Face only”",               milesAway: 7,  photo: "https://placehold.co/72x72?text=J" },
];

export default function Page() {
  const [radius, setRadius] = useState(10);
  const [reqs, setReqs] = useState(MOCK);

  async function accept(id: string) {
    // In MVP this could show a paywall if user is at limit.
    setReqs((r) => r.filter((x) => x.id !== id));
    alert("Accepted. If you’ve used today’s free replies: Unlock this DM for $0.99 or Go Plus.");
  }

  async function decline(id: string) {
    setReqs((r) => r.filter((x) => x.id !== id));
    alert("Declined. They won’t be notified why.");
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">RatingLooks</h1>
        <p className="text-gray-600">Rate Face / Body / Whole Look. Get your score, improve fast.</p>
      </header>

      <MatchRadius value={radius} onChange={setRadius} />

      <section className="space-y-3">
        <div className="text-lg font-semibold">DM Requests</div>
        <div className="space-y-3">
          {reqs.map((r) => (
            <DMRequestCard key={r.id} req={r} onAccept={accept} onDecline={decline} />
          ))}
          {reqs.length === 0 && <div className="text-sm text-gray-500">No requests right now.</div>}
        </div>
      </section>

      <CoachingTips />

      <footer className="pt-6 text-xs text-gray-500">
        Prototype UI • Match Radius: {radius === -1 ? "Global" : radius + " mi"}
      </footer>
    </main>
  );
}
