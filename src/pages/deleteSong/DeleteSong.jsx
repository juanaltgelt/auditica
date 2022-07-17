import {  Button, Modal } from "react-bootstrap";
import axios from "../../api/axios";
import Authcontext from "../../context/AuthProvider";
import { useContext } from "react";

const trackUrl = "http://localhost:3001/api/tracks"

function DeleteSong({ showDelete, setShowDelete, track }) {
    const { auth } = useContext(Authcontext);
    console.log(track._id);

    const deleteSong = () => {
        try {
            axios.delete(`${trackUrl}/${track._id}`, {
                headers: { Authorization: `Bearer ${auth.token}`, 'Content-Type': 'multipart/form-data' },
              })
              handleClose()
        } catch (error) {
            console.log(error);
        }
    }

  const handleClose = () => setShowDelete(false);

  return (
    <>
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Song</Modal.Title>
        </Modal.Header>
        <Modal.Body>Want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteSong}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteSong;
