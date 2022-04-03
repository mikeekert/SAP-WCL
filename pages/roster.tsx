import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Roster() {
    return (
        <div>
            A roster appears here
        </div>
    );
};

Roster.getLayout = function getLayout(page: any) {
    return (
        <Layout>
            <Header/>
            {page}
            <Footer/>
        </Layout>
    )
}
