import React from 'react';
import AltHeader from './AltHeader';

const AltLayout = ({data, children}) => {
    return (
        <section>
            <AltHeader data={data}/>
            <main>{children}</main>
        </section>
    );
};

export default AltLayout;
