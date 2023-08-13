"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

import './header.css';

type HeaderProps = {
  tabList: string[];
  activeTab: string;
  setActiveTab:(tab: string)=>void;
}

export const Header = ({ tabList, activeTab, setActiveTab}: HeaderProps) => {
  const router = useRouter();
  return (
    <header>
    <nav className="header">
      {tabList.map((tab) => (
        <label className="tab">
            <button
              className={activeTab === tab ? 'tabContent__active' : 'tabContent'}
              onClick={()=>{
                setActiveTab(tab);
                router.push(`#${tab}`);
              }}>
              {tab}
            </button>
        </label>
      ))}
    </nav>
  </header>
  )
};
