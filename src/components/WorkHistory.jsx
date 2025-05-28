import React from 'react'
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function WorkHistory({ work }) {
  return (
    <section >
      <HeaderWithLine title="Professional Experience" />
      <div className="space-y-6">
        {work.map((job, idx) => (
          <div
            key={idx}
            className={`${idx !== work.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{job.position}</div>
                <div className="text-gray-500 dark:text-gray-400 text-lg font-semibold print:text-gray-500">{job.company}</div>
                {job.team && <div className="text-gray-500 text-base text-justify print:text-gray-500">{job.team}</div>}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base print:text-gray-500">
                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : "Present"}
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.highlights.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-500 text-base text-justify print:text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}