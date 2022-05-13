interface action {
    type: 'OPEN MODAL' | 'CLOSE MODAL' | 'OPEN SIDEBAR' | 'CLOSE SIDEBAR',
}
type appState = {
    isModalOpen: boolean,
    isSidebarOpen: boolean
}

type providerProps = {
    isModalOpen: boolean,
    isSidebarOpen: boolean,
    dispatch: (action: action) => void
}
export { action, appState, providerProps }