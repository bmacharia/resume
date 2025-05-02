import React from 'react'

export default function Education({ education }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2 uppercase">Education</h2>
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