import classes from './Counter.module.css';
import { useSelector , useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';
const Counter = () => {
  const dispatch = useDispatch();
  const  show =  useSelector(state=> state.shoCounter);
  const counter = useSelector(state =>state.counter.counter);
  const incrementHandler =()=>{
    dispatch(counterActions.increment());
  }
  const decrementHandler =()=>{
    dispatch(counterActions.decrement());
  }
  const increaseHandler =()=>{
    dispatch(counterActions.increase(10)); //{type:Some_UNIQUE_IDENTIFIER , payload:10 so we have to access now payload for the value} 
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show &&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick ={incrementHandler}>Increment</button>
        <button onClick ={decrementHandler}>decrement</button>
        <button onClick ={increaseHandler}>increase by 10 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;



// here is the class based example for redux component how we can also implment this method using class 

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);