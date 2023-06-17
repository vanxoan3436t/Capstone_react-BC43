import { createSlice } from '@reduxjs/toolkit'
import { http } from '../../util/config';

const initialState = {
    arrProduct: [],

    // id: '',
    // name: '',
    // alias:'',
    // price: '',

    // description: '',
    // size: '',
    // shortDescription:'',
    // quantity: '',
    // categories:'',
    // relatedProducts:'',
    // feature: '',
    // image: ''

    proDetail: {
        id: '',
        name: '',
        alias: '',
        price: '',
        feature: '',
        description: '',
        size: '',
        shortDescription: '',
        image: '',
        quantity: '',
        relatedProducts: '',
    }


}

const productReducer = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        getAllProductAction: (state, action) => {
            state.arrProduct = action.payload
        },
        getDetailAction: (state, action) => {
            state.proDetail = action.payload
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
        const result = await http(`/api/Product/getbyid?id=${id}`);
        const action = getDetailAction(result.data.content)
        dispatch(action)
    }
}