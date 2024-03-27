import React from 'react';
import Head from 'next/head';

export default function CustomHeader({title}) { 
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{title}</title>
            <link rel="icon" type="image/png" href="/images/logo.png" />
        </Head>
    );
};