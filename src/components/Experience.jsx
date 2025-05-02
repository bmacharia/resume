import React from 'react'
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Experience({ work }) {
  return (
    <section>
      <HeaderWithLine title="Experience" />
      <div className="space-y-6">
        {work.map((job, idx) => (
          <div
            key={idx}
            className={`${idx !== work.length - 1 ? 'border-b' : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{job.position}</div>
                <div className="text-lg font-semibold text-gray-600">{job.company}</div>
                {job.team && <div className="text-gray-500 text-sm">{job.team}</div>}
              </div>
              <div className="text-gray-500">
                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : "Present"}
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.highlights.map((item, i) => (
                <li key={i} className="text-sm text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}