import React, { createContext, useReducer, useState } from "react";

const initialNotes = [
/*   { id: 1, title: "title1", content: "content1" },
  { id: 2, title: "title2", content: "content2" }, */
];

//Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload]
    case "DELETE":
      return state.filter(note => {
        return note.id !== action.payload.id
      });
    case "EDIT":
      return [
        ...state.filter(note => note.id !== action.payload.id),
        action.payload
      ];
    default:
      return state
      break;
  }
}

//Context
export const ContextState = createContext(initialNotes);

//Provider
export const ContextProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(reducer, initialNotes);

  //apagar nota
  const deleteNote = (id) => {
    dispatch({
      type: "DELETE",
      payload: { id }
    });
  };

  //adicionar nota
  const addNote = (title, content) => {
    dispatch({
      type: "ADD",
      payload: { id: Math.random(), title: title, content: content }
    });
  };

  //editar nota
  const editNote = (note) => {
    dispatch({
      type: "EDIT",
      payload: { id: note.id, title: note.title, content: note.content }
    });

  };


  return (
    <ContextState.Provider value={{
      notes,
      deleteNote,
      addNote,
      editNote
    }}>
      {children}
    </ContextState.Provider>
  );
};
