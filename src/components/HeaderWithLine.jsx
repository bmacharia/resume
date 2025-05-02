import React from 'react'

export default function HeaderWithLine({ title }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex-grow h-px bg-gray-400"></div>
      <h2 className="text-xl font-bold uppercase px-4">{title}</h2>
      <div className="flex-grow h-px bg-gray-400"></div>
    </div>
  );
}