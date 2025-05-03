import React from 'react'
import HeaderWithLine from './HeaderWithLine'

export default function Summary({ summary, isDarkMode }) {
  return (
    <section className="print:break-inside-avoid">
      <HeaderWithLine title="Summary" />
      <div className="space-y-6">
        <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-700'} text-sm text-justify print:text-gray-500`}>{summary}</p>
      </div>
    </section>
  );
}