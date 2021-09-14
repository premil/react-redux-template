import axios from 'axios';

export const ALL_LIST = "ALL_LIST";
export const ERROR_LIST = 'ERROR_LIST';

export const postAction = () => {              // this function is ==> action creator
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {

            console.log("res.data=>", res.data)
            dispatch({type: ALL_LIST, payload: res.data});
        })
        .catch(error => {
            dispatch({type: ERROR_LIST, payload: error})
            console.log("error");
        })
    };

        //    dispatch(
        //        {
        //     type: ALL_LIST,         // action description
        //     payload: [                  // API call or hard code data 
        //         {
        //             userId: 1,
        //             id:1,
        //             title: 'HP',
        //             body: 'Harry Potter 1'
        //         },
        //         {
        //             userId: 1,
        //             id:2,
        //             title: 'HP',
        //             body: 'Harry Potter 2'
        //         },
        //         {
        //             userId: 1,
        //             id:3,
        //             title: 'HP',
        //             body: 'Harry Potter 3'
        //         }
        //     ]
        //    }
        //    );
}
