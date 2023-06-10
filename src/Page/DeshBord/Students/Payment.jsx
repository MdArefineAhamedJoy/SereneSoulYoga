import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const albums = useLoaderData();
    console.log(albums)
    return (
        <div>
            <h1>take o teka uira  uira ashow</h1>
        </div>
    );
};

export default Payment;