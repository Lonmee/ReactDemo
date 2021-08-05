import React, {useContext, useEffect, useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeContext} from "./index";
import {Button} from "@material-ui/core";
import {counterReducer, initialCount} from "./reducer/counterReducer";

function App(this: any) {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(counterReducer, initialCount);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    console.log(count);
    document.title = `You clicked ${count} times`;
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button style={{ background: theme.background, color: theme.foreground }} onClick={() => setCount(count + 1)}>
          Click +
        </button>
        <button style={{ background: theme.background, color: theme.foreground }} onClick={() => setCount(count - 1)}>
          Click -
        </button>
        <nav/>
        <text>Count: {state.count}</text>
        <Button variant="contained" onClick={() => dispatch({type: 'increment', payload: null})}>increment</Button>
        <Button variant="contained" onClick={() => dispatch({type: 'decrement', payload: null})}>decrement</Button>
        <Button variant="contained" onClick={() => dispatch({type: 'reset', payload: 0})}>reset</Button>
        <a
          className="App-link"
          href="https://zh-hans.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <XX count={state.count}/>
      </header>
    </div>
  );
}

function XX(props: any) {
  return <h2>this is the {props.count}</h2>
}

export default App;
