import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../components/interface'

 interface CartState {
 carteItem:IProduct[]
}

const initialState: CartState = {
   carteItem:[],
  
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})


// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default cartSlice.reducer