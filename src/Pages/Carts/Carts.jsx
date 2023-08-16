import { useDispatch, useSelector } from 'react-redux'
import { getProfileActionApi } from '../../redux/reducer/userReducer';
import { useEffect } from 'react';
import { addPriceCartAction, clearCartsAction, setDecreaseAction, setIncrementAction } from '../../redux/reducer/productReducer';
import { ARR_CARTS_LOCAL, saveStorageJSON } from '../../util/config';
import { NavLink } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Carts = (props) => {
  const arrCarts = useSelector(state => state.productReducer.arrCarts);
  const totalPrice = useSelector(state => state.productReducer.totalPrice);
  const dispatch = useDispatch();
  const getProfileApi = () => {
    const action = getProfileActionApi();
    dispatch(action);
  }

  const deleteCart = (id) => {
    const action = clearCartsAction(id)
    dispatch(action)
  }

  const setDecrease = (id) => {
    const action = setDecreaseAction(id)
    dispatch(action)
  }

  const setIncrement = (id) => {
    const action = setIncrementAction(id)
    dispatch(action)
  }
  const renderCarts = () => {
    if (arrCarts.length === 0) {
      return <div className='carts-notification'><h2 className='pb-0 mb-3 text-center'>Bạn chưa có sản phẩm nào!</h2>
        <h2 className='text-center'><NavLink to={'detail/1'}>Shopping Cart</NavLink></h2>
      </div>
    } else {
      return <div className='product-cart'>
        <div className="product-cart-desktop">

          <table className='table table-hover'>
            <thead>
              <tr>
                <th><i className="fa-solid fa-check"></i>  </th>
                <th>id</th>
                <th>img</th>
                <th>name</th>
                <th>price</th>
                <th>quantily</th>
                <th>total</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {arrCarts?.map((item, index) => {
                return (<tr key={index}>
                  <th><input type="checkbox" /></th>
                  <th>{item.id}</th>
                  <th><img src={item.image} alt="" style={{ width: '60px' }} /></th>
                  <th>{item.name}</th>
                  <th>{item.price}$</th>
                  <th>
                    <button className='btn btn-plus' onClick={() => {
                      setIncrement(item.id)
                    }}><i className='fa fa-plus'></i></button>
                    <span className='quantily-number'>{item.numberCart}</span>
                    <button className='btn btn-minus' onClick={() => {
                      setDecrease(item.id)
                    }}><i className='fa fa-minus'></i></button>
                  </th>
                  <th>{(item.price * item.numberCart).toLocaleString()}$</th>
                  <th>
                    <button className='btn btn-table-edit'>EDIT</button>
                    <button className='btn btn-main-red' onClick={() => {
                      deleteCart(item.id)
                    }}>DELETE</button>
                    <button className='btn btn-table-submit'>Submit Order</button>
                  </th>
                </tr>)
              })}
            </tbody>

          </table>
          <div className='d-flex mt-3 align-items-center'>
            <button className='btn btn-main-red  text-white me-4' onClick={() => {
              const action = clearCartsAction(0)
              dispatch(action)
            }}>Clear All Cart</button>
            <span>Total Price : {totalPrice.toLocaleString()}$</span>
            <button className='btn btn-main-red text-white ms-4' >Buy Now</button>
          </div>
        </div>

        <div className="product-cart-mobile">
          {arrCarts?.map((item, index) => {
            return <div className='cart-mobile' key={index} >
              <div className="cart-mobile-right">
                <input type="checkbox" />
                <img src={item.image} alt="..." />
              </div>

              <div className="cart-mobile-left">
                <div className="card-body">
                  <div className="card-body-right">
                    <h5>{item.name}</h5>
                  </div>

                  <div className="card-body-left">
                    <div className='card-body-left-top'>
                      <p className='price'>Price: {item.price}$</p>
                      <span>Total: {(item.price * item.numberCart).toLocaleString()}$</span>
                      <div>
                        <button className='btn btn-plus' onClick={() => {
                          setIncrement(item.id)
                        }}><i className='fa fa-plus'></i></button>
                        <span className='quantily-number'>{item.numberCart}</span>
                        <button className='btn btn-minus' onClick={() => {
                          setDecrease(item.id)
                        }}><i className='fa fa-minus'></i></button>
                      </div>
                    </div>

                    <div className='card-body-left-bottom'>
                      <button className='btn btn-table-edit'>EDIT</button>
                      <button className='btn btn-main-red' onClick={() => {
                        deleteCart(item.id)
                      }}>DELETE</button>

                      <button className='btn btn-table-submit'>Submit Order</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}

          <div className='cart-mobile-bottom'>
            <div>
              <input type="checkbox" />
              <span>Sellect All</span>

              <span className='total-price'><br /> Total Price :<span>  {totalPrice.toLocaleString()}$</span></span>
            </div>
          <div className='d-flex cart-mobile-bottom-button'>

          <button className='btn btn-main-red  text-white' onClick={() => {
                const action = clearCartsAction(0)
                dispatch(action)
              }}>Clear All Cart</button>
              <button className='btn btn-main btn-main-red text-white' ><span className='icon-button'><DoubleArrowIcon /></span> <span>Buy</span></button>
         </div>
          </div>
        </div>
      </div >
    }
  }
  useEffect(() => {
    getProfileApi();
    saveStorageJSON(ARR_CARTS_LOCAL, arrCarts)
    dispatch(addPriceCartAction())
  }, [arrCarts,])

  return (
    <div className='carts container-fluid'>
      <h2>Carts</h2>
      {renderCarts()}
    </div>
  )
}

export default Carts