import React from 'react'

export default function Experience({ work }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2 uppercase">Experience</h2>
        <div className="space-y-6">
          {work.map((job, idx) => (
            <div key={idx} className="border-b pb-4">
              <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                  <div className="font-semibold">{job.position}</div>
                  <div className="text-gray-600">{job.company}</div>
                  {job.team && <div className="text-gray-500 text-sm">{job.team}</div>}
                </div>
                <div className="text-gray-500">
                  {job.startDate} - {job.endDate || "Present"}
                </div>
              </div>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {job.highlights.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }