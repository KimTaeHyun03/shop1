import { configureStore, createSlice } from '@reduxjs/toolkit';

// cart 슬라이스 정의
const cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, title: 'White and Black', count: 2 },
    { id: 2, title: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    addCount(state, action) {
      let 번호 =state.findIndex((a)=>{return a.id=== action.payload});
      state[번호].count++;
    }
  }
});

// 액션 추출
export let { addCount } = cart.actions;

// 스토어 생성
export default configureStore({
  reducer: {
    cart: cart.reducer
  }
});