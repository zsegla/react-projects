import React, { useState, useEffect, useRef } from 'react'

export const OTPGenerator = () => {
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const timeRef = useRef(null);

  const generateOTP = () => {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    setPassword(OTP);
  };

  const otpButtonHandler = () => {
    // clear any previous interval
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }

    // start from 5 and show immediately
    setCount(5);
    setIsButtonDisabled(true);
    // generate and show OTP
    generateOTP();

    // use functional updates so the closure doesn't capture stale counter
    timeRef.current = setInterval(() => {
      setCount(prev => {
        if (prev === null) return null;
        if (prev <= 1) {
          // when transitioning to 0: stop interval, enable button
          clearInterval(timeRef.current);
          timeRef.current = null;
          setIsButtonDisabled(false);
          return 0; // show 0 (tests expect to see 0)
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    // cleanup on unmount
    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
      }
    };
  }, []);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>

      {/* show only the digits (or the prompt) */}
      <h2 id="otp-display">
        {password ? password : "Click 'Generate OTP' to get a code"}
      </h2>

      <p id="otp-timer" aria-live="assertive">
        {count !== null && count > 0 && `This OTP will expire in ${count} seconds`}
        {count === 0 && 'OTP expired. Click the button to generate a new OTP.'}
      </p>

      <button
        id="generate-otp-button"
        onClick={otpButtonHandler}
        disabled={isButtonDisabled}
      >
        Generate OTP
      </button>
    </div>
  );
};

export default OTPGenerator;