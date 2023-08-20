'use client';

import { Search, Card, Button } from '@speakable-apps/shared/ui';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabaseUrl = process.env.NEXT_PUBLIC_API_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_API_SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

interface Word {
  word: string;
  definition_en: string;
  example_en: string;
  definition_id: string;
  example_id: string;
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState<Word[]>([]);
  const [isEmpaty, setIsempaty] = useState(false);
  const [loading, setLoadind] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const fetchData = async () => {
    setLoadind(true);
    const { data, error } = await supabase
      .from('words')
      .select('*')
      .filter('word', 'ilike', `%${search}%`);
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setLoadind(false);
      if (!data.length) {
        setIsempaty(true);
        console.log('no result');
      }
      setData(data);
    }
  };

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
        <Button onClick={fetchData}>{loading ? 'Loading...' : ' Cari'}</Button>
        {data.length ? (
          <>
            <p className="my-6 text-center w-full break-all">{data[0].word}</p>
            <div className="my-6">
              <Card
                title="Definition (Definisi)"
                textEn={data[0].definition_en}
                textId={data[0].definition_id}
              />
            </div>
            <Card
              title="Example (contoh)"
              textEn={data[0].example_en}
              textId={data[0].example_id}
            />
          </>
        ) : null}
        {isEmpaty ? (
          <p className="text-center mt-6">
            Kata yang Anda cari belum tersedia atau coba masukkan kata lain.
          </p>
        ) : null}
        {isHome && !data.length &&  !isEmpaty ? (
          <>
            <h3 className="font-extrabold text-2xl text-center my-6">
              Selamat datang di Speakable Apps!
            </h3>
            <p className="text-center my-6">
              Temukan berbagai idiom dalam bahasa Inggris melalui platform
              pencarian kami.
            </p>
            <h4 className="text-center text-1xl mt-16">JOsIN THE COMMUNITY</h4>
            <Link href="https://discord.gg/mgyxqTAW" target="_blank">
              <Button>Discord</Button>
            </Link>
            <Link
              href="https://www.instagram.com/speakable.youth/"
              target="_blank"
            >
              <Button>Instagram</Button>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
}
