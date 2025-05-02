import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Certification from "./components/Certification";
import Summary from "./components/Summary";

function App() {
  const [resume, setResume] = useState(null);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resume.json`)
      .then(res => res.json())
      .then(setResume);

    // Detect print mode
    const beforePrint = () => setIsPrinting(true);
    const afterPrint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);

    // Apply dark mode to document on initial load
    document.documentElement.classList.toggle('dark', isDarkMode);

    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  if (!resume) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className={`relative max-w-5xl mx-auto my-8 mb-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-md
      ${!isPrinting ? 'shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)]' : 'shadow-none'} 
      border ${isDarkMode ? 'border-gray-700' : 'border-gray-100'} p-14 md:p-20 font-sans 
      ${!isPrinting ? 'transform hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)] transition-all duration-300 ease-in-out' : ''} 
      ${isDarkMode ? 'text-[#3282b8]' : 'text-[#00629b]'} print:shadow-none print:border-0 print:p-8 print:mx-8 print:max-w-none print:bg-white print:text-[#00629b]`}>
      
      {/* Theme toggle button */}
      <button 
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 print:hidden"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          // Sun icon for light mode
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        ) : (
          // Moon icon for dark mode
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        )}
      </button>
      
      <header className="mb-8 pb-4 print:mb-8">
        <h1 className={`text-5xl font-bold ${isDarkMode ? 'text-gray' : ''} print:text-gray`}>{resume.basics.name}</h1>
        <h2 className={`text-3xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{resume.basics.label}</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-4 print:grid-cols-3 print:gap-4">
          <aside className="md:col-span-1 space-y-6 print:col-span-1 print:space-y-3 print:break-inside-avoid">
            <Contact basics={resume.basics} isDarkMode={isDarkMode} />
          </aside>
          <div className="md:col-span-2 space-y-6 print:col-span-2 print:space-y-3">
            <Summary summary={resume.basics.summary} isDarkMode={isDarkMode} />
          </div>
        </div>
      </header>
      <main className="space-y-8 print:space-y-4">
        <Skills skills={resume.skills} isDarkMode={isDarkMode} />
        <Experience work={resume.work} isDarkMode={isDarkMode} />
        <Education education={resume.education} isDarkMode={isDarkMode} />
        <Certification certificates={resume.certificates} isDarkMode={isDarkMode} />
        <Languages languages={resume.languages} isDarkMode={isDarkMode} />
      </main>
      <footer className="py-6 mt-8 print:hidden"></footer>
    </div>
  );
}

export default App;