import React, {createContext, useContext, useReducer, useState} from "react";
import { MODAL_OPEN, MODAL_CLOSE } from "../actions";


export const PetsContext = createContext({
    isModalOpen: false
});

const petsReducer = (state, action) => {
switch (action.type) {
    case MODAL_OPEN:
        return {...state, isModalOpen: true}
    case MODAL_CLOSE:
        return {...state, isModalOpen: false}
}
}

export const PetsContextProvider = ({children}) => {
    const [petsState, dispatch] = useReducer(petsReducer, []);
    const [isModalOpen, SetIsModalOpen] = useState(false);

    const openModal = () => {
        dispatch({ type: MODAL_OPEN})
        SetIsModalOpen(true)
  
      }
      const closeModal = () => {
        dispatch({ type: MODAL_CLOSE })
        SetIsModalOpen(false)
      }

      const value = {
        isModalOpen
    }

    return (
        <PetsContext.Provider value={value}>{children}</PetsContext.Provider>
    )
}

export const usePetsContext = () => {
    return useContext(PetsContext)
}

