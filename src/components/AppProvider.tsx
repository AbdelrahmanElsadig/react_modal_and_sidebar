import React, { createContext, useReducer } from 'react';
import { appState } from '../types/types';
import { reducer } from './reducer';
const AppContext = createContext({});

const startState: appState | any = {
    isModalOpen: false,
    isSidebarOpen: false,
}
const AppProvider = ({ children }: any) => {
    const [state, dispatch]: [appState | any, () => void] = useReducer<any>(reducer, startState);

    return (
        <AppContext.Provider value={{ ...state, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }
