import React from 'react'
import PageTitle from '../components/PageTitle'

const Teste = () => {

    const notas = [1, 2, 3, 4, 5]


    return(
        <div>
            

            {/* BLOCO INSPIRADO EM MERTJF */}
            <div className='text-gray-700 body-font relative bg-gray-100'>
                <PageTitle title='Teste' />
                <div className='container px-5 py-4 mx-auto bg-gray-200'>
                    {/** BLOCO DE SAUDAÇÃO */}
                    <div className='flex flex-col text-center w-full mb-12 bg-gray-300'>
                        <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Contate-Nos</font>
                            </font>
                        </h1>
                        <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                            <font style={{  verticalAlign: 'inherit' }}>
                                <font style={{  verticalAlign: 'inherit' }}>Seja qual for a sacola do cardigã, o tumblr hexagon brooklyn assimétrico gentrifica.</font>
                            </font>
                        </p>
                    </div>
                    {/** BLOCO DE SAUDAÇÃO */}

                    {/** BLOCO DE FORMULÁRIO */}
                    <div className='lg:w-1/2 md:w-2/3 mx-auto bg-gray-300'>
                        <div className='flex -m-2'>
                            <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>
                                <label className='font-bold'>Nome:</label>
                                <input 
                                    type='text' 
                                    placeholder='Nome' 
                                    name='Nome'
                                    className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />
                            
                                <label className='font-bold'>E-mail:</label>
                                <input 
                                    type='text' 
                                    placeholder='E-mail' 
                                    name='Email'
                                    className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />
                            
                                <label className='font-bold'>Whatsapp:</label>
                                <input 
                                    type='text' 
                                    placeholder='Whatsapp' 
                                    name='Whatsapp'
                                    className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />


                                <label className='font-bold'>Sua crítica ou sugestão:</label>
                                <input 
                                    type='text' 
                                    placeholder='Crítica ou sugestão:' 
                                    name='Sugestao'
                                    className='w-full mb-2 bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2' />

                                <div className='mx-auto text-center bg-gray-500'>
                                    <label className='font-bold'>Que nota você daria para o estabelecimento?</label>
                                </div>
                                <div className='flex mx-auto py-6'>
                                    {notas.map(nota => {
                                        return(
                                            <label className='block w-1/5 text-center font-bold'>
                                                {nota}<br />
                                                <input type='radio' name='Nota' value={nota} onChange='' />
                                            </label>
                                        )    
                                    })}
                                </div>

                                <button onClick='' 
                                    className='w-full bg-blue-400 hover:shadow font-bold mb-4 py-3 px-6 rounded-lg shadow-lg'> 
                                    Enviar crítica ou sugestão 
                                </button>
                            
                            </div>

                        </div>
                    </div>
                    {/** BLOCO DE FORMULÁRIO */}

                    {/** BLOCO DE RETORNO */}
                    <div className='lg:w-1/2 md:w-2/3 mx-auto bg-gray-300'>
                        <div className='flex -m-2'>
                            <div className='p-2 w-5/6 xl:w-3/4 lg:w-2/3 md:w-3/5 mx-auto'>
                                <div className='mx-auto mb-2 px-4 py-4 text-center text-blue-700 bg-blue-200 border-t border-b border-blue-500'>
                                    <p className=''>Obrigado por sugestão ou crítica!</p>
                                </div>
                                <div className='mx-auto mb-2 px-4 py-4 text-center text-gray-700 bg-gray-200 border-t border-b border-gray-500'>
                                    <p className='font-bold'>Cupom:</p>
                                    <p className='text-sm text-2xl mb-4 '>AAAA-BBBB-0000</p>
                                    <p className='font-bold'>Promoção:</p>
                                    <p className=''>Promoção ativa no momento</p>
                                </div>
                                <div className='mx-auto mb-2 px-4 py-4 text-center text-gray-700 bg-gray-200 border-t border-b border-gray-500'>
                                    <p className='italic'>Tire um print ou foto desta tela e apresente ao garçom!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/** BLOCO DE RETORNO */}

                </div>
            </div>
            {/* BLOCO INSPIRADO EM MERTJF */}
            
        </div>
    )
}

export const isEmail = (email) => {

    const emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
    return emailPattern.test(email)

    
    /**
    const exclude = /[^@.-w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/
    const check= /@[w-]+./
    const checkend = /.[a-zA-Z]{2,3}$/
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){
        return false
    } else {
        return true
    }
     */
}

export default Teste