import React from 'react'

export default function Contact({ basics }) {
    return (
      <section>
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Email:</span>{" "}
            <a href={`mailto:${basics.email}`} className="text-blue-600 underline">{basics.email}</a>
          </div>
          {basics.profiles.map(profile => (
            <div key={profile.network}>
              <a
                href={profile.url}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.network}: {profile.username}
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }