import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attendees, setAttendees] = useState("")
  const [preferences, setPreferences] = useState("")
  const [bringingGuests, setBringingGuests] = useState(false)

  //state for submitted data
  const [submittedData, setSubmittedData] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  // disabling the submit until all things are filled
  const formIsValid = name.trim() !== "" && email.trim() !== "" && attendees.trim() !== "";


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name, 
      email, 
      attendees,
      preferences,
      bringingGuests
    })

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000);

    // clear the form after submit
    setName("")
    setEmail("")
    setAttendees("")
    setPreferences("")
    setBringingGuests(false)
  }

  return (

    <div className="App">
    <div className="rsvp-container">
    <form id="rsvp-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" placeholder="Your Name" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>

      <label htmlFor="attendees">Number of Attendees:</label>
      <input type="number" placeholder="Number of Attendees" id="attendees" min="0" required value={attendees} onChange={(e)=> setAttendees(e.target.value)} />

      <label htmlFor="preferences">Dietry Preferences:</label>
      <input id="preferences" placeholder="Dietry Preferences (Optional)" type="text" value={preferences} onChange={(e)=> setPreferences(e.target.value)} />

      <label htmlFor="guests">Bringing additional guests?</label>
      <input type="checkbox" id="guests" checked={bringingGuests} onChange={(e)=>setBringingGuests(e.target.checked)} />

      <button disabled={!formIsValid} type="submit">Submit RSVP</button>
    </form>
  </div>
    {showSuccess && (<p style={{
    color: "green",
    fontWeight: "bold",
    marginTop: "1rem",
    animation: "fadeIn 0.5s"
  }} className="success">Thank you for your response!</p>)}

    {submittedData && (<div style={{
  marginTop: "1rem",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9"
}} id="submission-summary">
    <h3>RSVP Submitted!</h3>
    <p><strong>Name:</strong> {submittedData.name}</p>
    <p><strong>Email:</strong> {submittedData.email}</p>
    <p><strong>Number of Attendees:</strong> {submittedData.attendees}</p>
    <p><strong>Dietry Preferences:</strong> {submittedData.preferences}</p>
    <p><strong>Bringing Guests:</strong> {submittedData.bringingGuests ? "Yes" : "No"}</p>
    </div>)}

    </div>
 
  );
}

export default App;

/*
const { useState } = React;

export function EventRSVPForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attendees, setAttendees] = useState("")
  const [preferences, setPreferences] = useState("")
  const [bringingGuests, setBringingGuests] = useState(false)

  //state for submitted data
  const [submittedData, setSubmittedData] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  // disabling the submit until all things are filled
  const formIsValid = name.trim() !== "" && email.trim() !== "" && attendees.trim() !== "";


  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      name, 
      email, 
      attendees,
      preferences,
      bringingGuests
    })

    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000);

    // clear the form after submit
    setName("")
    setEmail("")
    setAttendees("")
    setPreferences("")
    setBringingGuests(false)
  }

  return (

    <div>
    <div className="rsvp-container">
    <form id="rsvp-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" placeholder="Your Name" type="text" required value={name} onChange={(e)=> setName(e.target.value)} />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>

      <label htmlFor="attendees">Number of Attendees:</label>
      <input type="number" placeholder="Number of Attendees" id="attendees" min="0" required value={attendees} onChange={(e)=> setAttendees(e.target.value)} />

      <label htmlFor="preferences">Dietry Preferences:</label>
      <input id="preferences" placeholder="Dietry Preferences (Optional)" type="text" value={preferences} onChange={(e)=> setPreferences(e.target.value)} />

      <label htmlFor="guests">Bringing additional guests?</label>
      <input type="checkbox" id="guests" checked={bringingGuests} onChange={(e)=>setBringingGuests(e.target.checked)} />

      <button disabled={!formIsValid} type="submit">Submit RSVP</button>
    </form>
  </div>
    {showSuccess && (<p style={{
    color: "green",
    fontWeight: "bold",
    marginTop: "1rem",
    animation: "fadeIn 0.5s"
  }} className="success">Thank you for your response!</p>)}

    {submittedData && (<div style={{
  marginTop: "1rem",
  padding: "1rem",
  border: "1px solid #ddd",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9"
}} id="submission-summary">
    <h3>RSVP Submitted!</h3>
    <p><strong>Name:</strong> {submittedData.name}</p>
    <p><strong>Email:</strong> {submittedData.email}</p>
    <p><strong>Number of Attendees:</strong> {submittedData.attendees}</p>
    <p><strong>Dietry Preferences:</strong> {submittedData.preferences}</p>
    <p><strong>Bringing Guests:</strong> {submittedData.bringingGuests ? "Yes" : "No"}</p>
    </div>)}

    </div>
  );

}
*/