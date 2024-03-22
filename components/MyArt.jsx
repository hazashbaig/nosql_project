import { Alert, Button, Card, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios'
function MyArt(){
    const [name, setname] = useState("");
    const [imgLink, setimgLink ] = useState("");
    const [artistName, setArtistName ] = useState("");
    const [description, setDescription ] = useState("");

    const handleMyArt = async()=> {
        try{
            const username = localStorage.getItem("username");
            const response = await axios.post('https://art-gallery-w1x0.onrender.com/user/art',{
                username: username,
                name: name,
                imgLink: imgLink,
                artistName: artistName,
                description: description
            },{
                headers: {
                    "Authorization" : "Bearer " + localStorage.getItem("token")
                }
            });
            const data = response.data;
            alert("upload success");
        }
        catch(error){
            setError("Unable to upload");
        }
    }

    return <div style={{display: "flex", justifyContent: "center"}}>
        <div >
            <Card variant="{outlined}" style={{width: 400, padding:20, backgroundColor:"#CBB1B1"}}>
                <TextField
                    value= {localStorage.getItem('username')}
                    fullWidth={true}
                    // label= "Username"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setname(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Name"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setimgLink(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Image Link"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setArtistName(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Artist Name"
                    variant="outlined" />
                    <br /><br />
                <TextField
                    onChange={(e)=> {
                        setDescription(e.target.value);
                    }}
                    fullWidth={true}
                    label= "Description"
                    variant="outlined" />
                    <br /><br />
                <Button 
                size={"large"}
                variant="contained"
                onClick = {handleMyArt} >Submit</Button>

                
            </Card>
        </div>
        <div>
            
        </div>
    </div>
}

export default MyArt;