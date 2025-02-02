import React from 'react';
import { PersonalInfo } from '../types';

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}