import { createStore , configureStore } from '@reduxjs/toolkit';
//congfigureStore is like createStore creates store but it makes merging multiple reducers
// into one reducer
import counterReducer from './counter';
import authReducer from './auth';



// if you are sending a argument data with the parameter you have to use the action becoz there action is the data to be add.
// (imgur) pakage is used internally change the mutable code into immutable code
// name: is upto you 



const store = configureStore({
  reducer: {counter : counterReducer , auth:authReducer},
});





export default store;








// down here is the old counterreducer which is made without redux toolkit 
// with the help of if and else statement

// const counterReducer = (state =initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       shoCounter:state.shoCounter
//     };
//   }
//   if(action.type==='increase'){
//     return {
//       counter: state.counter + action.amount,
//       shoCounter:state.shoCounter
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       shoCounter:state.shoCounter
//     };
//   }
//   if (action.type ==='toggle'){
//     return {
//       shoCounter: !state.shoCounter,
//       counter:state.counter
//     }
//   }
//   return state;
// };


