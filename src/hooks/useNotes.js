import { useReducer, useState } from 'react';
import { notesReducer } from '../reducer/notesReducer';
import { getInitialData } from '../utils';

export function useNotes() {
  const [state, dispatch] = useReducer(notesReducer, getInitialData());
  const [openDialog, setOpenDialog] = useState(false);
  const [keyword, setKeyword] = useState('');

  const handleAddNewNotes = (notes) => {
    dispatch({
      type: 'add_notes',
      noteTitle: notes.title,
      noteBody: notes.body,
    });
  };

  const handleDeleteNotes = (noteId) => dispatch({
    type: 'delete_notes',
    id: noteId,
  });

  const handleArchiveNotes = (noteId) => dispatch({
    type: 'archive_notes',
    id: noteId,
  });

  const handleSearchNotes = (_keyword) => {
    setKeyword(_keyword);
  };

  const handleEditNotes = (noteId, notes) => {
    dispatch({
      type: 'edit_notes',
      id: noteId,
      newTitle: notes.title,
      newBody: notes.body,
    });
  };

  const notesFilter = (archived = false) => state.filter((notes) => notes.archived === archived && notes.title.toLowerCase().includes(keyword.toLowerCase()));

  return {
    state,
    dispatch,
    setOpenDialog,
    openDialog,
    handleAddNewNotes,
    notesFilter,
    handleDeleteNotes,
    handleArchiveNotes,
    handleSearchNotes,
    handleEditNotes,
  };
}
