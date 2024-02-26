import React, { useEffect, useState } from "react";
import { GrPowerShutdown } from "react-icons/gr"
import { SiMercedes } from "react-icons/si";
import './dashboard.css'

export default function Dashboard() {
    const [userdata, setUserData] = useState({
        full_name: "",
        email_address: "",
        pass_word: ""
    });
    // useEffect(() => {
    //     fetch("http://localhost:5000/userdata" ,{
    //         method:"POST",
    //         headers: {
    //             "Content-Type":"application/json",
    //             Accept:"application/json"
    //         },
    //         body: JSON.stringify({
    //             token:window.localStorage.getItem("token"),
    //         })
    //     })
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data,"userdata")
    //         const {fullname, emailaddress, password} = data.data;
    //         setUserData({
    //             full_name:fullname,
    //             email_address:emailaddress,
    //             pass_word:password
    //         })
    //     })
    //     .then((error) => console.log(error)) 
    // },[])

    return (
        <main>
            <header className="header">
                <span>
                    <SiMercedes />
                    <p>Mercedes</p>
                </span>

                <GrPowerShutdown />

            </header>
            <nav className="dashboard--navigation">
                <a href="">Home</a>
                <a href="">Sedans</a>
                <a href="">SUVs</a>
                <a href="">Coupes</a>
                <a href="">Roadsters</a>
                <a href="">Wagons</a>
                <a href="">AMG</a>
            </nav>
            
        </main>
    )
}