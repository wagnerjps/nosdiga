import React from 'react'

const Footer = () => {
    return(
        <div className='bg-gray-700 p-4 mt-10'>
            <div className='container mx-auto text-center'>
                <div className='font-bold text-white'>
                    Projeto desenvolvido por:{' '}
                        <a className='hover:underline' href='https://www.facebook.com/wagnerjps'>Wagner Silva</a>{' '}/{' '} 
                        <a className='hover:underline' href='https://www.linkedin.com/in/wagnerjps'>LinkedIn</a>{' '}/{' '}
                        <a className='hover:underline' href='https://github.com/wagnerjps'>Github</a>
                </div>
                <div className='mt-4 mx-auto align-middle'>
                    <p className='block font-sans text-3xl font-bold text-blue-400 text-center mx-auto'>
                        <img className='block inline w-12 h-12 mr-2' src='/w.png' alt='WS Dev' />
                        <span className='mt-2'>
                        <span className='text-green-500 mt-4'>W</span>ag <span className='text-green-500'>D</span>ev
                        </span>
                    </p>
                    
                    
                </div>
            </div>
        </div>
        )
    }

export default Footer