import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  deleteProduct,
  increaseAmount,
  decreaseAmount,
} from '../features/product'
// MUI
import { Button, Badge, Modal } from '@mui/material'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  const [cartModal, setCartModal] = useState(false)
  const product = useSelector((state) => state.product.value)
  const totalPrice = useSelector((state) => state.product.total)
  const dispatch = useDispatch()
  const modaHandle = () => {
    setCartModal(!cartModal)
  }
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.nav}>
        <h1 onClick={() => navigate('/')}>Best Donuts</h1>
        <Button variant='contained' onClick={() => modaHandle()}>
          <Badge badgeContent={product.length - 1}>
            <ShoppingCartTwoToneIcon />
          </Badge>
        </Button>
      </div>
      {cartModal && (
        <Modal open={modaHandle} onClose={modaHandle}>
          <div className={styles.cart}>
            {product.length > 1 ? <p>List of items</p> : <p>Cart is empty</p>}
            {product.map((productCart) => {
              return (
                <div key={productCart.id}>
                  {productCart.id !== '' && (
                    <>
                      <p>
                        {productCart.info} : {productCart.price + '$'}
                        <br />
                        <strong>quantity: {productCart.amount}</strong>
                      </p>
                      <Button
                        onClick={() => {
                          dispatch(
                            increaseAmount({
                              id: productCart.id,
                              price: productCart.price,
                            })
                          )
                        }}
                        size='small'
                        variant='outlined'
                        color='success'
                      >
                        <AddIcon fontSize='small' />
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(
                            decreaseAmount({
                              id: productCart.id,
                              price: productCart.price,
                            })
                          )
                        }}
                        size='small'
                        variant='outlined'
                        color='error'
                      >
                        <RemoveIcon fontSize='small' />
                      </Button>
                    </>
                  )}
                  {productCart.id !== '' && (
                    <Button
                      size='small'
                      variant='outlined'
                      color='error'
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
                      <DeleteOutlineIcon fontSize='small' />
                    </Button>
                  )}
                </div>
              )
            })}
            {totalPrice > 0 && <h1>Total: {totalPrice.toFixed(2)}$</h1>}
            {totalPrice > 0 && (
              <Button
                variant='medium'
                className={styles.orderBtn}
                onClick={() => {
                  navigate('/checkout')
                  setCartModal(false)
                }}
              >
                Checkout
              </Button>
            )}
          </div>
        </Modal>
      )}
    </>
  )
}

export default NavBar
