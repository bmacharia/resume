import React from 'react'

export default function Contact({ basics }) {
    const getIconPath = (network) => {
      return `${import.meta.env.BASE_URL}icons/${network.toLowerCase()}.svg`;
    };
  
    return (
      <section>
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}icons/email.svg`} alt="Email" className="w-5 h-5" />
            <a href={`mailto:${basics.email}`} className="text-blue-600 hover:underline">{basics.email}</a>
          </div>
          {basics.profiles.map(profile => (
            <div key={profile.network} className="flex items-center gap-2">
              <img 
                src={getIconPath(profile.network)} 
                alt={profile.network} 
                className="w-5 h-5"
              />
              <a
                href={profile.url}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.username}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
}