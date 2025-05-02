import React from 'react'

export default function Languages({ languages }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2">Languages</h2>
        <ul className="list-disc list-inside space-y-1">
          {languages.map((lang, idx) => (
            <li key={idx}>
              {lang.language} ({lang.fluency})
            </li>
          ))}
        </ul>
      </section>
    );
  }