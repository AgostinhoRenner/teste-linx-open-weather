import { useEffect, useState } from "react";

export default function Home() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentClock, setCurrentClock] = useState("");

  function getCurrentDate() {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}`;
  }

  function getCurrentClock() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}`;
  }

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    setCurrentClock(getCurrentClock());
  }, []);
  
  return (
    <div id="home">
      <div>Linx</div>
      <span className="fas fa-house" />
      <div id="calendar">
        <div id="date">{currentDate}</div>
        <div id="clock">{currentClock}</div>
      </div>
    </div>
  );
}
