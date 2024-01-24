import React, { useEffect, useState } from "react";

export default function Dashboard(){
    const [userdata, setUserData] = useState({
        full_name:"",
        email_address:"",
        pass_word:""
    });
    useEffect(() => {
        fetch("http://localhost:5000/userdata" ,{
            method:"POSt",
            headers: {
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body: JSON.stringify({
                token:window.localStorage.getItem("token"),
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data,"userdata")
            const {fullname, emailaddress, password} = data.data;
            setUserData({
                full_name:fullname,
                email_address:emailaddress,
                pass_word:password
            })
        })
        .then((error) => console.log(error)) 
    },[])

    return(
        <div>
            <h1>Full Name</h1>
            <p>{userdata.full_name}</p>
            <br/>
            <h1>Email Address</h1>
            <p>{userdata.email_address}</p>
            <br/>
            <h1>Password</h1>
            <p>{userdata.pass_word}</p>
            <br/>
        </div>
    )
}