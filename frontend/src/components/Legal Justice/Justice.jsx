import React from 'react';
import './justice.css';
import lawsData from './lawsData';
import LawCard from './LawCard';

export const Justice = () => {
  return (
    <div className='justice-box'>
    <h1>Welcome to Legal Justice</h1>
    <p>Lorem ipsum generator is itelf <span>Adnan Sameer, bakwaas joke h</span> hahaha lol so much</p>
    <div className='law-card-grid'>
    {lawsData.map((law, index) => (
    <LawCard
        key={index} // Don't forget to add a unique key for each LawCard
        imageSrc={law.imageSrc}
        title={law.type}
        description={law.description}
        link={law.link}
    />
    ))}
    </div>
    </div>
  )
}
