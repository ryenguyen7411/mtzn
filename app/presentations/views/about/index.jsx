import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Repo from 'repo';
import Usecase from 'usecase';

function AboutPageContent ({ usecase }) {
  const contacts = usecase.Example().getContacts();

  useEffect(() => {
    usecase.Example().fetchContacts();
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        <h1>ABOUT US</h1>
        <Link href="/">Go to Homepage</Link>

        {contacts?.status === 'SUCCESS' && (
          <div className="contact-list">
            {contacts.data.map((contact) => (
              <div key={contact.get('id')} className="contact-item">
                <Image
                  src={contact.get('avatar')} alt={`Avatar of ${contact.get('name')}`}
                  width={200} height={200}
                />
                <h3>{contact.get('name')}</h3>
                <p>{contact.get('phoneNumber')}</p>
                <p>
                  See me on{' '}
                  <a href={contact.get('githubUrl')} target="_blank" rel="noreferrer">Github</a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AboutPage () {
  const repo = new Repo();
  const usecase = new Usecase(repo);

  return (
    <AboutPageContent usecase={usecase} />
  );
}
