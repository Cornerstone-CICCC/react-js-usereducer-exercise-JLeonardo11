import { useReducer } from 'react'
import  Reducer  from './reducers/reducer'
import './App.css'

const App = () => {
  const [state, dispatch] = useReducer(Reducer, {
    isDark: false,
    fsize: 24
  })
     return (
    <div>
      <div style={{backgroundColor: state.isDark ? "black" : "white", color: state.isDark? "white" : "black", fontSize: state.fsize}}>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga impedit error deserunt nobis expedita libero, animi laboriosam corrupti dolorum 
          labore soluta quis obcaecati perspiciatis consequatur esse odio? Dolorem, soluta.</h2>
      </div>
      <div>
        <button onClick={() => dispatch ({type: "ThemeMode"})}>Change Theme</button>
        <button onClick={() => dispatch({ type: "increment"})}>Increase</button>
        <button onClick={() => dispatch({ type: "decrement"})}>Decrease</button>
      </div>
    </div>
)
    
  }

  export default App