import React from 'react';
// import { FileText } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeaderProps {
  personalInfo: PersonalInfo;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Header({ personalInfo, activeSection, setActiveSection }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900">{personalInfo.name}</h1>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setActiveSection('about')}
              className={`${activeSection === 'about' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveSection('experience')}
              className={`${activeSection === 'experience' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
            >
              Experience
            </button>
            <button 
              onClick={() => setActiveSection('blog')}
              className={`${activeSection === 'blog' ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-500 transition-colors`}
            >
              Blog
            </button>
            {/* <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </a> */}
          </div>
        </div>
      </nav>
    </header>
  );
}