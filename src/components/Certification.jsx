import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Certification({ certificates }) {
  return (
    <section>
      <HeaderWithLine title="Certification" />
      <div className="space-y-4">
        {certificates.map((cert, idx) => (
          <div className="flex flex-col md:flex-row md:justify-between">
            <div key={idx}>
              <div className="font-semibold">{cert.name}</div>
              <div className="text-gray-600">{cert.issuer}</div>
              <div className="text-gray-500 text-sm">{cert.description}</div>
            </div>
            <div className="text-gray-500">
              {cert.startDate} - {cert.endDate || "Present"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}