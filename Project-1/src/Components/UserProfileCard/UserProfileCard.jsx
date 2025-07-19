import React from 'react';
import './UserProfileCard.css';

function UserProfileCard({ name, location, profession, email, phone, company, image, birthday, bio }) {
  return (
    <div className="card">
      <div className="card-header"></div>
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p><strong>Profession:</strong> {profession}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Birthday:</strong> {birthday}</p>
      <p className="bio"><strong>Bio:</strong> {bio}</p>
      <div className="contact-info">
        <span><strong>Email:</strong> {email}</span>
        <span><strong>Phone:</strong> {phone}</span>
      </div>
      <button className="contact-button">Contact Me</button>
    </div>
  );
}

export default UserProfileCard;
