import { createStore } from "redux";
const initialState ={counter:0 , shoCounter:true};

const counterReducer = (state =initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      shoCounter:state.shoCounter
    };
  }
  if(action.type==='increase'){
    return {
      counter: state.counter + action.amount,
      shoCounter:state.shoCounter
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      shoCounter:state.shoCounter
    };
  }
  if (action.type ==='toggle'){
    return {
      shoCounter: !state.shoCounter,
      counter:state.counter
    }
  }
  return state;
};

const store = createStore(counterReducer);

export default store;