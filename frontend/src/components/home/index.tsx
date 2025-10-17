import "./home.css";

export default function Home() {
  function getCurrentDate() {
    const date = new Date();
    let dayOfMonth = date.getDate() > 10 ? date.getDate().toString() : `0${date.getDate()}`;
    let month = date.getMonth() > 10 ? date.getMonth().toString() : `0${date.getMonth()}`;
    return dayOfMonth.concat(":", month);
  }

  function getCurrentClock() {
    const date = new Date();
    let hour = date.getHours() > 10 ? date.getHours().toString() : `0${date.getHours()}`;
    let minute = date.getMinutes() > 10 ? date.getMinutes().toString() : `0${date.getMinutes()}`;

    return hour.concat(":", minute);
  }

  return (
    <div id="home">
      <div>Linx</div>
      <span className="fas fa-house" />
      <div id="calendar">
        <div id="date">{getCurrentDate()}</div>
        <div id="clock">{getCurrentClock()}</div>
      </div>
    </div>
  );
}
