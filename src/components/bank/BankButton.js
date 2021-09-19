import React from 'react';
import { useDispatch } from 'react-redux';
import { depositInMoney, witdrawInMoney } from '../../redux/actions/bankAccountAction';
import BankDetails from './BankDetails';

function Bank() {
    
    const dispatch = useDispatch();

    return (
        <div>
            <BankDetails/>
            <button onClick={ () => dispatch(depositInMoney(1000))}>
                Deposit LKR-1000
            </button>
            <button onClick={ () => dispatch(witdrawInMoney(1000))}>
                Withdraw LKR-1000
            </button>
        </div>
    )
}

export default Bank;
