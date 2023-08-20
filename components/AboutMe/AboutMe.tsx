import React from 'react';
import Image from 'next/image';

import profileImage from 'public/aboutMe.png'
import './aboutMe.css';

export const AboutMe: React.FC = () => {
  return (
    <section className='aboutMe' id='AboutMe'>
      <div className='aboutMeDetail'>
        <p className='title'>About Me</p>
        <p className='myName'>遠藤 想（ENDO KOKORO）</p>
        <p className='myName'>ニックネーム：えんどぅー</p>
        <div className='workDetail'>
          <div className='subTitle'>Works</div>
          <ul>
            <li className='list'>
              大手ECサイトの社内ツールの改修<br></br>（2020年7月～2021年9月）<br></br>
              <span className='workDetailText'>
                ストアや商品の違反報告を管理するツールについて、独自のライブラリを使用して実装していた処理を、PHPの標準関数などに置き換える対応。<br></br>
                開発スキル：PHP（Laravel, CakePHP）
              </span>
            </li>
            <li className='list'>
              大手ECサイトのフロントエンド開発<br></br>（2021年10月～現在）<br></br>
              <span className='workDetailText'>
                チーム内では、サブリーダー兼テックリードを担当しており、ソースレビューや技術的な相談を受けている。<br></br>
                ECサイトの機能追加や機能改善を行い、詳細設計・実装・試験・リリースまで担当。<br></br>
                CakePHP, JQueryからNext.jsへのリプレース経験あり<br></br>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className='profileImageContent'><Image src={profileImage} alt='profile image' width={320} height={320} /></div>
    </section>
  );
};
