'use client';

import { useWordStore } from '@speakable-apps/shared/store';
import { Search, Card } from '@speakable-apps/shared/ui';
import { useState } from 'react';
const DUMMYWORDS = [
  {
    definition: {
      en: 'infml to go to bed in order to sleep',
      id: 'Idiom ini artinya tidur dan biasanya ini menandakan bahwa kita sangat lelah dan ingin segera beristirahat'
    },
    example: {
      en: 'I’m so tired, I think I’m going to hit the sack',
      id: 'Saya sangat lelah, saya pikir saya akan tidur'
    },
    word: 'HIT THE SACK',
  },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const { word, setWord } = useWordStore();
  return (
    <div>
      <div className="bg-black h-screen text-tertiary  lg:w-30 mx-auto mt-8 rounded-lg p-2">
        <h1 className="font-monoton text-2xl text-center my-6">
          SPEAKABLE-APP
        </h1>
        <Search
          placeHolder="Cari Idiom"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {word ? (
          <>
            <p className="my-6 text-center w-full break-all">{search}</p>
            <div className="my-6">
              <Card title='Definition (Definisi)' textEn={DUMMYWORDS[0].definition.en} textId={DUMMYWORDS[0].definition.id} />
            </div>
            <Card title='Example (contoh)' textEn={DUMMYWORDS[0].example.en} textId={DUMMYWORDS[0].example.id} />
          </>
        ) : (
          <p>selamat datang</p>
        )}
      </div>
    </div>
  );
}
