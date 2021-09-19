import React from 'react';
import { useSelector } from 'react-redux';

function BankDetails() {

    const account = useSelector(state => state.account)
    
    return (
        <div>
            <h1>{ account }</h1>
        </div>
    )
}

export default BankDetails
