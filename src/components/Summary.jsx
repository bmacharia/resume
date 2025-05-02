import React from 'react'
import HeaderWithLine from './HeaderWithLine'

export default function Summary({ summary }) {
  return (
    <section className="print:break-inside-avoid">
      <HeaderWithLine title="Summary" />
      <div className="space-y-4">
        <p className="text-sm text-gray-700 text-justify">{summary}</p>
      </div>
    </section>
  );
}