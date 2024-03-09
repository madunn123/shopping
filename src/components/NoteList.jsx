import React, { useContext } from 'react'
import NoteContext from '../contexts/NoteContext';
import { showFormattedDate } from '../utils';

export default function NoteList({ archived = false }) {
  const { filteredNotes, deleteNote, noteArchived } = useContext(NoteContext);

  return (
    <section className='container mx-auto'>
      <div className="grid grid-cols-4 gap-4">
        {
          filteredNotes(archived).map((note) => (
            <div key={note?.id} className='border border-slate-400 p-5 rounded-sm'>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <h1 className="m-0 text-lg">{note?.title}</h1>
                  <small>{showFormattedDate(note?.createdAt)}</small>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="m-0 text-base">{note?.body}</p>

                  <div className="flex flex-row items-center gap-4">
                    <button className='w-full text-red-500 uppercase font-semibold text-sm border border-slate-400 p-3 rounded-sm' onClick={() => deleteNote(note?.id)}>delete</button>
                    <button className='w-full text-yellow-500 uppercase font-semibold text-sm border border-slate-400 p-3 rounded-sm'onClick={() => noteArchived(note?.id)} >{archived ? 'pindahkan' : 'arsipkan'}</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
