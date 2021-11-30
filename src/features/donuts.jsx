import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    img: 'imgs/donut.png',
    info: 'Classic donut',
    price: 0.99,
    amount: 1,
    id: Date.now(),
  },
  {
    img: 'imgs/coconut.jpg',
    info: 'Coconut donut',
    price: 1.49,
    amount: 1,
    id: Date.now() + 1,
  },
  {
    img: 'imgs/strawberry.jpg',
    info: 'Strawberry donut',
    price: 1.99,
    amount: 1,
    id: Date.now() + 2,
  },
  {
    img: 'imgs/rainbow.png',
    info: 'Rainbow donut',
    price: 1.99,
    amount: 1,
    id: Date.now() + 3,
  },
  {
    img: 'imgs/chocolate glaze.jpg',
    info: 'Chocolate glaze donut',
    price: 1.49,
    amount: 1,
    id: Date.now() + 4,
  },
  {
    img: 'imgs/cheesecake.jpg',
    info: 'Cheesecake donut',
    price: 1.49,
    amount: 1,
    id: Date.now() + 5,
  },
  {
    img: 'imgs/cappuccino.jpg',
    info: 'Cappuccino donut',
    price: 1.99,
    amount: 1,
    id: Date.now() + 6,
  },
  {
    img: 'imgs/New York  cheese cake.jpg',
    info: 'New York cheese cake',
    price: 1.99,
    amount: 1,
    id: Date.now() + 7,
  },
  {
    img: 'imgs/salt caramel.png',
    info: 'Salt caramel',
    price: 1.49,
    amount: 1,
    id: Date.now() + 8,
  },
  {
    img: 'imgs/chocolate creme.png',
    info: 'Chocolate creme',
    price: 1.49,
    amount: 1,
    id: Date.now() + 9,
  },
  {
    img: 'imgs/raspberry.png',
    info: 'Raspberry',
    price: 1.49,
    amount: 1,
    id: Date.now() + 10,
  },
]

const donutSlice = createSlice({
  name: 'donuts',
  initialState: {
    value: initialState,
  },
  reducers: {
    addDonut: (state, { payload }) => {
      state.value.push(payload)
    },
  },
})

export const { addDonut } = donutSlice.actions
export default donutSlice.reducer
