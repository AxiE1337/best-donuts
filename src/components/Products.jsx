import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, increaseAmount } from '../features/product'
import { Typography, TextField, Paper } from '@mui/material'
import styles from '../styles/products.module.css'

const Products = () => {
  const [searchBar, setSearchBar] = useState('')
  const dispatch = useDispatch()
  const donuts = useSelector((state) => state.donuts.value)
  const products = useSelector((state) => state.product.value)

  return (
    <>
      <form
        type='submit'
        onSubmit={(e) => {
          e.preventDefault()
          setSearchBar('')
        }}
      >
        <TextField
          fullWidth
          color='success'
          label='Search'
          variant='standard'
          type='text'
          value={searchBar}
          onChange={(e) => {
            setSearchBar(e.target.value)
          }}
        />
      </form>
      <div className={styles.mainContainer} id='mainContainer'>
        {donuts
          .filter((product) => {
            return product.info.toLowerCase().includes(searchBar.toLowerCase())
          })
          .map((donut) => {
            return (
              <Paper elevation={6} className={styles.donut} key={donut.id}>
                <img
                  src={donut.img}
                  height='200'
                  width='200'
                  alt={donut.info}
                />
                <Typography variant='h6'>{donut.info}</Typography>
                <Typography variant='h4'>{donut.price + '$'}</Typography>
                <button
                  onClick={() => {
                    const product = products.some((p) => p.id === donut.id)
                    if (!product) {
                      dispatch(
                        addProduct({
                          info: donut.info,
                          price: donut.price,
                          id: donut.id,
                          amount: donut.amount,
                        })
                      )
                    } else {
                      dispatch(
                        increaseAmount({
                          id: donut.id,
                          price: donut.price,
                        })
                      )
                    }
                  }}
                >
                  Add to Cart
                </button>
              </Paper>
            )
          })}
      </div>
    </>
  )
}

export default Products
