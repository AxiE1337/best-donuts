import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, increaseAmount } from '../features/product'
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
        <input
          type='text'
          placeholder=' Search'
          value={searchBar}
          onChange={(e) => {
            setSearchBar(e.target.value)
          }}
        />
      </form>
      <div className={styles.mainContainer} id='mainContainer'>
        {donuts
          .filter((product) => {
            if (searchBar === '') {
              return product
            } else if (searchBar.includes('1')) {
              console.log('number')
              return product
            } else if (
              product.info.toLowerCase().includes(searchBar.toLowerCase())
            ) {
              return product
            }
          })
          .map((donut) => {
            return (
              <div className={styles.donut} key={donut.id}>
                <img
                  src={donut.img}
                  height='200'
                  width='200'
                  alt={donut.info}
                />
                <p>{donut.info}</p>
                <h2>{donut.price + '$'}</h2>
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
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Products
