import React from 'react'
import Head from 'next/head'

const PageTitle = ({ title }) => {
    return(
        <Head>

            <title>Nos conte - { title }</title>
            <link rel='shortcut icon' href='/w.ico' ></link>
        
        </Head>
    )
}

export default PageTitle