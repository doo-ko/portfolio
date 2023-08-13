"use client";
import { useState } from 'react'

import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { AboutMe } from '@/components/AboutMe/AboutMe'
import { Achievements } from '@/components/Achievements/Achievements'
import { Hobbies } from '@/components/Hobbies/Hobbies'
import { Skills } from '@/components/Skills/Skills'

export default function Home() {
  const tabList = ['AboutMe', 'Achievements', 'Skills', 'Hobbies'];
  const [activeTab, setActiveTab] = useState(tabList[0]);
  return (
    <>
      <Header tabList={tabList} activeTab={activeTab} setActiveTab={setActiveTab}/>
      <main className="main">
        <AboutMe />
        <Achievements />
        <Skills />
        <Hobbies />
      </main>
      <Footer />
    </>
  )
};
