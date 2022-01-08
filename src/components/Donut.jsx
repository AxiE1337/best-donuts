import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, increaseAmount } from '../features/product'
import { useParams } from 'react-router-dom'
import { Typography, Paper, Button } from '@mui/material'
import styles from '../styles/donut.module.css'

const Donut = () => {
  const donuts = useSelector((state) => state.donuts.value)
  const products = useSelector((state) => state.product.value)
  const donutParams = useParams()
  const dispatch = useDispatch()

  return (
    <div className={styles.donut}>
      {donuts
        .filter((donut) => {
          return donut.id === Number(donutParams.donut)
        })
        .map((donut) => {
          return (
            <Paper elevation={6} key={donut.id}>
              <Typography variant='h2'>{donut.info}</Typography>
              <img src={donut.img} height='200' width='200' alt={donut.info} />
              <Button
                variant='primary'
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
              </Button>
            </Paper>
          )
        })}
    </div>
  )
}

export default Donut
