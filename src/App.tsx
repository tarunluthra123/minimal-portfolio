import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { personalInfo, skills, experiences, blogs } from './data';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        personalInfo={personalInfo}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="max-w-5xl mx-auto px-4 py-12">
        {activeSection === 'about' && <About personalInfo={personalInfo} skills={skills} />}
        {activeSection === 'experience' && <Experience experiences={experiences} />}
        {activeSection === 'blog' && <Blog blogs={blogs} />}
      </main>

      <Footer personalInfo={personalInfo} />
    </div>
  );
}

export default App;