export function notesReducer(state, action) {
  switch (action.type) {
    case 'add_notes': {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.noteTitle,
          body: action.noteBody,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ];
    }
    case 'delete_notes': {
      return state.filter((notes) => notes.id !== action.id);
    }
    case 'archive_notes': {
      return state.map((notes) => {
        if (notes.id === action.id) {
          return {
            ...notes,
            archived: !notes.archived,
          };
        }
        return notes;
      });
    }
    case 'edit_notes': {
      return state.map((notes) => {
        if (notes.id === action.id) {
          return {
            ...notes,
            title: action.newTitle,
            body: action.newBody,
          };
        }

        return notes;
      });
    }
    default: {
      throw Error(`unknown action type:${action.type}`);
    }
  }
}
