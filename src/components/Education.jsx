import React from 'react';
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Education({ education, isDarkMode }) {
  return (
    <section>
      <HeaderWithLine title="Education" />
      <div className="space-y-4">
        {education.map((ed, idx) => (
          <div className="flex flex-col md:flex-row md:justify-between">
            <div key={idx}>
              <div className="font-semibold">{ed.studyType} in {ed.area}</div>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} print:text-gray-500`}>{ed.institution}</div>
              {ed.gpa && <div className="text-gray-500 text-sm">{ed.gpa}</div>}
            </div>
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} print:text-gray-500`}>
              {formatDate(ed.startDate)} - {ed.endDate ? formatDate(ed.endDate) : "Present"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}