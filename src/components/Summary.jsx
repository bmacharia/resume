import React from 'react'

export default function Summary({ summary }) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-2 uppercase">Summary</h2>
      <div className="space-y-4">
        <p className="text-gray-700">{summary}</p>

      </div>
    </section>
  );
}