import React from 'react';
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Education({ education }) {
  return (
    <section>
      <HeaderWithLine title="Education" />
      <div className="space-y-6">
        {education.map((ed, idx) => (
          <div
            key={idx}
            className={`${idx !== education.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{ed.studyType} in {ed.area}</div>
                <div className="text-gray-500 dark:text-gray-400 text-lg font-semibold print:text-gray-500">{ed.institution}</div>
                {ed.gpa && <div className="text-gray-500 text-base text-justify print:text-gray-500">{ed.gpa}</div>}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base print:text-gray-500">
                {formatDate(ed.startDate)} - {ed.endDate ? formatDate(ed.endDate) : "Present"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}