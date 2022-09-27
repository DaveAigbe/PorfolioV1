import React from 'react';
import AltHeader from '../AltHeader';
import Footer from '../Footer';

const AltLayout = ({data, children}) => {
    return (
        <section>
            <AltHeader data={data}/>
            <main>{children}</main>
            <Footer context={data}/>
        </section>
    );
};

export default AltLayout;
