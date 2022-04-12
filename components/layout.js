
import Head from 'next/head'

import { Header } from './Header'
import { Aside } from './Aside'
import { Footer } from './Footer'


export default function Layout( {children} ) {
    return (
        <div>
            <Head>
                <title>Ulisses Malanski Art</title>
            </Head>

            <Header>{children}</Header>

            <main>{children}</main>
            

            <Aside />

            <Footer />



        </div>
    )
}