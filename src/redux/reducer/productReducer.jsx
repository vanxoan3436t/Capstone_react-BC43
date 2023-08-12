import { createSlice } from '@reduxjs/toolkit'
import { ARR_CARTS_LOCAL, clearStorage, getStorageJSON, httpNonAuth, saveStorageJSON } from '../../util/config';


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
        relatedProducts: [],
        image: ''
    }

    return proDetailInit
}

const initArrCarts = () => {
    let arrCarts = []
    if (getStorageJSON(ARR_CARTS_LOCAL)) {
        arrCarts = getStorageJSON(ARR_CARTS_LOCAL)
    }
    return arrCarts
}


const initialState = {
    arrProduct: [],
    proDetail: initStateDetail(),
    arrCarts: initArrCarts(),
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
        },
        addCartsAction: (state, action) => {
            //tìm trong local có sp hay chưa
            const id = action.payload.id
            let arrCartsLocal = getStorageJSON(ARR_CARTS_LOCAL)
            let carts = arrCartsLocal.find((cart) => { return cart.id === id })

            if (carts === undefined) {//chưa có push vào redux cũng chính là push vào local
                state.arrCarts.push(action.payload)
            } else {// có rồi thì chỉ thay đổi số lượng và giá bán tương đương với số lượng
                carts.priceLater += action.payload.priceLater;
                carts.numberCart += action.payload.numberCart;
                carts = { ...carts, priceLater: carts.priceLater, numberCart: carts.numberCart }
                state.arrCarts = arrCartsLocal
                saveStorageJSON(ARR_CARTS_LOCAL, state.arrCarts)
            }

        },
        clearCartsAction: (state, action) => {
            const id = action.payload
            let indexDel = state.arrCarts.findIndex(cart => cart.id === id)
            if (indexDel !== -1) {
                state.arrCarts.splice(indexDel, 1)
                saveStorageJSON(ARR_CARTS_LOCAL, state.arrCarts)
            }
        },

    }
});

export const { getAllProductAction, getDetailAction, addCartsAction, clearCartsAction, addQuanlityAction } = productReducer.actions
export default productReducer.reducer

export const getAllProductActionApi = () => {
    return async (dispatch) => {
        try {
            const res = await httpNonAuth.get(`/api/Product`);
            const action = getAllProductAction(res.data.content)
            dispatch(action)
        } catch (err) {
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
