import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Skills({ skills }) {
    return (
      <section className="print:break-inside-avoid">
        <HeaderWithLine title="Skills" />
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx} className="text-sm text-gray-700 print:text-gray-700">
              <span className="font-semibold text-gray-700 print:text-gray-700">{skill.name}:</span> {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    );
  }