import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
      categories: []
  },
  reducers: {
    list_categories: (state, action) => { 
        //state.categories.push(action.payload)
      state.categories = [...state.categories, ...action.payload];
    },
    add_category: (state, action) => { 
     
      state.categories = [...state.categories, action.payload];
    }, 
    add_ItemToCategory : (state, action) => {
     const {categoryId, addedItem} = action.payload
     let category = state.categories.find(item => item.id === categoryId); 
     category.items.push(addedItem);
    }, 
    delete_category : (state, action) => {
      state.categories = state.categories.filter(item => item.id != action.payload)
    }
  }
});

export const {add_category, list_categories, add_ItemToCategory, delete_category} = categoriesSlice.actions;
export default categoriesSlice.reducer;
