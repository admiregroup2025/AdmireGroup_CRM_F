import React from "react";

export default function StatusBadge({ status }) {
  const base =
    "inline-flex items-center px-3 py-1 text-sm font-semibold rounded-full";

  if (status === "Present")
    return <span className={`${base} bg-emerald-500 text-white`}>Present</span>;

  if (status === "Late")
    return <span className={`${base} bg-amber-400 text-white`}>Late</span>;

  if (status === "Absent")
    return <span className={`${base} bg-red-500 text-white`}>Absent</span>;

  if (status === "Half Day")
    return <span className={`${base} bg-sky-500 text-white`}>Half Day</span>;

  return (
    <span className={`${base} bg-gray-200 text-gray-800`}>{status}</span>
  );
}
