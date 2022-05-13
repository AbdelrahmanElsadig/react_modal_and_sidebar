import { action } from "../types/types";
import { appState } from "../types/types";
export const reducer = (state: appState, action: action) => {
    if (action.type === 'OPEN MODAL') return { ...state, isModalOpen: true }
    if (action.type === 'CLOSE MODAL') return { ...state, isModalOpen: false }
    if (action.type === 'OPEN SIDEBAR') return { ...state, isSidebarOpen: true }
    if (action.type === 'CLOSE SIDEBAR') return { ...state, isSidebarOpen: false }
}