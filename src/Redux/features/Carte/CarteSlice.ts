import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../../components/interface'
import { cartItemShop } from '../../../utils/functions'

 interface CartState {
 carteItems:IProduct[]
}

const initialState: CartState = {
   carteItems:[],
  
}

 const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    AddToCart: (state, action: PayloadAction<IProduct>) => {
       state.carteItems = cartItemShop( state.carteItems,action.payload)
     },
  },
})


 export const { AddToCart } = cartSlice.actions

export default cartSlice.reducer