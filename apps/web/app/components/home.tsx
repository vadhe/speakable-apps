'use client';

import { Search, Card, Button } from '@speakable-apps/shared/ui';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dpbhbkctsaezcwkuolbv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwYmhia2N0c2FlemN3a3VvbGJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxODgxMzEsImV4cCI6MjAwNzc2NDEzMX0.ekz4bQW1pnV0TBcMWtD2yi8cpe-Loye6WMZLota5lSw';

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
          <p className="text-center mt-6">kata yang anda cari belum tersedia</p>
        ) : null}
      </div>
    </div>
  );
}
