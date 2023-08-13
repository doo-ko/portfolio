import React from 'react';
import Image from 'next/image';

import thinking from 'public/thinking.png'
import './achievements.css';

export const Achievements: React.FC = () => {
  return (
    <section className='achievements' id='Achievements'>
      <p className='title'>Achievements</p>
      <div className='achievementsDetail'>
        <ul>
          <div className='subTitle'>社内ワーキンググループ活動</div>
          <li className='achievement'>
            <span className='achievementText'>会議室予約ツール作成<br></br>Reactにて、会議室の予約管理を行うツールの作成に参加。画面実装やAPIとのつなぎ部分を担当</span>
          </li>
          <li className='achievement'>
            <span className='achievementText'>部員紹介ページを作成<br></br>実装を5人で進めており、取りまとめを行う。主にフロントエンド実装を担当しており、現在実装中</span>
          </li>
        </ul>
      </div>
      <div className='achievementsDetail'>
        <ul className='achievementsList'>
          <div className='subTitle'>社内プログラミングコンテスト</div>
          <li className='achievement'>
            <span className='achievementText'>テーマ：大量のデータを扱う処理速度とメモリを競う<br></br>5人チームで参加し、実装を分担。入賞はできず。。</span>
          </li>
          <li className='achievement'>
            <span className='achievementText'>テーマ：社内勤怠管理ツールのUI刷新<br></br>6人チームで主にフロントエンドの実装・レビューを担当し、総合2位に入賞</span>
          </li>
          <li className='achievement'>
            <span className='achievementText'>テーマ：画像生成AIの作成<br></br>...comming soon</span>
          </li>
        </ul>
        <div><Image src={thinking} alt='profile image' width={240} height={240}/></div>
      </div>
    </section>
  );
};
