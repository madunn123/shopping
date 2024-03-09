import React from 'react'
import Navigation from './components/Navigation'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import { NoteProvider } from './contexts/NoteContext'
import useNotes from './hooks/useNotes'
import { getInitialData } from './utils'

export default function App() {
    const notesValue = useNotes(getInitialData());

    return (
        <NoteProvider value={notesValue}>
            <Navigation />

            <div className="py-10 flex flex-col xl:gap-20">
                <NoteForm />

                <div className="flex flex-col gap-4">
                    <h1 className='text-xl text-center uppercase'>Catatan Aktif</h1>
                    <NoteList />

                    <h1 className='text-xl text-center uppercase'>Catatan Arsip</h1>
                    <NoteList archived />
                </div>
            </div>
        </NoteProvider>
    )
}
