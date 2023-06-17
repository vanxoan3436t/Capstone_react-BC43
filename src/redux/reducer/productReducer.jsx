import { createSlice } from '@reduxjs/toolkit'
import {  PRODUCT, getStorageJSON, http} from '../../util/config';

const initStateDetail = () => {
    let proDetailInit = {

        id: '',
        name: '',
        alias: '',
        price: '',
        feature: '',
        description: '',
        size: '',
        shortDescription: '',
        quantity: '',
        categories: '',
        relatedProducts:'' ,
        image: ''
    }

    if (getStorageJSON(PRODUCT)) {
        proDetailInit = getStorageJSON(PRODUCT)
    }
    return proDetailInit
}



const initialState = {
    arrProduct: [],
    proDetail: initStateDetail()

}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        getDetailAction: (state, action) => {
            state.proDetail= action.payload
        }
    }
});

export const { getAllProductAction, getDetailAction } = productReducer.actions

export default productReducer.reducer


export const getAllProductActionApi = () => {
    return async (dispatch) => {
        const res = await http(`/api/Product`);
        const action = getAllProductAction(res.data.content)
        dispatch(action)

    }
}

export const getDetailActionApi = (id) => {

    return async (dispatch) => {
        // const productID = getStorageJSON(PRODUCT)
     
        const result = await http(`/api/Product/getbyid?id=${id}`);
        const action = getDetailAction(result.data.content)// id = ?

        dispatch(action)

    }
}