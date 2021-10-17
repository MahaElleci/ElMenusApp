import { configureStore } from "@reduxjs/toolkit";
import  categoriesSlice from './reducers/categories';

export default configureStore({
    reducer: { 
        categories : categoriesSlice
    }
  })