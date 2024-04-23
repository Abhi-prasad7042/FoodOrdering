import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state, action) => {
            const newItem = action.payload;
            const newItemID = newItem.card.info.id;
            const existingItemIndex = state.items.findIndex(item => item.card.info.id === newItemID);
            
            if (existingItemIndex !== -1) {
                
              const updatedItems = state.items.map(item => {
                if (item.card.info.id === newItemID) {
                  return { ...item, numberCount: item.numberCount + 1 };
                }
                return item;
              });
          
              state.items = updatedItems;
            } 
            else {
              state.items.push({ ...newItem, numberCount: 1 });
            }
          },
          
        removeItem: (state, action) => {
            const itemID = action.payload.card.info.id;
            const count = action.payload.numberCount;
          
            if (count > 1) {
              const updatedItems = state.items.map(item => {
                if (item.card.info.id === itemID && item.numberCount > 0) {
                  return { ...item, numberCount: item.numberCount - 1 };
                }
                return item;
              });
              state.items = updatedItems;
            } 

            else {  
              state.items = state.items.filter(item => item.card.info.id !== itemID);
            }
        },
        clearCart: (state)=>{
            localStorage.clear();
            state.items.length = 0
        }
    }
})


export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;