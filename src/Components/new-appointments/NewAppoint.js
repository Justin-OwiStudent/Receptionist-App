import classes from "./NewAppoint.module.css";

const NewAppoint = () => {
  return (
    <>
      <div className={classes.main}>
        <h1> New Appointment </h1>

        <form>
          <input placeholder="Patient Name" className={classes.inp}></input>

          <input placeholder="Doctor" className={classes.inp}></input>

          <input placeholder="Room" className={classes.inp}></input>

          <input placeholder="Time" className={classes.inp}></input>

          <input placeholder="Date" className={classes.inp}></input>
        

          <button className={classes.botn}> Add Patient </button>
        </form>

        <div className={classes.NewPatient}>

        </div>
      </div>
    </>
  );
};

export default NewAppoint;
