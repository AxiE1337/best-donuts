import React from 'react'
import styles from '../styles/checkout.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteAll } from '../features/product'
import { useNavigate } from 'react-router-dom'
import { TextField, Button, Typography } from '@mui/material'

const CheckOut = () => {
  const cart = useSelector((state) => state.product.value)
  const total = useSelector((state) => state.product.total)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.container}>
        <TextField type='mail' variant='filled' label='Mail' />
        <TextField variant='filled' label='First Name' />
        <TextField variant='filled' label='Last Name' />
        <TextField variant='filled' label='Phone' />
        <TextField variant='filled' label='Adress' />
        <div className={styles.donuts}>
          {cart.map((item) => {
            return (
              <div className={styles.items} key={item.id}>
                <Typography variant='h5'>{item.info}</Typography>
                <Typography variant='h5'>
                  <strong>{item.amount}</strong>
                </Typography>
              </div>
            )
          })}
        </div>

        <Typography variant='h4'>Total price {total.toFixed(2)}$</Typography>
        <Button
          variant='outlined'
          onClick={() => {
            dispatch(deleteAll())
            navigate('/')
          }}
        >
          Order
        </Button>
      </div>
    </>
  )
}

export default CheckOut
