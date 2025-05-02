import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Skills({ skills }) {
    return (
      <section>
        <HeaderWithLine title="Skills" />
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx} className="text-gray-700">
              <span className="text-sm font-semibold text-gray-700">{skill.name}:</span> {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    );
  }