import { configureStore } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';
import { userSlice } from 'redux/userSlice';

const mySlice = createSlice({
  name: 'myValue',
  initialState: 10,
  reducers: {
    increment(state, action) {
      return state + action.payload;
    },
    decrement(state, action) {
      return state - action.payload;
    },
  },
});
console.log('mySlice:', mySlice);

export const { increment, decrement } = mySlice.actions;

// export const increment = createAction('myValue/increment');
// export const decrement = createAction('muValue/decrement');

// const myReducer = createReducer(10, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });

export const store = configureStore({
  reducer: {
    myValue: mySlice.reducer,
    user: userSlice.reducer,
  },
});
