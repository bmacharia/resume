import React from 'react'
import HeaderWithLine from './HeaderWithLine';
import { formatDate } from '../utils/dateFormat';

export default function Projects({ projects }) {
  return (
    <section>
      <HeaderWithLine title="Projects" />
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`${idx !== projects.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''} pb-4`}
          >
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-xl font-semibold">{project.name}</div>
                <div className="text-gray-500 dark:text-gray-400 text-lg font-semibold print:text-gray-500">{project.technologies}</div>
                {project.description && (
                  <div className="text-gray-700 dark:text-gray-500 text-base text-justify print:text-gray-700 mt-1">
                    {project.description}
                  </div>
                )}
                <div className="flex gap-4 mt-2">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:text-blue-600 text-base"
                    >
                      Demo Link
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:text-blue-600 text-base"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-base print:text-gray-500">
                {project.endDate && formatDate(project.endDate)}
              </div>
            </div>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {project.highlights.map((item, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-500 text-base text-justify print:text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}