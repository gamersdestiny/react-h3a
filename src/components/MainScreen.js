import React from 'react'

export const MainScreen = () => {
    return (
        <div>
            <div className="main-screen-head">
                <h3 className="title main-head-left">Patient Information</h3>
                <div className="status">
                    <p className="last-update">Last Updated <b>10:25 AM, today</b></p>
                    <i>3dots</i>
                </div>

            </div>
            <div className="info-bar">
                <img src='' className="patient-image"/>
                <h2 className="name">Sara Smith</h2>
            </div>
        </div>
    )
}
