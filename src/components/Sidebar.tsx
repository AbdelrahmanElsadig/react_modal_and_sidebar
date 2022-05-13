import React, { useContext } from 'react';
import { FaBars, FaLink, FaTimes } from 'react-icons/fa';
import { providerProps } from '../types/types';
import { AppContext } from './AppProvider';
const Sidebar = () => {
    const { isModalOpen, isSidebarOpen, dispatch }: providerProps = useContext<any>(AppContext);
    const style = isSidebarOpen ? 'left-0' : '-left-full';
    return (
        <>
            <div><FaBars onClick={() => {
                dispatch({ type: 'OPEN SIDEBAR' },)
            }} className='w-10 h-10  m-4 cursor-pointer duration-300
        ease-in-out fill-neutral-600 hover:fill-blue-500' /></div>
            <div className={`absolute w-[360px] h-full ${style} z-40 bg-white shadow-lg duration-300 ease-in-out`}>
                <div className="flex items-center p-4 justify-between">
                    <h1 className="text-blue-900 text-xl font-bold">Simple Sidebar</h1>
                    <FaTimes onClick={() => {
                        dispatch({ type: 'CLOSE SIDEBAR' },)
                    }} className='w-6 h-6 cursor-pointer fill-gray-600 duration-200 ease-in-out hover:fill-red-600' />
                </div>
                <Link />
                <Link />
                <Link />
                <Link />
            </div>
        </>
    )
}

function Link() {
    return (
        <div className=" w-full group items-center flex cursor-pointer justify-start gap-2 p-3 duration-300 ease-in-out hover:bg-blue-50">
            <FaLink className='w-4 h-4 fill-neutral-600 duration-300 ease-in-out group-hover:fill-blue-600' />
            <p className="text-neutral-600 text-xl font-bold duration-300 ease-in-out group-hover:text-blue-900">Link</p>
        </div>
    )
}
export { Sidebar } 
