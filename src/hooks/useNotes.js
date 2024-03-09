import { useState } from "react";

const useNotes = (initialValue = []) => {
    const [notes, setNotes] = useState(initialValue);
    const [keyword, setKeyword] = useState('');

    const addNotes = (note) => {
        const newNote = {
            id: Date.now(),
            ...note,
            createdAt: new Date().toISOString(),
            archived: false,
        }

        setNotes([newNote, ...notes]);
    }

    const deleteNote = (noteId) => {
        setNotes(notes?.filter((note) => note?.id !== noteId));
    }

    const noteArchived = (noteId) => {
        setNotes(notes.map((note) => {
            if (note?.id === noteId) {
                return {
                    ...note,
                    archived: !note?.archived,
                }
            }

            return note;
        }))
    }

    const searchNote = (_keyword) => {
        setKeyword(_keyword);
    };

    const filteredNotes = (archived = false) => notes.filter((note) => {
        const title = note?.title.toLowerCase();
        const keywordLowerCase = keyword?.toLowerCase();

        return note?.archived === archived && title?.includes(keywordLowerCase);
    });

    return {
        filteredNotes,
        addNotes,
        deleteNote,
        noteArchived,
        searchNote,
        keyword,
    };
}

export default useNotes;