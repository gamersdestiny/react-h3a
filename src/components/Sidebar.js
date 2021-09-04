import React, { useState } from 'react'
import { PatientList } from './PatientList';
import { FaSistrix } from "react-icons/fa";

export const Sidebar = () => {
    const [Patient, setPatient] = useState([
        {
            id: 1,
            patienName:'sara', 
            admissionDate:'15-Aug-2021', 
            status: true, 
            image:'./default-user.png',
            phone: '304-323-23s4',
            email: 'sara@email.com',
            gender: 'female',
            age: 45,
            surgeryType: 'Roaster Cuff Repair',
            surgeryDate: '15 Aug 2021',
            height: 163,
            wieght: 110,
            BMI: 19,
            anesthesiologist: 'Dr.Christina Hardway',
            anesthesiologistPhone: '238-342-1234',
            anesthesiologistEmail: 'christina@email.com',
            sugeryClearance: true

        },

        {
            id: 2,
            patienName:'steve', 
            admissionDate:'15-Aug-2020', 
            status: false, 
            image:'./default-user.png',
            phone: '304-323-23s4',
            email: 'sara@email.com',
            gender: 'female',
            age: 45,
            surgeryType: 'Roaster Cuff Repair',
            surgeryDate: '15 Aug 2021',
            height: 163,
            wieght: 110,
            BMI: 19,
            anesthesiologist: 'Dr.Christina Hardway',
            anesthesiologistPhone: '238-342-1234',
            anesthesiologistEmail: 'christina@email.com',
            sugeryClearance: true,
        },
            
    ])
    return (
        <div className='sidebar'>
            <h4 className="side-heading">Patients</h4>
            <div className="search">
                <input type="text" className="search-patient" placeholder='search for...' />
                <i className="icon"><FaSistrix /></i>
                
            </div>
            <div className="patient-list">
                <PatientList patient={Patient}/>
            </div>
        </div>
    )
}
