import { createContext } from "react";

const NoteContext = createContext();

export const NoteProvider = NoteContext.Provider;
export const NoteConsumer = NoteContext.Consumer;

export default NoteContext;
