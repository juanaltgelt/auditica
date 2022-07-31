import { Form, Button, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import Authcontext from "../../context/AuthProvider";
import "./addNewSong.css";
import axios from "../../api/axios";

const trackUrl = "http://localhost:3001/api/tracks"

function AddNewSong({ show, setShow }) {   
    const { auth } = useContext(Authcontext);
    const [name, setName] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [duration, setDuration] = useState("");
    const [myfile, setMyFile] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(trackUrl, {name, artist, album, duration, myfile}, {
        headers: { Authorization: `Bearer ${auth.token}`, 'Content-Type': 'multipart/form-data' },
      })
      window.location.reload();
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
      <Modal show={show} onHide={handleClose} className="modal-bg">
        <Modal.Header closeButton>
          <Modal.Title>Add New Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Song Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoFocus
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
          
                type="text"
                placeholder="Artist"
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
                autoComplete="off"
                />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
          
                type="text"
                placeholder="Album"
                name="album"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
     
                type="text"
                placeholder="Song Length"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3 input-file">
              <Form.Control
                type="file"
                onChange={(e) => setMyFile(e.target.files[0])}
                autoComplete="off"
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
