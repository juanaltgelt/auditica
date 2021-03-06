import { Form, Button, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Authcontext from "../../context/AuthProvider";
import axios from "../../api/axios";

const trackUrl = "http://localhost:3001/api/tracks"

function AddNewSong({ show, setShow }) {   
    const { auth } = useContext(Authcontext);
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [duration, setDuration] = useState("");
    const [myfile, setMyFile] = useState("");

    const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(trackUrl, {name, artist, album, duration, myfile}, {
        headers: { Authorization: `Bearer ${auth.token}`, 'Content-Type': 'multipart/form-data' },
      })
            navigate("/dashboard");
            setName("")
            setArtist("")
            setAlbum("")
            setDuration("")
            setMyFile("")
    } catch (e) {
      console.log(e);
    }
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Song +</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter new trackname.."
             
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
          
                type="text"
                placeholder="Enter artist.."
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
          
                type="text"
                placeholder="Enter album.."
                name="album"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
     
                type="number"
                placeholder="Enter duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Enter song file input</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setMyFile(e.target.files[0])}
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Add New Song
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewSong;
