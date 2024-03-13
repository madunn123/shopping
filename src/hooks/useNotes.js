import { useReducer, useState } from 'react';
import { notesReducer } from '../reducer/notesReducer';
import { getInitialData } from '../utils';

export function useNotes() {
  const [state, dispatch] = useReducer(notesReducer, getInitialData());
  const [openDialog, setOpenDialog] = useState(false);
  const [keyword, setKeyword] = useState('' || undefined);

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

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('keyword', keyword);
    window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
  };

  const handleEditNotes = (noteId, notes) => {
    dispatch({
      type: 'edit_notes',
      id: noteId,
      newTitle: notes.title,
      newBody: notes.body,
    });
  };

  const notesFilter = (archived = false) => state.filter((notes) => {
    const lowerCaseTitle = notes.title?.toLowerCase() || '';
    const lowerCaseKeyword = keyword?.toLowerCase() || '';

    return notes.archived === archived && lowerCaseTitle.includes(lowerCaseKeyword);
  });

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
