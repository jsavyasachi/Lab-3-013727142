import actionTypes from "../constants/index";
import axios from "axios";
import cookie from "js-cookie";
import {
    toast
} from "react-toastify";


const loginUser = (payload, ownProps) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_USER,
            payload
        });
        if (payload.type === 'Vendor') {
            ownProps.history.push(`/${payload.id}/account`);
        } else {
            ownProps.history.push(`/${payload.id}/search`);
        }
    }
}

const registerUser = (payload, ownProps) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_USER,
            payload
        });
        if (payload.account_type === "Vendor") {
            ownProps.history.push(`/login-vendor`);
        } else {
            ownProps.history.push(`/login-user`);
        }
    }
}

const updateUser = payload => {
    return dispatch => {
        const userData = payload;
        dispatch({
            type: actionTypes.SET_USER,
            payload: payload.userData
        });
        if (userData.account_type === "Vendor") {
            const restaurantData = {
                id: payload.restaurant_id,
                name: payload.restaurant_name,
                address: payload.restaurant_address,
                zipcode: payload.restaurant_zipcode,
                image: payload.restaurant_image,
                cuisine: payload.cuisine

            };
            dispatch({
                type: actionTypes.SET_RESTAURANT,
                payload: restaurantData
            });
        }

    }
}

const getUser = payload => {
    return dispatch => {
        return axios.get(`http://localhost:3001/user/${payload.user_id}`)
            .then(response => {
                if (response.status === 200) {
                    const userData = response.data;
                    dispatch({
                        type: actionTypes.SET_USER,
                        payload: userData
                    })
                }
            })
    }
}

const uploadProfileImage = payload => {
    return dispatch => {
        return axios.post(`http://localhost:3001/upload/image`, payload).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: actionTypes.SET_PROFILE_PIC,
                    payload: response.data
                })
            }
        })
    }
}

export {
    registerUser,
    loginUser,
    updateUser,
    getUser,
    uploadProfileImage
};