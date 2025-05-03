import React from 'react';
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Education({ education, isDarkMode }) {
  return (
    <section>
      <HeaderWithLine title="Education" />
      <div className="space-y-6">
        {education.map((ed, idx) => (
          <div
            key={idx}
            className={`${idx !== education.length - 1 ? `border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}` : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{ed.studyType} in {ed.area}</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-lg font-semibold print:text-gray-500`}>{ed.institution}</div>
                {ed.gpa && <div className="text-gray-500 text-sm text-justify print:text-gray-500">{ed.gpa}</div>}
              </div>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} text-sm print:text-gray-500`}>
                {formatDate(ed.startDate)} - {ed.endDate ? formatDate(ed.endDate) : "Present"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}