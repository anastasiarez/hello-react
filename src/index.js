import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className="Button">
      {props.children}
    </button>
  );
};

const Application = () => {
  const [name, setName] = useState('');

  const reset = () => {
    setName(''); // Clears the input field
    console.log("reset");
  };

  const handleInputChange = (event) => {
    setName(event.target.value); // Update the name state with the input value
  };

  return (
    <main>
      <input
        type="text"
        placeholder="Type your name"
        value={name} // Bind the input value to the name state
        onChange={handleInputChange} // Handle changes in the input
      />
      <Button onClick={reset}>Reset</Button>
      {name && <h1>Hello {name}</h1>}
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
