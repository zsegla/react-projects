import { useRef } from "react";

function App() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your name: </label>{" "}
      <input type="text" ref={nameRef} id="name" />
      <button type="submit">Submit</button>
    </form>
  );
}

/* The exact differces between controlled and uncontrolled inputs are:
1. Controlled inputs are managed by React state, while uncontrolled inputs rely on the DOM for their state.
2. Controlled inputs require onChange handlers to update state, whereas uncontrolled inputs use refs to access values.
3. Controlled inputs provide real-time validation and feedback, while uncontrolled inputs typically validate on form submission.
4. Controlled inputs can be more complex to set up but offer greater control, while uncontrolled inputs are simpler and quicker to implement.

*/

export default App;