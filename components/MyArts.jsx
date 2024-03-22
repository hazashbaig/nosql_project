import { Button, Card, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import "./myart.css";
import { useNavigate } from "react-router-dom";

function MyArts() {
  const [myarts, setMyArts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("https://art-gallery-w1x0.onrender.com/user/myart", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
            username: localStorage.getItem("username"),
          },
        });
        console.log(response.data);
        setMyArts(response.data);
      } catch (error) {
        console.log("error in fetching", error);
      }
    };
    fetchdata();
  }, []);

  const handleDelete = async (deletedArtId) => {
    try {
      const response = await axios.delete(
        `https://art-gallery-w1x0.onrender.com/user/myart/${deletedArtId}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(response);

      // Updating the state by filtering out the deleted art
      setMyArts((prevMyArts) =>
        prevMyArts.filter((art) => art._id !== deletedArtId)
      );
    } catch (error) {
      console.log("Error while deleting", error);
    }
  };

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {myarts.map((myart) => {
          return <Art key={myart._id} art={myart} onDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export function Art({ art, onDelete }) {
  const navigate = useNavigate();
  const handleDeleteClick = () => {
    onDelete(art._id);
  };
  return (
    <div>
      <Card
        className="art-card"
        style={{
          margin: 10,
          width: 300,
          minHeight: 200,
          padding: 20,
          backgroundColor: "#CBB1B1",
        }}
      >
        <Typography>{art.name}</Typography>
        <Typography>{art.artName}</Typography>
        <img style={{ height: 300, width: 300 }} src={art.imgLink} alt="img" />
        <Typography>{art.description}</Typography>
        <div className="delete-button-container">
          <Button
            className="delete-button"
            style={{ padding: "10px", backgroundColor: "red" }}
            variant="contained"
            onClick={handleDeleteClick}
          >
            DELETE
          </Button>
        </div>
        <div className="update-button-container">
          <Button
            className="update-button"
            style={{ padding: "10px" }}
            variant="contained"
            onClick={() => {
              navigate(`/updateart/${art._id}`);
            }}
          >
            Update
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default MyArts;
