import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, restart} from './reduxToolkit/Reducer';
function App() {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();

  const handleUp = ()=>{
    dispatch(increment());
  }
  const handleReset = ()=>{
    dispatch(restart())
  }
  const handleDown = ()=>{
    dispatch(decrement());
  }

  return (
    <div className="App container">
      <div className='card shadow'>
        <div className='card-header text-center border-0'>
          <h1>COUNTER</h1>
        </div>
        <div className='card-body fs-1 text-center'>
          {count}
        </div>
        <div className='card-footer text-center border-0'>
            <button className='btn down' onClick={handleDown}><i class='bx bx-down-arrow-circle' ></i></button>
            <button className='btn down' onClick={handleReset}><i class='bx bx-reset'></i></button>
            <button className='btn' onClick={handleUp}><i class='bx bx-up-arrow-circle'></i></button>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
