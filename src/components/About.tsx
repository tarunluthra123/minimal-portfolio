import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { PersonalInfo, Skill } from '../types';
import TarunPhoto from '../assets/tarun.jpg'

interface AboutProps {
  personalInfo: PersonalInfo;
  skills: Skill[];
}

export function About({ personalInfo, skills }: AboutProps) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <img
          src={TarunPhoto}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover ring-2 ring-blue-100 ring-offset-4"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {personalInfo.name}
          </h2>
          <p className="text-xl text-gray-600">{personalInfo.title}</p>
        </div>
      </div>

      <p className="text-gray-600 max-w-2xl mx-auto text-center text-lg">
        {personalInfo.bio}
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-blue-500 mb-4">{skill.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-6">
        <a
          href={personalInfo.github}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href={personalInfo.linkedin}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="text-gray-600 hover:text-gray-900 transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}