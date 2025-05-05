import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Skills({ skills }) {
    return (
      <section className="print:break-inside-avoid">
        <HeaderWithLine title="Skills" />
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-500 text-base text-justify print:text-gray-700">
              <span className="text-gray-500 dark:text-gray-400 text-lg font-semibold print:text-gray-500">{skill.name}:</span> {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    );
  }