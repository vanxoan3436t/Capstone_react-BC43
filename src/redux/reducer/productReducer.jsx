import { createSlice } from '@reduxjs/toolkit'
import { httpNonAuth} from '../../util/config';


const initStateDetail = () => {
    let proDetailInit = {
        id: '',
        name: '',
        alias: '',
        price: '',
        feature: '',
        description: '',
        size: [],
        shortDescription: '',
        quantity: '',
        categories: [],
        relatedProducts:[] ,
        image: ''
    }

    return proDetailInit
}

const arrProduct =() => {
    let productInit = []

    return productInit
}

const initialState = {
    arrProduct: arrProduct(),
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
        try {
        const res = await httpNonAuth.get(`/api/Product`);
        const action = getAllProductAction(res.data.content)
        dispatch(action)
        }catch (err) {
        }
    }
}

export const getDetailActionApi = (id) => {

    return async (dispatch) => {
        const result = await httpNonAuth.get(`/api/Product/getbyid?id=${id}`);
        const action = getDetailAction(result.data.content)// id = ?
        dispatch(action)
    }
}