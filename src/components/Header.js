import React from 'react';
import { FaBell } from 'react-icons/fa'

export default function Header(){
    return (
        <>
            <nav className="navbar">
                <div className="nav-left">
                    <div className="logo">
                        <img src="#" alt="H3A" className='logo-img' />
                    </div>
                    <div className="list-container">
                        <li className="list-items"><a className="items" href=""><b>PATIENTS</b></a></li>
                        <li className="list-items"><a className="items" href=""><b>CALENDAR</b></a></li>
                        <li className="list-items"><a className="items" href=""><b>USERS</b></a></li>
                        <li className="list-items"><a className="items" href=""><b>BILLING</b></a></li>
                    </div>
                </div>
                <div className="nav-right">
                    <i className="icons icon-notification"><FaBell /></i>
                    <img  className="icons icon-user" src="#" alt="patient-image" />
                </div>
            </nav>
        </>
    )
}