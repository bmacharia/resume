import React from 'react';
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Certification({ certificates }) {
  return (
    <section>
      <HeaderWithLine title="Certification" />
      <div className="space-y-6">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className={`${idx !== certificates.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{cert.name}</div>
                <div className="text-gray-500 dark:text-gray-400 text-lg font-semibold print:text-gray-500">{cert.issuer}</div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base print:text-gray-500">
                {formatDate(cert.startDate)} - {cert.endDate ? formatDate(cert.endDate) : "Present"}
              </div>
            </div>
            <div className="text-gray-700 dark:text-gray-500 text-base text-justify print:text-gray-700">{cert.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}