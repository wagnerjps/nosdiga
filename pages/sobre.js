import React from 'react'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
    return (
        <React.Fragment>
            {/* BLOCO INSPIRADO EM MERTJF */}
            <div className='text-gray-700 body-font relative'>
                <PageTitle title='Sobre' />
                <div className='container px-5 py-4 mx-auto'>
                    {/** BLOCO DE SAUDAÇÃO */}
                    <div className='flex flex-col text-center w-full mb-12'>
                        
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Nos Diga?</font>
                            </font>
                        </h1>

                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>
                                    <p className='text-left'>O <font className='font-bold'>Nos Diga?</font> é uma aplicação que tem como finalidade a pesquisa de satisfação dos nossos cliente.
                                    Nela o você nos envia suas opiniões, elôgios, sugestões ou críticas afim de ajudar o nosso estabelicimento a melhorar seus servições e/ou produtos.</p>
                                    <p className='text-left mt-2'>Esta aplicação foi desenvolvida visando melhor a qualidade e fazer o melhor para nossos clientes.</p><br />
                                    <p className='text-left mt-2'>Desde já, agradecemos sua participação e estaremos sempre trabalhando para melhor atendê-lo!</p>
                                </font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}

                </div>
            </div>
            {/* BLOCO INSPIRADO EM MERTJF */}
        </React.Fragment>
    )
}

export default Sobre