import React,{useEffect,useState} from "react";
import { getpatient } from "../sevices/Apiservices";

function PatientList(){

    const[patients,setPatient] = useState([])

    useEffect(() => {
        let mount = true
        getpatient()
        .then(res => { console.log("res from api",res)

            setPatient(res)
            return() => mount = false

        })

    },[])



    return(
        <>
        <h1>Patient List</h1>
        <table border={"2px"} cellPadding={"10px"}>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Blood Group</td>
                    <td>Action</td>

                    
                </tr>
            </thead>
            <tbody>
                {patients.map(patient => {

                    return <tr key={patient.patient_id}>
                    <td> {patient.first_name}</td>
                    <td>{patient.lost_name}</td>
                    <td>{patient.blood}</td>
                    <td><button>Edit</button></td><td><button>Delete</button></td>
                </tr>

                })}

                
            </tbody>
        </table>
        </>
    );
}
export default PatientList;

