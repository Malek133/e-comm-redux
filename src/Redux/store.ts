import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import CarteSlice from './features/Carte/CarteSlice'
        const store = configureStore({
         reducer: {
            cart:CarteSlice
           },
       })
      export type RootState = ReturnType<typeof store.getState>
       export type AppDispatch = typeof store.dispatch
        export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
      export default store