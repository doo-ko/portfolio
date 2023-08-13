import React from 'react';
import Image from 'next/image';

import skillmap from 'public/skillmap.svg'
import './skills.css';

export const Skills: React.FC = () => {
  return (
    <section className='skills' id='Skills'>
      <p className='title'>Skills</p>
      <div className='skillmapImageContent'><Image className='skillmapImage' src={skillmap} alt='profile image' width={320} height={180}/></div>
    </section>
  );
};
