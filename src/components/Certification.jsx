import React from 'react';
import HeaderWithLine from './HeaderWithLine';

export default function Certification({ certificates }) {
    return (
      <section>
        <HeaderWithLine title="Certification" />
        <div className="space-y-4">
          {certificates.map((cert, idx) => (
            <div key={idx}>
              <div className="font-semibold">{cert.issuer}</div>
              <div className="text-gray-600">{cert.name}</div>
              <div className="text-gray-500 text-sm">{cert.startDate} - {cert.endDate}</div>
              <div className="text-gray-500 text-sm">{cert.description}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }