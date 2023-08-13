import React from 'react';
import Image from 'next/image';

import profileImage from 'public/aboutMe.png'
import './aboutMe.css';

export const AboutMe: React.FC = () => {
  return (
    <section className='aboutMe' id='AboutMe'>
      <div className='aboutMeDetail'>
        <p className='title'><span>About</span>Me</p>
        <p>遠藤 想（ENDO KOKORO）</p>
        <p>ニックネーム：えんどぅー</p>
        <div className='workDetail'>
          <div className='subTitle'>Works</div>
          <ul>
            <li>
              <span>大手ECサイトの社内で使用される、ストアや商品の違反報告を管理するツールの開発。</span>
            </li>
            <li >
              <span>大手ECサイトのフロントエンド開発を担当。<br></br>新規機能追加や機能改善、PHPからReactへのリプレースも担当。</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='profileImageContent'><Image src={profileImage} alt='profile image' width={320} height={320}/></div>
    </section>
  );
};
