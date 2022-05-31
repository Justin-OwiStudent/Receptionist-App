import React from 'react';
import classes from './Appointment.module.css'



const Appointments = () => {
    return(
        <>
        
        <div className={classes.appoint}>
            <h1>Appointments</h1>

            <div className={classes.appointment}>
                
                <table>
                    <tr>
                    <th>Doctor</th>
                    <th>Patient</th>
                    <th>Room</th>
                    </tr>
                   <tr>
                       <td>strange</td>
                       <td>bundy</td>
                       <td>626</td>
                   </tr>
                   <tr>
                       <td>strange</td>
                       <td>bundy</td>
                       <td>626</td>
                   </tr>
                </table>
            </div>
            
            {/* <table>
                <tr>
                    <th> Doctor </th>
                    <th> Patient </th>
                    <th> Room </th>

                </tr>
                <div className='appointment'>
                <tr>
                    <td>doc{}</td>
                    <td>pat{}</td>
                    <td>room{}</td>


                </tr>
                </div>
                <div className='appointment'>
                <tr>
                    <td>doc{}</td>
                    <td>pat{}</td>
                    <td>room{}</td>


                </tr>
                </div>
            </table> */}
        </div>
     
        </> 
    )
}

export default Appointments;