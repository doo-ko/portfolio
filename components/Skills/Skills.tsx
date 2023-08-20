import React from 'react';
import Image from 'next/image';

import skillmap from 'public/skillmap.svg'
import './skills.css';

export const Skills: React.FC = () => {
  return (
    <section className='skills' id='Skills'>
      <p className='title'>開発スキル</p>
      <div className='skillsDetail'>
        <ul>
          <li className='list'>
            Next.js / JQuery<br></br>
            <ul>
              <li className='skillsDetailText'>非同期処理の実装（絞り込み・ソート機能、オートページジャ機能の実装）</li>
              <li className='skillsDetailText'>APIの統合（リクエスト・レスポンスの扱い）</li>
              <li className='skillsDetailText'>DOM操作</li>
            </ul>
          </li>
          <li className='list'>
            CakePHP<br></br>
            <ul>
              <li className='skillsDetailText'>APIの統合（リクエスト・レスポンスの扱い）</li>
              <li className='skillsDetailText'>ルーティング周りの設定</li>
            </ul>
          </li>
          <li className='list'>
            CI/CDの速度改善<br></br>
            <ul>
              <li className='skillsDetailText'>screwdriverパイプラインの改善</li>
              <li className='skillsDetailText'>トランスパイル/ビルドの速度改善</li>
            </ul>
          </li>
          <li className='list'>
            HTML/CSS<br></br>
            <ul>
              <li className='skillsDetailText'>レスポンシブデザインの実装</li>
              <li className='skillsDetailText'>アクセシビリティの考慮</li>
            </ul>
          </li>
        </ul>
        <Image className='skillmapImage' src={skillmap} alt='profile image' width={320} height={180} />
      </div>
    </section>
  );
};
