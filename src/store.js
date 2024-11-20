import { configureStore, createSlice } from '@reduxjs/toolkit';




let cartSlice = [
    { id: 0, title: 'White and Black', count: 2 },
    { id: 2, title: 'Grey Yordan', count: 1 }
  ]
// cart 슬라이스 정의
let cart = createSlice({
  name: 'cart',
  initialState: cartSlice,
  reducers: {
    addCount(state, action) {
      let 번호 =state.findIndex((a)=>{return a.id=== action.payload});
      state[번호].count++;
    },
    addItem(state, action){
      state.push(action.payload)
  }
    
  }
  
});

// 함수 export
export let { addCount,addItem } = cart.actions;

// 스토어 export
export default configureStore({
  reducer: {
    cart: cart.reducer
  }
});