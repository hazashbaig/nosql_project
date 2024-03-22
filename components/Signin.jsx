import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";

function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSignin = async()=>{
        try{
            const response = await axios.post("https://art-gallery-w1x0.onrender.com/user/signin",{
                username: username,
                password: password
            });
            const data = response.data;
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", username);
            window.location = "/arts";
        }catch (error){
            setError("try again")
    }
};

    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"} style={{color:"#FFF4EF"}}>
                Welcome to Art gallery. Sign in below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20,backgroundColor:"#CBB1B1"}}>
                <TextField
                    onChange={(e)=>{
                        setUsername(e.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={handleSignin}

                > Signin</Button>
            </Card>
        </div>
    </div>
}

export default Signin;