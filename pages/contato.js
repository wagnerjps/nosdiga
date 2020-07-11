import React, { useState } from 'react'
import { Link } from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {

    return (
            <div className='text-gray-700 body-font relative'>
                <PageTitle title='Contato' />
                <div className='container px-5 py-4 mx-auto'>
                    {/** BLOCO DE SAUDAÇÃO */}
                    <div className='flex flex-col text-center w-full mb-12'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Entre em contato</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>
                                    <p>Entre em contato pelo e-mail{' '} 
                                        <a 
                                            className='text-blue-400'
                                            href='mailto:wagnerjps@gmail.com?subject=Contato Nos Conte%20Deixe sua mensagem'>
                                        wagnerjps@gmail.com.
                                        </a>
                                    </p>
                                    <p>Ou pelo número:{' '}
                                        <a 
                                            className='text-blue-400'
                                            href='https://api.whatsapp.com/send?phone=5511981603426'>
                                            (11) 9 8160-3426.
                                        </a>
                                    </p>
                                    <p className='pt-4'>
                                        Agradecemos e aguardamos seu contato!
                                    </p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}
                </div>
            </div>
    )   
}

export default Contato