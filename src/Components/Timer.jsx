import { useEffect, useRef, useState } from "react";
import "../styles/countdown.css";
import Display from "./Display";

export default function Timer() {
  const [target, setTarget] = useState(null);
  const [diff, setDiff] = useState(0);
  const [validInput , setValidInput] = useState(""); 

  
  const id = useRef(null);

  function handleSubmit() {
    if (!target) return setValidInput("Please select a valid target date!"); 

     setValidInput(""); 

    if (id.current) clearInterval(id.current); 

    id.current = setInterval(() => {
      setDiff(new Date(target) - new Date());
    }, 1000);
  }

  useEffect(() => {
    if (diff < 0) {
      clearInterval(id.current); 
    }
  }, [diff]);

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  const getDays = () => {
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }; 

  const getHours = () => {
    const hoursInMs = diff % (1000 * 60 * 60 * 24); 
    return Math.floor(hoursInMs / (1000* 60 * 60 ))
  } 

  const getMinutes = () => {
    const minutesInMs = diff % (1000 * 60 * 60); 
    return Math.floor(minutesInMs / (1000 * 60)); 
  }

  const getSeconds = () => {
    const secondsInMs = diff % (1000* 60);
    return Math.floor(secondsInMs/(1000)); 

  }

  return (
    <div className="input">
      <input
        type="datetime-local"
        className="date-time"
        onChange={(e) => setTarget(e.target.value)}
      />
      <button id="submit" onClick={handleSubmit}>
        Start
      </button> 
      <Display days={getDays} hours={getHours} minutes = {getMinutes} seconds = {getSeconds} />
      {validInput && <p>{validInput}</p>}
      
    </div>
  );
}

