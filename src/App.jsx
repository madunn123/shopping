import React from 'react';

import { useNotes } from './hooks/useNotes';

import FormNotes from './components/FormNotes';
import NoteList from './components/NoteList';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

export default function App() {
  const {
    openDialog,
    setOpenDialog,
    handleAddNewNotes,
    notesFilter,
    handleDeleteNotes,
    handleArchiveNotes,
    handleSearchNotes,
    handleEditNotes,
  } = useNotes();

  return (
    <>
      <div className="bg-slate-900 h-[100vh] flex flex-col gap-10 w-[100vw] p-10 overflow-hidden text-slate-600 overflow-y-scroll">
        <Navbar handleSearchNotes={handleSearchNotes} />

        <section className="container flex-none mx-auto note-list">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end">
              <button
                type="button"
                className="p-2 text-sm capitalize duration-500 bg-green-500 rounded-md shadow-sm cursor-pointer font-title shadow-green-900 hover:text-slate-200 hover:bg-green-700 text-slate-900"
                onClick={() => setOpenDialog(!openDialog)}
              >
                tambah note baru
              </button>
            </div>

            <div className="flex flex-col gap-10">
              <NoteList
                titleNotes="Catatan Aktif"
                notesFilter={notesFilter}
                handleDeleteNotes={handleDeleteNotes}
                handleArchiveNotes={handleArchiveNotes}
                handleEditNotes={handleEditNotes}
              />
              <NoteList
                titleNotes="Arsip catatan"
                archived
                notesFilter={notesFilter}
                handleArchiveNotes={handleArchiveNotes}
                handleDeleteNotes={handleDeleteNotes}
                handleEditNotes={handleEditNotes}
              />
            </div>
          </div>
        </section>

        <Link to="/test">testes</Link>
      </div>

      {openDialog && (
      <FormNotes
        onHide={() => setOpenDialog(!openDialog)}
        handleAddNewNotes={handleAddNewNotes}
      />
      )}
    </>
  );
}
