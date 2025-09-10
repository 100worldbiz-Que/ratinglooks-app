export function CoachingTips() {
  return (
    <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-3">
      <div className="text-xl font-semibold">Coaching Tips</div>
      <div className="space-y-2">
        <Tip
          level="Free"
          text="Face the window; eyes to lens. Avoid overhead light."
        />
        <Tip
          level="Plus"
          text="Solid colors beat busy patterns. Fit > brand. Hem hits ankle."
        />
        <Tip
          level="Pro"
          text="Pose: shift weight, drop near shoulder, chin out 5°. Background: remove clutter and add depth."
        />
      </div>
    </div>
  );
}

function Tip({ level, text }: { level: "Free" | "Plus" | "Pro"; text: string }) {
  return (
    <div className="rounded-xl border border-gray-200 p-3">
      <div className="text-sm font-semibold">{level} Tip</div>
      <div className="text-sm text-gray-700">{text}</div>
    </div>
  );
}
