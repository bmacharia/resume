import React from 'react'

export default function Contact({ basics, isDarkMode }) {
    const getIconPath = (network) => {
      return `${import.meta.env.BASE_URL}icons/${network.toLowerCase()}.svg`;
    };
  
    return (
      <section>
        <div className="text-sm space-y-2">
          <div className="flex items-center gap-2">
            <img 
              src={`${import.meta.env.BASE_URL}icons/email.svg`} 
              alt="Email" 
              className="w-5 h-5 blue-icon" 
            />
            <a href={`mailto:${basics.email}`} className={`${isDarkMode ? 'text-gray-500' : 'text-gray-700'} underline`}>{basics.email}</a>
          </div>
          {basics.profiles.map(profile => (
            <div key={profile.network} className="flex items-center gap-2">
              <img 
                src={getIconPath(profile.network)} 
                alt={profile.network} 
                className="w-5 h-5 blue-icon"
              />
              <a
                href={profile.url}
                className={`${isDarkMode ? 'text-gray-500' : 'text-gray-700'} text-sm underline`}
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