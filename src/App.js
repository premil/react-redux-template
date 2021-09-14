import React from 'react';
//import Products from './components/Products/Products';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { depositInMoney, witdrawInMoney } from './redux/actions/bankAccountAction';
import { testCombine } from './redux/actions/testCombineAction';
import { postAction } from './redux/actions/postAction';

const App = () => {

    const accountDetails = useSelector((state) => state.account);
    console.log(accountDetails);

    const dispatch = useDispatch()

    const { depositInMoney, witdrawInMoney } = bindActionCreators(testCombine, dispatch);
    //console.log(Test);

    // const AC = bindActionCreators(depositInMoney, dispatch);
    // console.log(AC);

    // const DC = bindActionCreators(witdrawInMoney, dispatch);
    // console.log(DC);


    const postLists = useSelector((state) => state.postlist.users);
    //const { users, loading, error} = postList

    // if (!postList) {
    //     return ('Click the Button First')
    // }

    // const post = bindActionCreators(postAction, dispatch);
    function getList(postList) {
        // console.log("function postList =", postList);
        return (postList && postList.map((user) => {
            console.log("user details =>", user);
            return (
                <li key={user.id}>
                    {user.id}
                    <br />
                    {user.title}
                    <br /><br />
                </li>
            )
        })
        )
    }


    return (
        <div>
            {/* <Products /> */}
            <h1>{accountDetails}</h1>
            <button
                onClick={() => depositInMoney(1000)}
            >
                Deposit
            </button>
            <button
                onClick={() => witdrawInMoney(1000)}
            >
                Withdrow
            </button>
            <br />
            <br />
            <button
                onClick={() => dispatch(postAction())}
            >
                AllPost
            </button>

            <div>
                <ul>
                    {getList(postLists)}
                </ul>
            </div>


        </div>
    )
}

export default App
