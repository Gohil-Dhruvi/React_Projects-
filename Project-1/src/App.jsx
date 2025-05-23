import React from 'react';
import UserProfileCard from './Components/UserProfileCard/UserProfileCard';
import AdaLovelacePortrait from './assets/Ada_Lovelace_portrait.jpg';
import CohenLinusTorvalds from './assets/Cohen-Linus-Torvalds.webp';
import GraceHopper from './assets/Grace_Hopper_andjpg.jpg';
import GuidoVanRossum from './assets/Guido_van_Rossum_in_PyConUS24.jpg';
import Hamilton from './assets/Hamilton.webp';
import JamesGosling from './assets/james-gosling.jpg';
import './App.css';

function App() {
  const profiles = [
    {
      name: 'Linus Torvalds',
      location: 'Helsinki, Finland',
      profession: 'Software Engineer',
      email: 'linus@linux.org',
      phone: '+358-123456789',
      company: 'Linux Foundation',
      image: AdaLovelacePortrait,
      birthday: 'December 28, 1969',
      bio: 'Creator of Linux and Git. Advocates open-source development.'
    },
    {
      name: 'Guido van Rossum',
      location: 'The Netherlands',
      profession: 'Programmer',
      email: 'guido@python.org',
      phone: '+31-987654321',
      company: 'Python Software Foundation',
      image: CohenLinusTorvalds,
      birthday: 'January 31, 1956',
      bio: 'Creator of Python, known for clean and readable code.'
    },
    {
      name: 'Grace Hopper',
      location: 'USA',
      profession: 'Navy Admiral',
      email: 'grace@navy.mil',
      phone: 'N/A',
      company: 'U.S. Navy',
      image: GraceHopper,
      birthday: 'December 9, 1906',
      bio: 'Pioneer of programming, developed the first compiler.'
    },
    {
      name: 'Ada Lovelace',
      location: 'London, England',
      profession: 'Mathematician & Programmer',
      email: 'ada@analyticalengine.org',
      phone: 'N/A',
      company: 'Worked with Charles Babbage',
      image: GuidoVanRossum,
      birthday: 'December 10, 1815',
      bio: 'Wrote the first algorithm. Known as the first computer programmer.'
    },
    {
      name: 'James Gosling',
      location: 'Calgary, Canada',
      profession: 'Computer Scientist',
      email: 'gosling@java.com',
      phone: '+1-5555555555',
      company: 'Sun Microsystems',
      image: Hamilton,
      birthday: 'May 19, 1955',
      bio: 'James Gosling is the creator of Java programming.'
    },
    {
      name: 'Margaret Hamilton',
      location: 'Indiana, USA',
      profession: 'Software Engineer',
      email: 'hamilton@nasa.gov',
      phone: 'N/A',
      company: 'NASA',
      image: JamesGosling,
      birthday: 'August 17, 1936',
      bio: 'Led NASA’s Apollo software team. Coined "software engineering".'
    }
  ];

  return (
    <div className="container">
       <h1 className="section-heading">Legend Engineers</h1> 
      <div className="row">
        {profiles.map((person, index) => (
          <div className="col-md-4" key={index}>
            <UserProfileCard {...person} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
