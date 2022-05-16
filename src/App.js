import './App.css';
import { useState, useEffect } from 'react';
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


  // darkMode
  const [checked, setChecked] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", localStorage.getItem("theme"));
  }, [checked]);

  const toggleThemeChange = () => {
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      setChecked(false);
    }
  };

  return (
    <div className={`${checked  ? "App container-fluid" : "App container-fluid dark"}`}>
      <div className='text-center mode'>
        <p className={`${checked ? 'text-dark' : 'text-light'}`} >Dark Mode</p>
          <label>
            
          <input
              type="checkbox"
              id='mode'
              class="form-check-input"
              defaultChecked={checked}
              onChange={() => toggleThemeChange()}
            />
            
          </label>
        
          <br/>

      </div>
      <div className={`${checked ? 'card shadow' : 'card shadow card-dark'}`}>
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
