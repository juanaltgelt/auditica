import {Form, Modal, Button} from "react-bootstrap";
import {useState, useContext} from "react"
import Authcontext from "../../context/AuthProvider";
import axios from "../../api/axios";

const trackUrl = "http://localhost:3001/api/tracks"

function EditSong({showEdit, setShowEdit, track}) {
  const { auth } = useContext(Authcontext);
  const [name, setName] = useState(track.name);
  const [artist, setArtist] = useState(track.artist);
  const [album, setAlbum] = useState(track.album);
  const [duration, setDuration] = useState(track.duration);

  console.log(track.name);
  console.log(track._id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${trackUrl}/${track._id}`, {name, artist, album, duration}, {
        headers: { Authorization: `Bearer ${auth.token}`},
      }).then((response) => {
        console.log(response);
        window.location.reload();
            setName("")
            setArtist("")
            setAlbum("")
            setDuration("")
      })
            
    } catch (e) {
      console.log(e);
    }
  };





  const handleClose = () => setShowEdit(false);
  return (
    <>
      <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title>Edit Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              
              <Form.Control
                type="text"
                placeholder="Enter new trackname.."
                name="name"
                required
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
          
              <Form.Control
                type="text"
                placeholder="Enter artist.."
                name="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
          
              <Form.Control
                type="text"
                placeholder="Enter album.."
                name="album"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
        
              <Form.Control
                type="text"
                placeholder="Enter duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditSong;
