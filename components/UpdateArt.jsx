import { Card, TextField, Typography, Grid, Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdateArt(){

    let { id } = useParams();
    console.log(id);
    const [myart, setMyArt] = useState(null);
    useEffect(() => {
        axios.get("https://art-gallery-w1x0.onrender.com/user/myart/" + id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(res => {
            setMyArt(res.data.myart);
            // console.log(myart);
            // console.log(typeof(myart));
            // console.log(res.data.myart.description);

            
        });
    }, []);

    if (!myart) {
        return <div style={{height: "100vh", justifyContent: "center", flexDirection: "column"}}>
            Loading....
        </div>
    }

    return <div>
        <GrayTopper name={myart.name}/>
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdateCard myart={myart} setMyArt={setMyArt} />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <ArtCard myart={myart} />
            </Grid>
        </Grid>
    </div>
}

function GrayTopper({name}) {
    return <div style={{height: 250, top: 0, width: "100vw", zIndex: 0, marginBottom: -250}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    {name}
                </Typography>
            </div>
        </div>
    </div>
}

function UpdateCard({myart, setMyArt}) {
    const [name, setName] = useState(myart.name);
    const [imgLink, setImgLink] = useState(myart.imgLink);
    const [artistName, setArtistName] = useState(myart.artistName);
    const [description, setDescription] = useState(myart.description);
    const username = localStorage.getItem("username");
    return <div style={{display: "flex", justifyContent: "center"}}>
    <Card varint={"outlined"} style={{maxWidth: 600, marginTop: 200, }}>
        <div style={{padding: 20}}>
            <Typography style={{marginBottom: 10}}>Update Art details</Typography>
            <TextField
                value={username}
                style={{marginBottom: 10}}
                fullWidth={true}
                label="Username"
                variant="outlined"
            />
            <TextField
                value={name}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setName(e.target.value)
                }}
                fullWidth={true}
                label="Name"
                variant="outlined"
            />

            <TextField
                value={imgLink}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setImgLink(e.target.value)
                }}
                fullWidth={true}
                label="Image Link"
                variant="outlined"
            />

            <TextField
                value={artistName}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setArtistName(e.target.value)
                }}
                fullWidth={true}
                label="Artist Name"
                variant="outlined"
            />
            <TextField
                value={description}
                style={{marginBottom: 10}}
                onChange={(e) => {
                    setDescription(e.target.value)
                }}
                fullWidth={true}
                label="Description"
                variant="outlined"
            />

<Button
                variant="contained"
                onClick={async () => {
                    axios.put("https://art-gallery-w1x0.onrender.com/user/myart/" + myart._id, {
                        username: username,
                        name: name,
                        imgLink: imgLink,
                        artistName: artistName,
                        description: description
                    }, {
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    });
                    let updatedArt = {
                        _id: myart._id,
                        username: username,
                        name: name,
                        imgLink: imgLink,
                        artistName: artistName,
                        description: description
                    };
                    setMyArt(updatedArt);
                }}
            > Update Art</Button>
        </div>
    </Card>
</div>
}

function ArtCard(props) {
    const myart = props.myart;
    return <div style={{display: "flex",  marginTop: 50, justifyContent: "center", width: "100%"}}>
     <Card style={{
        margin: 10,
        width: 350,
        minHeight: 200,
        borderRadius: 20,
        marginRight: 50,
        paddingBottom: 15,
        zIndex: 2
    }}>
        <img src={myart.imgLink} style={{width: 350}} ></img>
        <div style={{marginLeft: 10}}>
            <Typography variant="h5">{myart.name}</Typography>
            <Typography variant="subtitle2" style={{color: "gray"}}>
                Description
            </Typography>
            <Typography variant="subtitle1">
                 {myart.description} 
            </Typography>
        </div>
    </Card>
    </div>
}

export default UpdateArt;