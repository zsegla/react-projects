import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UncontrolledInputs from './components/UncontrolledInputs'

function App() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <>
      <h1>Controlled inputs</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label> <br />
        <input value={name} id="name" onChange={handleChange} type="text" />
        <button type="submit">Submit</button>
      </form> 

      <h1>Uncontrolled inputs</h1>
      <UncontrolledInputs />
    </>
  );
}

export default App
