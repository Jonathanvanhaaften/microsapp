import axios from 'axios'
import { createMessage, returnErrors } from './messages'
// import { tokenConfig } from './auth';
import { GET_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT } from './types'
import product from '../reducers/product';

// GET LEADS
export const getProduct = () => (dispatch, getState) => {
    axios.get('/api/leads/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

};
// DELETE LEAD
export const deleteProduct = (id) => (dispatch, getState) => {

    axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteProduct: 'Product Deleted' }))
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        }).catch(err => console.log(err));
}
// ADD LEAD
export const addProduct = (product) => (dispatch, getState) => {

    axios.post('/api/leads/', product, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addProduct: 'Product Added' }))
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}