'use client';

import { supabaseClient } from '@speakable-apps/shared/supabase';
import Link from 'next/link';

export default async function Word() {
  const { data: words } = await supabaseClient.from('words').select('*');

  return (
    <>
      <Link href="/backoffice/word/create">
        <button>Add Word</button>
      </Link>
      <table className="table-auto w-auto border-collapse ">
        <thead className="text-left">
          <tr>
            <th className="border border-slate-300">Word</th>
            <th className="border border-slate-300">Definition ID</th>
            <th className="border border-slate-300">Definition EN</th>
            <th className="border border-slate-300">Example ID</th>
            <th className="border border-slate-300">Example EN</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {words?.map((word) => {
            return (
              <tr key={word.word}>
                <td className="border border-slate-300">{word.word}</td>
                <td className="border border-slate-300">
                  {word.definition_id}
                </td>
                <td className="border border-slate-300">
                  {word.definition_en}
                </td>
                <td className="border border-slate-300">{word.example_id}</td>
                <td className="border border-slate-300">{word.example_en}</td>
                <td className="border border-slate-300">Hapus Edit Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
