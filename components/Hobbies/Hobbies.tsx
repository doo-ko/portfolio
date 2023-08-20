import React from 'react';
import Image from 'next/image';

import house from 'public/house.png'
import room from 'public/room.png'

import './hobbies.css';

export const Hobbies: React.FC = () => {
  return (
    <section className='hobbies' id='Hobbies'>
      <div className='title'>Hobbies</div>
      <div className="hobbie">
        <div className="hobbieList">
          <div className='subTitle'>Hobbies</div>
          <ul>
            <li className='list'>
              2Dモデリング<br></br>
              <span className='hobbieListText'>Live2Dを使用し、Vtuberのイラストに、瞬きや口の動きを付ける</span>
            </li>
            <li className='list'>
              3Dモデリング<br></br>
              <span className='hobbieListText'>blenderを使用し、3次元空間にオブジェクトを作成したりする※写真参照</span>
            </li>
          </ul>
        </div>
        <div className='hobbieImage'>
          <Image src={house} alt='profile image' width={320} height={320} />
          <Image src={room} alt='profile image' width={320} height={320} />
        </div>
      </div>
    </section>
  );
};
