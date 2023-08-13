import { createSlice } from '@reduxjs/toolkit'
import { ARR_CARTS_LOCAL, TOTAL_CART, getStorageJSON, httpNonAuth, saveStorageJSON } from '../../util/config';


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
const initTotalCart = () => {
    let totalCart = 0
    if (getStorageJSON(TOTAL_CART)) {
        totalCart = getStorageJSON(TOTAL_CART)
    }
    return totalCart
}

const initialState = {
    totalCart: initTotalCart(),
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
            // update thay đổi số lượng cart bị xóa cần up lại
            let arrCartsLocal = getStorageJSON(ARR_CARTS_LOCAL)
            if (arrCartsLocal) {
                let updateCart = state.arrCarts.reduce((initialVal, curElem) => {
                    let { numberCart } = curElem
                    initialVal = initialVal + numberCart;
                    return initialVal
                }, 0)
                state.totalCart = updateCart
                saveStorageJSON(TOTAL_CART, state.totalCart)
            }
        },
        addTotalCartAction: (state, action) => {
            state.totalCart = action.payload
            saveStorageJSON(TOTAL_CART, state.totalCart)
        },
        editCartAction: (state, action) => {
            console.log('action.payload-edit', action.payload)
            const id = action.payload
            // const numberCart = action.payload.numberCart
            let indexEdit = state.arrCarts.findIndex(cart => cart.id === id)
            if (indexEdit !== -1) {
                // console.log('numberCart', numberCart)
                let arrCartsLocal = getStorageJSON(ARR_CARTS_LOCAL)
                let carts = arrCartsLocal.find((cart) => { return cart.id === id })
                // state.arrCarts.numberCart = 
                console.log('carts-local', carts)
                
                // saveStorageJSON(ARR_CARTS_LOCAL, state.arrCarts)
            }
        }
    }
});

export const { getAllProductAction, getDetailAction, addCartsAction, clearCartsAction, addQuanlityAction, addTotalCartAction, editCartAction } = productReducer.actions
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
