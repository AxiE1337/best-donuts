import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, deleteAll } from '../features/product'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const [cartModal, setCartModal] = useState(false)
  const product = useSelector((state) => state.product.value)
  const totalPrice = useSelector((state) => state.product.total)
  const dispatch = useDispatch()
  const modaHandle = () => {
    setCartModal(!cartModal)
  }
  return (
    <>
      <div className={styles.nav}>
        <h1>Best Donuts</h1>
        <button onClick={() => modaHandle()}>Cart</button>
      </div>
      {cartModal && (
        <div className={styles.cart}>
          {product.length > 1 ? <p>List of items</p> : <p>Cart is empty</p>}

          {product.map((productCart) => {
            return (
              <div key={productCart.id}>
                {productCart.id !== '' && (
                  <p>
                    {productCart.info} : {productCart.price + '$'}
                    {' , amount: ' + productCart.amount}
                  </p>
                )}
                {productCart.id !== '' && (
                  <button
                    onClick={() => {
                      dispatch(
                        deleteProduct({
                          id: productCart.id,
                          price: productCart.price,
                          amount: productCart.amount,
                        })
                      )
                    }}
                  >
                    del
                  </button>
                )}
              </div>
            )
          })}
          {totalPrice > 0 && <h1>Total: {totalPrice.toFixed(2)}$</h1>}
          {totalPrice > 0 && (
            <button
              className={styles.orderBtn}
              onClick={() => {
                dispatch(deleteAll())
              }}
            >
              Order
            </button>
          )}
        </div>
      )}
    </>
  )
}

export default NavBar
