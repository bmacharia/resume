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

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resume.json`)
      .then(res => res.json())
      .then(setResume);
  }, []);

  if (!resume) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="text-sm max-w-5xl mx-auto bg-white rounded-md shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)] border border-gray-100 p-6 md:p-8 font-sans transform hover:shadow-[0_14px_28px_rgba(0,0,0,0.25),_0_10px_10px_rgba(0,0,0,0.22)] transition-all duration-300 ease-in-out text-[#00629b] print:shadow-none print:border-0 print:p-3 print:max-w-none">
      <header className="mb-8 border-b pb-4 print:mb-4">
        <h1 className="text-4xl font-bold print:text-gray-700">{resume.basics.name}</h1>
        <h2 className="text-2xl text-gray-600">{resume.basics.label}</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-4 print:grid-cols-3 print:gap-4">
          <aside className="md:col-span-1 space-y-6 print:col-span-1 print:space-y-3 print:break-inside-avoid">
            <Contact basics={resume.basics} />
          </aside>
          <div className="md:col-span-2 space-y-6 print:col-span-2 print:space-y-3">
            {/* <p className="text-gray-700">{resume.basics.summary}</p>  */}
            <Summary summary={resume.basics.summary} />

          </div>
        </div>
      </header>
      <main className="space-y-8 print:space-y-4">
        <Experience work={resume.work} />
        <Skills skills={resume.skills} />
        <Languages languages={resume.languages} />
        <Education education={resume.education} />
        <Certification certificates={resume.certificates} />
      </main>
    </div>
  );
}

export default App;