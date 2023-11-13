import { configureStore } from '@reduxjs/toolkit'
import cepSlice from './cepSlice'

export const store = configureStore({
  reducer: {cepSlice},
})