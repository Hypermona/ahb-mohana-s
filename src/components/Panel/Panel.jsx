/* eslint-disable react/prop-types */

function Panel({ userInput, onInputChange, onStart ,onPause,reset}) {
  return (
    <div className="panel__container">
      <input
        className="input"
        name="userInput"
        value={userInput}
        onChange={onInputChange}
        type="number"
      />
      <button onClick={onStart} className="button">
        Start
      </button>
      <button onClick={onPause} className="button">
        Pause
      </button>
      <button onClick={reset} className="button">
        Reset
      </button>
    </div>
  );
}

export default Panel