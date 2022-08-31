import React from 'react';
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const ProjectOne = () => {
    return (
        <Layout>
            <Head>
                <title>Project One</title>
            </Head>
            <h1>Testing routing</h1>
            <button>
                <Link href='/'>Return to home page.</Link>
            </button>
        </Layout>
    );
};

export default ProjectOne;
