import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Education({ education }) {
    return (
      <section>
        <HeaderWithLine title="Education" />
        <div className="space-y-4">
          {education.map((ed, idx) => (
            <div key={idx}>
              <div className="font-semibold">{ed.institution}</div>
              <div className="text-gray-600">{ed.studyType} in {ed.area}</div>
              <div className="text-gray-500 text-sm">{ed.startDate} - {ed.endDate}</div>
              {ed.gpa && <div className="text-gray-500 text-sm">{ed.gpa}</div>}
            </div>
          ))}
        </div>
      </section>
    );
  }