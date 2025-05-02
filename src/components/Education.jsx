import React from 'react'

export default function Education({ education, certificates }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2">Education</h2>
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
        {certificates && certificates.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mt-4">Certifications</h3>
            <ul className="list-disc list-inside space-y-1">
              {certificates.map((cert, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{cert.name}</span> — {cert.issuer}
                  {cert.description && <div className="text-gray-500 text-sm">{cert.description}</div>}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    );
  }