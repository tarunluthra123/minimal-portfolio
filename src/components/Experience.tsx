import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-100 pl-4 space-y-2">
            <div className="flex justify-between items-start">
              <a href={exp.companyLink} target="_blank" rel="noopener noreferrer">
                <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
              </a>
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>
            <p className="text-gray-600 font-medium">{exp.position}</p>
            <p className="text-gray-600">{exp.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.tech.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}