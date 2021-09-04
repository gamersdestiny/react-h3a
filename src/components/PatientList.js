
export const PatientList = (props) => {
    return (
        <div>
            {props.patient.map((pats) =>{
                return <div className="side-list-container">
                    <div className="image-container"><img src={pats.image} /></div>
                    <div className="details-wrapper">
                        <div className="details-container">
                            <h3 className="name"><b>{pats.patienName}</b></h3>
                            <h6 className="admission-date">{pats.admissionDate}</h6>
                        </div>
                        <div className="patient-status" style={pats.status ? {backgroundColor:'green'} : {backgroundColor:'red'}}></div>
                    </div>
                </div>
            })}
            
        </div>
    )
}
