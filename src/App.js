import "./index.css";
import Navigation from "./Nav/Navigation";
import Button from "./button/Button";
import Calender from "./Calender/Calender";
import Appointments from "./appointments/Appointments";
import Topnav from "./top-nav/Topnav";
import User from "./User/User";
import Doctor from "./Doctor/Doctor";

function App() {
  return (
    <div className="app">
        <Navigation></Navigation>
        <User></User>
        <Appointments></Appointments>
        <Calender></Calender>

        

        {/* <Doctor></Doctor> */}
    </div>
  );
}

export default App;
