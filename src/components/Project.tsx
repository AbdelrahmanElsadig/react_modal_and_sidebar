import React from 'react'
import { AppProvider } from './AppProvider'
import { Modal } from './Modal'
import { Sidebar } from './Sidebar'

const Project = () => {
    return (
        <AppProvider>
            <div className='min-w-full'>
                <nav className="w-full flex justify-start">
                    <Sidebar />
                    <Modal />
                </nav>
            </div>
        </AppProvider>
    )
}

export { Project }
