
import { useState } from 'react'
import './App.css'
import GridLayout from './components/GridLayout';
import Panel from './components/Panel';
import ResultTable from './components/ResultTable';
import { isActive, randomIndex } from './helper';
import { useRef } from 'react';



function App() {
  const GRID_SIZE = 6
  const [userInput,setUserInput] = useState(1);
  const [activeCell,setActiveCell] =useState({row:-1,col:-1});
  const reactionTimeRef = useRef(undefined);
  const [results,setResults] = useState([])
  const timeOutRef = useRef(undefined);
  const isClicked = useRef(false)

  function onInputChange(e){
    const value = e.target.value;
    if(value>0){

      setUserInput(parseInt(value));
    }
  }

  function onStart(){
   
    reactionTimeRef.current = Date.now();
    activateCell()
  }

  function activateCell(){
     const row = randomIndex(GRID_SIZE);
     const col = randomIndex(GRID_SIZE);
     if(isClicked.current){
      reactionTimeRef.current = Date.now();
      isClicked.current=false
     }
     setActiveCell({ row, col });
     timeOutRef.current = setTimeout(() => {
       activateCell();
     }, userInput * 1000);
  }

  function onPause(){
    reactionTimeRef.current=undefined
    clearTimeout(timeOutRef.current);
    setActiveCell({ row: -1, col: -1 });
    isClicked.current=false
  }

  function reset(){
    setUserInput(1)
    onPause()
    setResults([])
  }

  function onCellClick(row,col){
    if (isActive(activeCell, row, col) && reactionTimeRef.current) {
      const delay = Date.now() - reactionTimeRef.current;
      setResults((prev) => [...prev, { time: delay, clickNo: prev.length + 1 }]);
      setActiveCell({row:-1,col:-1})
      isClicked.current=true
    }
  }

  return (
    <div className='container'>
      <Panel
        userInput={userInput}
        onInputChange={onInputChange}
        onStart={onStart}
        onPause={onPause}
        reset={reset}
      />
      <GridLayout gridSize={GRID_SIZE} activeCell={activeCell} onCellClick={onCellClick} />
      <ResultTable results={results} />
    </div>
  );
}

export default App
