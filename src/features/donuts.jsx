import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    img: 'imgs/donut.png',
    info: 'Classic donut',
    price: 0.99,
    amount: 1,
    id: 1242353454,
  },
  {
    img: 'imgs/coconut.jpg',
    info: 'Coconut donut',
    price: 1.49,
    amount: 1,
    id: 325234432432,
  },
  {
    img: 'imgs/strawberry.jpg',
    info: 'Strawberry donut',
    price: 1.99,
    amount: 1,
    id: 32532432432,
  },
  {
    img: 'imgs/rainbow.png',
    info: 'Rainbow donut',
    price: 1.99,
    amount: 1,
    id: 32563465464,
  },
  {
    img: 'imgs/chocolate glaze.jpg',
    info: 'Chocolate glaze donut',
    price: 1.49,
    amount: 1,
    id: 13257695634,
  },
  {
    img: 'imgs/cheesecake.jpg',
    info: 'Cheesecake donut',
    price: 1.49,
    amount: 1,
    id: 67435645324,
  },
  {
    img: 'imgs/cappuccino.jpg',
    info: 'Cappuccino donut',
    price: 1.99,
    amount: 1,
    id: 3978354235346,
  },
  {
    img: 'imgs/New York  cheese cake.jpg',
    info: 'New York cheese cake',
    price: 1.99,
    amount: 1,
    id: 6458445234487,
  },
  {
    img: 'imgs/salt caramel.png',
    info: 'Salt caramel',
    price: 1.49,
    amount: 1,
    id: 556565365653,
  },
  {
    img: 'imgs/chocolate creme.png',
    info: 'Chocolate creme',
    price: 1.49,
    amount: 1,
    id: 6876968785675,
  },
  {
    img: 'imgs/raspberry.png',
    info: 'Raspberry',
    price: 1.49,
    amount: 1,
    id: 11347465635635,
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
