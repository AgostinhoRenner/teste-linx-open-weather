import "./home.css";
import { connect } from "react-redux";
import { limpaEstado } from "../../store/actions/weatherActions";

interface homeProps {
  cleanStateRedux: () => void;
}

function Home({ cleanStateRedux }: homeProps) {
  function getCurrentDate() {
    const date = new Date();
    let dayOfMonth = date.getDate() > 8 ? (date.getDate() + 1).toString() : `0${date.getDate() + 1}`;
    let month = date.getMonth() > 8 ? (date.getMonth() + 1).toString() : `0${date.getMonth() + 1}`;
    return dayOfMonth.concat("/", month);
  }

  function getCurrentClock() {
    const date = new Date();
    let hour = date.getHours() > 9 ? date.getHours().toString() : `0${date.getHours()}`;
    let minute = date.getMinutes() > 9 ? date.getMinutes().toString() : `0${date.getMinutes()}`;

    return hour.concat(":", minute);
  }

  return (
    <div id="home">
      <div>Linx</div>
      <span onClick={() => cleanStateRedux()} className="fas fa-house" />
      <div id="calendar">
        <div id="date">{getCurrentDate()}</div>
        <div id="clock">{getCurrentClock()}</div>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    cleanStateRedux() {
      const action = limpaEstado();
      dispatch(action);
    },
  };
}
export default connect(null, mapDispatchToProps)(Home);
