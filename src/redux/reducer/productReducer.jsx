import { createSlice } from '@reduxjs/toolkit'
import { ARR_CARTS_LOCAL, TOTAL_CART, TOTAL_PRICE_CART, clearStorage, getStorageJSON, httpNonAuth, saveStorageJSON } from '../../util/config';


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
const initPriceCart = () => {
    let totalPrice = 0
    if (getStorageJSON(TOTAL_PRICE_CART)) {
        totalPrice = getStorageJSON(TOTAL_PRICE_CART)
    }
    return totalPrice
}
const initialState = {
    totalCart: initTotalCart(),
    arrProduct: [],
    proDetail: initStateDetail(),
    arrCarts: initArrCarts(),
    totalPrice : initPriceCart()
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
                carts.numberCart += action.payload.numberCart;
                carts = { ...carts, numberCart: carts.numberCart }
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
            } else {
                clearStorage(ARR_CARTS_LOCAL)
                state.arrCarts = []
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
            } else {
                clearStorage(TOTAL_CART)
                state.totalCart = 0
            }
        },
        addTotalCartAction: (state, action) => {
            let updateCart = state.arrCarts.reduce((initialVal, curElem) => {
                let { numberCart } = curElem
                initialVal = initialVal + numberCart;
                return initialVal
            }, 0)
            state.totalCart = updateCart
            saveStorageJSON(TOTAL_CART, state.totalCart)
        },
        addPriceCartAction: (state, action) => {
            let totalPrice = state.arrCarts.reduce((initialVal, curElem) => {
                let { price,numberCart } = curElem
                initialVal = initialVal + (numberCart * price );
                return initialVal
            }, 0)
  
          state.totalPrice = totalPrice
            saveStorageJSON(TOTAL_PRICE_CART, state.totalPrice)
        },
        setDecreaseAction: (state, action) => {
            let updateProduct = state.arrCarts.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decNumberCart = curElem.numberCart - 1;
                    if (decNumberCart < 0 || decNumberCart === 0) {
                        decNumberCart = 1
                    }
                    curElem = { ...curElem, numberCart: decNumberCart }
                    return curElem
                } else {
                    return curElem
                }
            })
            return { ...state, arrCarts: updateProduct }
        },
        setIncrementAction: (state, action) => {
            let updateProduct = state.arrCarts.map((curElem) => {
                if (curElem.id === action.payload) {
                    let decNumberCart = curElem.numberCart + 1;
                    if (decNumberCart > curElem.quanlity) {
                        decNumberCart = curElem.quanlitys
                    }
                    curElem = { ...curElem, numberCart: decNumberCart }
                    return curElem
                } else {
                    return curElem
                }
            })
            return { ...state, arrCarts: updateProduct }
        }
    }
});

export const { getAllProductAction, getDetailAction, addCartsAction, clearCartsAction, addTotalCartAction, setDecreaseAction, setIncrementAction ,addPriceCartAction} = productReducer.actions
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
