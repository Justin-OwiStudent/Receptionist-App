import "./index.css";
import Navigation from "./Components/Nav/Navigation";
import Button from "./Components/button/Button";
import Calender from "./Components/Calender/Calender";
import Appointments from "./Components/appointments/Appointments";
import Topnav from "./Components/top-nav/Topnav";
import User from "./Components/User/User";
import Doctor from "./Components/Doctor/Doctor";
import Patient from "./Components/Patient/Patient";
import LoginReg from "./Components/loginReg/LoginReg"
import Login from "./Components/Login/Login"


function App() {
  return (
    <div className="app">

        {/* <Login></Login> */}

        <LoginReg></LoginReg>

        {/* <Navigation></Navigation>
        <User></User>
        <Appointments></Appointments>
        <Calender></Calender> */}

       

        {/* <Doctor></Doctor> */}
    </div>
  );
}

export default App;
