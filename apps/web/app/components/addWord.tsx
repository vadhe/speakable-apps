'use client';

import { supabaseServer } from '@speakable-apps/shared/supabase';
interface FormData {
  definition_en: string;
  definition_id: string;
  example_en: string;
  example_id: string;
  word: string;
}

export default async function AddWord() {
  const addWord = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const definition_en = formData.get('definition_en');
    const definition_id = formData.get('definition_id');
    const example_en = formData.get('example_en');
    const example_id = formData.get('example_id');
    const word = formData.get('word');

    try {
      const { data, error } = await supabaseServer
        .from('words')
        .insert([
          {
            definition_en,
            definition_id,
            example_en,
            example_id,
            word,
          },
        ])
        .select();
      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Tambah Kata</h2>
      <form onSubmit={addWord}>
        <div className="mb-4">
          <label
            htmlFor="definition_en"
            className="block text-sm font-medium text-gray-700"
          >
            Definition (English)
          </label>
          <input
            type="text"
            id="definition_en"
            name="definition_en"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="definition_id"
            className="block text-sm font-medium text-gray-700"
          >
            Definition ID
          </label>
          <input
            type="text"
            id="definition_id"
            name="definition_id"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="example_en"
            className="block text-sm font-medium text-gray-700"
          >
            Example (English)
          </label>
          <input
            type="text"
            id="example_en"
            name="example_en"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="example_id"
            className="block text-sm font-medium text-gray-700"
          >
            Example ID
          </label>
          <input
            type="text"
            id="example_id"
            name="example_id"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="word"
            className="block text-sm font-medium text-gray-700"
          >
            Word
          </label>
          <input
            type="text"
            id="word"
            name="word"
            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
