import Header from "./components/Header";
import React, {useState} from 'react'
import { Sidebar } from "./components/Sidebar";
import { MainScreen } from "./components/MainScreen";



function App() {
  const [Patient, setPatient] = useState([
    {
        id: 1,
        patientName:'Sara Smith', 
        admissionDate:'15-Aug-2021', 
        status: true, 
        image:'media/user1.png',
        phone: '304-323-23s4',
        email: 'sara@email.com',
        gender: 'female',
        age: 45,
        surgeryType: 'Roaster Cuff Repair',
        surgeryDate: '15 Aug 2021',
        lastUpdated: '15 aug 2021',
        height: 163,
        weight: 110,
        BMI: 19,
        anesthesiologist: 'Dr.Christina Hardway',
        anesthesiologistPhone: '238-342-1234',
        anesthesiologistEmail: 'christina@email.com',
        sugeryClearance: true
    },

    {
        id: 2,
        patientName:'James Johnson', 
        admissionDate:'15-Aug-2020', 
        status: false, 
        image:'media/user2.png',
        phone: '304-323-23s4',
        email: 'sara@email.com',
        gender: 'Male',
        age: 45,
        surgeryType: 'Cuff Repair',
        surgeryDate: '25 Aug 2021',
        lastUpdated: '15 aug 2021',
        height: 163,
        weight: 110,
        BMI: 19,
        anesthesiologist: 'Dr.Christina Hardway',
        anesthesiologistPhone: '238-342-1234',
        anesthesiologistEmail: 'christina@email.com',
        sugeryClearance: true,
    },
      
    {
        id: 3,
        patientName:'Partice Page', 
        admissionDate:'20-Aug-2020', 
        status: true, 
        image:'media/user3.png',
        phone: '304-323-23s4',
        email: 'sara@email.com',
        gender: 'female',
        age: 35,
        surgeryType: 'Bipolar Surgery',
        surgeryDate: '10 may 2021',
        lastUpdated: '15 aug 2021',
        height: 159,
        weight: 70,
        BMI: 17,
        anesthesiologist: 'Dr.Christina Hardway',
        anesthesiologistPhone: '238-342-1234',
        anesthesiologistEmail: 'christina@email.com',
        sugeryClearance: false,
    },
    
  ])

  const [viewPatient, setView] = useState([Patient[0]])

  const Select = function (id) {
    Patient.forEach(element => {
      if(element.id === id){
        setView([element])
      };
    });
  }

  return (
    <>
    <Header />
      <div className='main-wrapper'>
      <Sidebar patient={Patient} onSelect={Select} />
      <MainScreen patient={viewPatient}/>
    </div>
    </>
  );
}

export default App;
