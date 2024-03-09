import React, { useContext } from 'react'
import { CiSearch } from "react-icons/ci";
import NoteContext from '../contexts/NoteContext';

export default function Navigation() {
  const { searchNote, keyword } = useContext(NoteContext);

  return (
    <nav className='py-4 border-b border-slate-400'>
      <div className="container flex flex-row items-center justify-between mx-auto nav-container">
        <h1 className="font-semibold uppercase title-nav xl:text-2xl text-slate-200">Personal Notes</h1>

        <div className="relative">
          <input
            value={keyword}
            type="text"
            placeholder='cari catatan'
            className='bg-transparent border border-slate-400 p-2.5 placeholder:text-base placeholder:capitalize rounded-sm focus:outline-red-500 outline-none duration-300 text-slate-400'
            onChange={(e) => searchNote(e.target.value)}
          />
          <div className="absolute top-0 flex items-center h-full right-2">
            <CiSearch className='text-slate-400 xl:text-2xl' />
          </div>
        </div>
      </div>
    </nav>
  )
}
