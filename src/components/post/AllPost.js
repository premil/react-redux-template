import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../../redux/actions/postAction';

function allPost() {

    const dispatch = useDispatch();

    const post = useSelector(state => state.postlist.users);    // for access to store
    /* console.log(post); */                                    // check postlist res.data pass or not

    const getList = (allList) => {                              // getList function
        console.log("Function getList =>", allList);
        return (allList && allList.map((list) => {
            /* console.log("All Post =>", list) */
            return (
                <li key={list.id}>
                    {list.id}
                    <br />
                    {list.title}
                    <br /><br />
                </li>
            )
        }))
    };

    return (
        <div>
            <button
                onClick={() => dispatch(postAction())}>     {/* call the action */}
                All Post
            </button>
            <div>
                <ul>
                    {getList(post)}                         {/* preview all post */}
                </ul>
            </div>
        </div>
    )
}

export default allPost;
