import React from 'react'

export default function Skills({ skills }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          {skills.map((skill, idx) => (
            <li key={idx} className="text-gray-700">
              <span className="font-semibold text-gray-700">{skill.name}:</span> {skill.keywords.join(", ")}
            </li>
          ))}
        </ul>
      </section>
    );
  }