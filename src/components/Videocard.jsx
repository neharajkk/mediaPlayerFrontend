import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistory, deletVideoApi } from '../services/allApi';





function Videocard({ video, setDeleteVideoStatus ,isPresent }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const caption = video?.caption
    const url = video?.embedLink
    const time = new Date()
    /*console.log(time);*/
    const timestamp = new Intl.DateTimeFormat("en-GB", { year: '2-digit', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(time)
    console.log(timestamp);

    const reqBody = {
      caption, url, timestamp
    }
     const result = await addVideoHistory(reqBody)
     console.log(result);
  }

  const handleDelete = async (id) => {
    const result = await deletVideoApi(id)
    setDeleteVideoStatus(result.data)
  }

   const videoDrag =(e ,video)=>{
   /* console.log(typeof(id));*/
   console.log(video);
    /*console.log(`draged video details is ${video}`);*/
   e.dataTransfer.setData("videoDetails",JSON.stringify(video))

   } 

  return (
    <>

      <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e, video)} className='mt-4'>
        {!isPresent && <Card.Img variant="top" onClick={handleShow} src={video?.imageUrl} height={'250px'} width={'300px'} />} 
        <Card.Body>

          <div className='d-flex justify-content-between'>
            <Card.Title>{video?.caption}</Card.Title>
            
            {!isPresent && <Button variant="danger" onClick={() => handleDelete(video?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button> 
           
            }
          </div>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="360" src={`${video?.embedLink}?autoplay=1`} title="&quot;Kabira Full Song&quot; Yeh Jawaani Hai Deewani | Pritam | Ranbir Kapoor, Deepika Padukone" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
      

    </>
  )
}

export default Videocard