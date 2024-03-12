/* eslint-disable react/jsx-no-useless-fragment */
import React, { Fragment, useState } from 'react';

import {
  TbHttpDelete, TbHttpPut, TbArchiveFilled, TbArchiveOff,
} from 'react-icons/tb';

import { showFormattedDate } from '../utils';
import EditNotes from './EditNotes';

export default function NoteList({
  titleNotes, archived = false, notesFilter, handleDeleteNotes, handleArchiveNotes, handleEditNotes,
}) {
  const [edit, setEdit] = useState(false);
  const [noteId, setNoteId] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <h1 className="m-0 text-xl font-title text-slate-500">{titleNotes}</h1>

      <div className="grid grid-cols-4 gap-6">
        {
            notesFilter(archived).length > 0
              ? (
                <>
                  {notesFilter(archived)?.map((note) => (
                    <div className="relative group" key={note.id}>
                      <div className="p-6 duration-500 rounded-lg min-h-60 max-h-60 ring-1 ring-slate-600 group-hover:ring-green-500">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-col gap-1">
                            <h1 className="m-0 text-xl capitalize duration-500 title text-slate-400 group-hover:text-green-500">{note.title}</h1>
                            <small className="duration-500 group-hover:text-green-800">{showFormattedDate(note.createdAt)}</small>
                          </div>
                          <p className="m-0 text-sm duration-500 group-hover:text-slate-400">
                            {note.body}
                          </p>

                          <div className="absolute w-full right-3 bottom-3">
                            <div className="flex flex-row justify-end gap-4">
                              <button
                                type="button"
                                aria-label="edit"
                                onClick={() => {
                                  setEdit(!edit);
                                  setNoteId(note.id);
                                }}
                              >
                                <TbHttpPut className="text-4xl text-yellow-500 duration-500 hover:text-5xl hover:text-yellow-700" />
                              </button>

                              <button type="button" aria-label="archive" onClick={() => handleArchiveNotes(note.id)}>
                                {note.archived
                                  ? <TbArchiveOff className="text-2xl text-orange-500 duration-500 hover:text-5xl hover:text-yellow-700" />
                                  : <TbArchiveFilled className="text-2xl text-orange-500 duration-500 hover:text-5xl hover:text-yellow-700" />}
                              </button>

                              <button
                                type="button"
                                aria-label="delete"
                                onClick={() => handleDeleteNotes(note.id)}
                              >
                                <TbHttpDelete className="text-4xl text-red-500 duration-500 hover:text-5xl hover:text-red-700" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  ))}
                </>
              )
              : <h1 className="col-span-4 text-lg text-center font-title">catatan tidak ada</h1>
        }
      </div>

      {edit && (
      <EditNotes
        noteId={noteId}
        handleEditNotes={handleEditNotes}
        onHide={() => setEdit(!edit)}
      />
      )}
    </div>
  );
}
