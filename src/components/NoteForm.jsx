import React, { useContext, useState } from 'react'
import NoteContext from '../contexts/NoteContext';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { addNotes } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    addNotes({
      title,
      body,
    });

    setTitle(''); // berfungsi untuk mereset ketika user sudah menekan button submit
    setBody('');
  }

  return (
    <section className='container mx-auto'>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className='text-lg'>Buat catatan</h1>

        <div className="flex flex-col gap-1.5">
          <div className="flex flex-col gap-1">
            <span className='capitalize text-sm'>title</span>
            <input
              type="text"
              className='bg-transparent border border-slate-400 p-2 focus:outline-red-500 outline-none duration-300 rounded-sm'
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <small className='capitalize ml-auto'>sisa karakter : 50</small>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-sm capitalize">catatan</span>
          <textarea
            rows="10"
            className='bg-transparent border border-slate-400 p-2 focus:outline-red-500 outline-none duration-300 rounded-sm'
            onChange={(e) => setBody(e.target.value)}
          >
          </textarea>
        </div>

        <button type='submit' className='bg-slate-600 p-3 capitalize font-semibold rounded-sm text-slate-300'>buat catatan</button>
      </form>
    </section>
  )
}
