import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
const EditTask = (id) => {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [edited, setEdited]= useState({
    title:"",
    description:"",
});
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
       edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className='inps'>
        <input type='text' placeholder='enter new task title' onChange={(e)=>{setEdited({...edited,title:e.target.value})}} />
      <input type='text'placeholder='enter description'onChange={(e)=>{setEdited({...edited,description:e.target.value})}} />
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
    
    </div>
  )
}

export default EditTask