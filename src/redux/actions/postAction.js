import { ALL_LIST, ERROR_LIST } from './type';
import axios from 'axios';

export const postAction = () => {                   // postAction function ==> action creator

    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")     // API call
            .then(res => {                                          // if Success API call ==> responce
                /* console.log("res.data=>", res.data) */
                dispatch({
                    type: ALL_LIST,                                 // Action (description)
                    payload: res.data                               // pass the payloard data
                });
            })
            .catch(error => {                                       // if not Success API call ==> error
                dispatch({
                    type: ERROR_LIST,                               // Action (description)
                    payload: error                                  // pass the payloard data
                })
                console.log("error");
            })
    };
};



// if you want to access hard code data, 
// you can use given below method.

/* 
return (dispatch) => {
    dispatch({
        type: ALL_LIST,                 // action description
        payload: [                      // API call or hard code data 
            {
                userId: 1,
                id: 1,
                title: 'HP',
                body: 'Harry Potter 1'
            },
            {
                userId: 1,
                id: 2,
                title: 'HP',
                body: 'Harry Potter 2'
            },
            {
                userId: 1,
                id: 3,
                title: 'HP',
                body: 'Harry Potter 3'
            }
        ]
    });
}
 */
