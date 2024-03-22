import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

function Appbar() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const fetchdata = async() =>{
            try{
                const response = await axios.get("https://art-gallery-w1x0.onrender.com/user/me",{
                    headers:{
                        "Authorization" : "Bearer " + localStorage.getItem("token")
                    }
                });
                setUserEmail(response.data);
            }
            catch(err){
                console.log("unable to fetch data", err);
            }
        };
        fetchdata();
    },[])

    if (userEmail) {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10, color:"#FFF4EF"}}>
                <Typography variant={"h6"}>Art</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10, display: "flex"}}>
                <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/arts")
                            }}
                        style={{color:"#FFF4EF"}}
                        >Home</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/myarts")
                            }}
                            style={{color:"#FFF4EF"}}
                        >Add Art</Button>
                    </div>

                    <div style={{marginRight: 10}}>
                        <Button
                            onClick={() => {
                                navigate("/myart")
                            }}
                            style={{color:"#FFF4EF"}}
                        >My Art</Button>
                    </div>

                    <Button
                        variant={"contained"}
                        onClick={() => {
                            localStorage.setItem("token", null);
                            window.location = "/";
                        }}
                    >Logout</Button>
                </div>
            </div>
        </div>
    } else {
        return <div style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 4,
            zIndex: 1
        }}>
            <div style={{marginLeft: 10}}>
                <Typography variant={"h6"} style={{color:"#FFF4EF"}}>Art_Gallery</Typography>
            </div>
    
            <div style={{display: "flex"}}>
                <div style={{marginRight: 10}}>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signup")
                        }}
                    >Signup</Button>
                </div>
                <div>
                    <Button
                        variant={"contained"}
                        onClick={() => {
                            navigate("/signin")
                        }}
                    >Signin</Button>
                </div>
            </div>
        </div>
    }
}

export default Appbar;