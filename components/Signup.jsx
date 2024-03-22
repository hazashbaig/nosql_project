import { Card, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async() => {
    try{
        const response = await axios.post("http://localhost:3000/user/signup", {
            username: username,
            password: password
        });
        const data = response.data;
        localStorage.setItem("token" , data.token);
        window.location = "/";
    }catch (error){
        setError("try agin");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center",  }}>
      <Card variant="outlined" style={{ width: 200, padding: 20 }}>
        <TextField
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <br />
        <br />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="outlined-basic"
          label="Password"
          variant="outlined"
        />
        <br /> <br />
        <Button 
            onClick={handleSignup}
        variant="contained">SIGN UP</Button>
      </Card>
    </div>
  );
}

export default Signup;
