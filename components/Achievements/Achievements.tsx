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
          <li className='list'>
            会議室予約ツール作成<br></br>
            <span className='achievementText'>Reactを使用し、会議室の予約管理を行うツールの作成に参加。画面実装やAPIとのつなぎ部分を担当</span>
          </li>
          <li className='list'>
            部員紹介ページを作成中<br></br>
            <span className='achievementText'>Reactを使用し、実装を5人で進めており、取りまとめを行っている。画面の実装からAPI疎通部分を担当している</span>
          </li>
        </ul>
      </div>
      <div className='achievementsDetail'>
        <ul className='achievementsList'>
          <div className='subTitle'>社内プログラミングコンテスト</div>
          <li className='list'>
            テーマ：大量のデータを扱う処理速度とメモリを競う<br></br>
            <span className='achievementText'>言語はJavaScriptを使用し、5人チームで参加。<br></br>1万件のデータを分析し、結果を出力するシステムを実装。</span>
          </li>
          <li className='list'>
            テーマ：社内勤怠管理ツールのUI刷新<br></br>
            <span className='achievementText'>言語はReactを使用し、6人チームで画面の見た目と動きの部分をhooksを使用して実装。総合2位に入賞</span>
          </li>
          <li className='list'>
            テーマ：画像生成AIの作成<br></br>
            <span className='achievementText'>...comming soon（今年9月から着手予定）</span>
          </li>
        </ul>
        <div><Image src={thinking} alt='profile image' width={240} height={240}/></div>
      </div>
    </section>
  );
};
