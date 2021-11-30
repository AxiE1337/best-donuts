import { createSlice } from '@reduxjs/toolkit'

const initialState = [{ img: '', info: '', price: 0, amount: 1, id: '' }]

const productSlice = createSlice({
  name: 'product',
  initialState: {
    total: 0,
    value: initialState,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      state.value.push(payload)
      state.total += payload.price
    },
    increaseAmount: (state, { payload }) => {
      state.value.map((value) => {
        if (value.id === payload.id) {
          value.amount += 1
        }
      })
      state.total += payload.price
    },
    deleteProduct: (state, { payload }) => {
      state.value = state.value.filter((value) => value.id !== payload.id)
      state.total -= payload.price * payload.amount
    },
    deleteAll: (state) => {
      state.value = initialState
      state.total = 0
    },
  },
})

export const { addProduct, deleteProduct, deleteAll, increaseAmount } =
  productSlice.actions
export default productSlice.reducer
