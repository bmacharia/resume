import React from 'react'

export default function Languages({ languages }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2 uppercase">Languages</h2>
        <ul className="list-disc list-inside space-y-1">
          {languages.map((lang, idx) => (
            <li key={idx} className="text-gray-700">
              {lang.language} ({lang.fluency})
            </li>
          ))}
        </ul>
      </section>
    );
  }