import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Languages({ languages, isDarkMode }) {
    return (
      <section>
        <HeaderWithLine title="Languages" />
        <ul className="list-disc list-inside space-y-1">
          {languages.map((lang, idx) => (
            <li key={idx} className="text-sm text-gray-500">
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-semibold print:text-gray-500`}>{lang.language}</span> ({lang.fluency})
            </li>
          ))}
        </ul>
      </section>
    );
  }