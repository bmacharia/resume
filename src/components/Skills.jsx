import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Skills({ skills, isDarkMode }) {
    return (
      <section className="print:break-inside-avoid">
        <HeaderWithLine title="Skills" />
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx} className={`${isDarkMode ? 'text-gray-500' : 'text-gray-700'} text-sm print:text-gray-700`}>
              <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} font-bold print:text-gray-700`}>{skill.name}:</span> {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    );
  }