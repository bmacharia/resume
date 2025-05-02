import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Languages({ languages }) {
    return (
      <section>
        <HeaderWithLine title="Languages" />
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