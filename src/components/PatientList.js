import { Typography } from "@material-ui/core"

export const PatientList = ({patient}) => {
    
    return (
        <div>
            {patient.patient.map((pats) =>{
                return <div className={`side-list-container }`} key={pats.id} onClick={()=> patient.onSelect(pats.id)}>
                    <div className="image-container" >
                        <img src={pats.image} className='round-image'  />
                    </div>
                    <div className="details-wrapper">
                        <div className="details-container">
                            <Typography className="name"><b>{pats.patientName}</b></Typography>
                            <Typography className="admission-date">{pats.admissionDate}</Typography>
                        </div>
                        <div className="patient-status" style={pats.status ? {backgroundColor:'green'} : {backgroundColor:'red'}}></div>
                    </div>
                </div>
            })},
            
        </div>
    )
}
