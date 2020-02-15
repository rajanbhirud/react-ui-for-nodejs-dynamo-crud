import axios from 'axios';
import types from "./types";

export const getUsers = () => {
    return dispatch => {
        dispatch({
            type: types.USERS_GET_REQUEST
        });
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                //console.log('res.data',res.data);
                const users = res.data;
                dispatch({
                    type: types.USERS_GET_RECEIVE,
                    response: users
                });
            }).catch(error=>{
            dispatch({
                type: types.USERS_GET_ERROR,
                error: error.message
            });
        });
    };
};

export const updateUser = (user) => {
    return dispatch => {
        dispatch({
            type: types.USERS_UPDATE_REQUEST
        });
        axios.patch(`http://localhost:3000/users/${user.userId}`,user)
            .then(res => {
                //console.log('res.data',res.data);
                const users = res.data;

                dispatch({
                    type: types.USERS_UPDATE_RECEIVE,
                    response: users
                });
            }).catch(error=>{
            dispatch({
                type: types.USERS_UPDATE_ERROR,
                error: error.message
            });
        });
    };
};

/*export const addUser = user => {
    /!*return dispatch => {
        axios.get(`http://localhost:3000/users`)
            .then(res => {
                const users = res.data;
                dispatch({
                    type: ADD_USER,
                    payload: user
                });
            });
    };*!/

    return {
        type: "SET_NAME",
        payload: new Promise((resolve, reject) => {
            axios.get(`http://localhost:3000/users`).then((res)=>{
                resolve(res.data);
            })
        })
    };
};*/
