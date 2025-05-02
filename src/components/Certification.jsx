import React from 'react';
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Certification({ certificates, isDarkMode }) {
  return (
    <section>
      <HeaderWithLine title="Certification" />
      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div className="flex flex-col md:flex-row md:justify-between">
            <div key={idx}>
              <div className="font-semibold">{cert.name}</div>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} print:text-gray-500`}>{cert.issuer}</div>
              <div className="text-gray-500 text-sm text-justify">{cert.description}</div>
            </div>
            <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} print:text-gray-500`}>
              {formatDate(cert.startDate)} - {cert.endDate ? formatDate(cert.endDate) : "Present"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}