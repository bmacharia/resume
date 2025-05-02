import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Languages({ languages }) {
    return (
      <section>
        <HeaderWithLine title="Languages" />
        <ul className="list-disc list-inside space-y-1">
          {languages.map((lang, idx) => (
            <li key={idx} className="text-sm text-gray-700">
              <span className="font-semibold text-gray-700 print:text-gray-700">{lang.language}</span> ({lang.fluency})
            </li>
          ))}
        </ul>
      </section>
    );
  }