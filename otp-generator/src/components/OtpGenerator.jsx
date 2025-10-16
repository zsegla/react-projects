import React, { useState, useEffect, useRef } from 'react'

export const OTPGenerator = () => {
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(null)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const timeRef = useRef()

  const generateOTP = () => {
    const digits = "0123456789"
    let OTP = ""
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)]
    }
    setPassword(OTP)
  }

  const otpButtonHandler = () => {
    if (timeRef.current) {
      clearInterval(timeRef.current)
    }
    let counter = 30
    setCount(counter)
    setIsButtonDisabled(true)
    setShowMessage(false)
    generateOTP()
    timeRef.current = setInterval(() => {
      counter -= 1
      setCount(counter)
      if (counter === 0) {
        clearInterval(timeRef.current)
        setIsButtonDisabled(false)
        setShowMessage(true)
      }
    }, 100)
  }

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // reset when countdown reaches 0
    if (count === 0) {
      setTimeout(() => {
        setPassword("")
        setCount(null)
      }, 0)
    }
  }, [count])

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{password ? `Your OTP is: ${password}` : "Click 'Generate OTP' to get a code"}</h2>
      <p id="otp-timer" aria-live="assertive">
        {count !== null && count > 0 && `This OTP will expire in ${count} seconds`}
        {showMessage && count === null && "The OTP has expired. Please generate a new one."}
      </p>
      <button id="generate-otp-button" onClick={otpButtonHandler} disabled={isButtonDisabled}>Generate OTP</button>
    </div>
  )
}

export default OTPGenerator;