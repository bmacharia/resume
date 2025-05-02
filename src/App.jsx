import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Languages from "./components/Languages";

function App() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}resume.json`)
      .then(res => res.json())
      .then(setResume);
  }, []);

  if (!resume) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 font-sans">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold">{resume.basics.name}</h1>
        <h2 className="text-2xl text-gray-600">{resume.basics.label}</h2>
        <p className="mt-2 text-gray-700">{resume.basics.summary}</p>
      </header>
      <div className="grid md:grid-cols-3 gap-8">
        <aside className="md:col-span-1 space-y-6">
          <Contact basics={resume.basics} />
          <Skills skills={resume.skills} />
          <Languages languages={resume.languages} />
        </aside>
        <main className="md:col-span-2 space-y-8">
          <Experience work={resume.work} />
          <Education education={resume.education} certificates={resume.certificates} />
        </main>
      </div>
    </div>
  );
}

export default App;