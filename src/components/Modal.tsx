import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from './AppProvider';
import { providerProps } from '../types/types';
const Modal = () => {
    const { isModalOpen, isSidebarOpen, dispatch }: providerProps = useContext<any>(AppContext);
    const style = isModalOpen ? 'scale-100' : 'scale-0';
    const style2 = isModalOpen ? '' : 'opacity-0';
    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <button onClick={() => dispatch({ type: 'OPEN MODAL' })} className="text-3xl font-bold py-1 px-2 text-white bg-black 
            border-2 border-black border-solid rounded-lg
            duration-300 ease-in-out hover:text-black hover:bg-white">Show Button</button>
            </div>

            <div>
                <div className={`fixed ${style2} pointer-events-none transition-all ease-in-out duration-300 left-0 top-0 right-0 bottom-0 bg-black opacity-50`}></div>
                <div className={`fixed ${style} transition-all ease-in-out duration-300 flex justify-center items-center h-44 bg-neutral-200 z-40 p-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] rounded-md`}>
                    <p className="text-2xl font-bold">Modal Content Here...</p>
                    <FaTimes onClick={() => dispatch({ type: 'CLOSE MODAL' })} className='w-6 h-6 absolute top-2 right-2 cursor-pointer fill-gray-600 duration-200 ease-in-out hover:fill-red-600' />
                </div>

            </div>
        </>
    )
}

export { Modal } 
