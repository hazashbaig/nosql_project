import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import "./arts.css"
// import { useNavigate } from "react-router-dom";

function Arts() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://art-gallery-w1x0.onrender.com/user/art", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        setArts(response.data);
      } catch (error) {
        console.log("error in fetching", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="arts-container">
      <div className="arts-gallery">
        {arts.map((art) => {
          return <Art key={art._id} art={art} />;
        })}
      </div>
    </div>
  );
}

export function Art({ art }) {
  // const navigate = useNavigate();

  return (
    <Card className="art-card" style={{backgroundColor:"#CBB1B1"}} >
      <Typography variant="h5">{art.name}</Typography>
      <Typography variant="subtitle1" className="art-subtitle">
        {art.artName}
      </Typography>
      <img className="art-image" src={art.imgLink} alt="img" />
      <Typography variant="body2" className="art-description">
        <b>{art.artistName}</b>
      </Typography>
      <Typography variant="body2" className="art-description">
        {art.description}
      </Typography>
      {/* <Button variant="contained" size="large">EDIT</Button> */}
    </Card>
  );
}

export default Arts;
