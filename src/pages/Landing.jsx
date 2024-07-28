import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
    <Row className='w-100 mt-5'>
      <Col md={1}></Col>
      <Col md={5} className='p-3'>
      <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odio sapiente voluptatum voluptatem porro quo modi laborum totam, omnis alias assumenda illum animi ea, dolor, architecto ullam. Optio, nisi dolorem?
      Ipsum eum dolorum in reiciendis facilis, blanditiis obcaecati debitis, eveniet dignissimos sapiente sint soluta fugit voluptatibus quos aliquid architecto quae quasi recusandae? Debitis commodi voluptatibus sit repellendus ut. Quia, laudantium.</p>
      <Link to={'/front'}><button className='btn btn-warning mt-5'>Get Started</button></Link>
      </Col>
      <Col md={1}></Col>
      <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
      
      </Col>
      </Row>

      

      <div className="container">
        <h3 className='text-center my-5'>Features</h3>
        <Row>
          <Col md={1}></Col>
          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-2 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" height={'250px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

          <Col md={4} className='px-md-5'>
          <Card style={{ width: '100%' }} className='p-2 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" 
      height={'252px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>

          <Col md={3}>
          <Card style={{ width: '100%' }} className='p-2 mt-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"
      height={'250px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </Col>
          <Col md={1}></Col>
        </Row>
         
      </div>

      <div className="container-fluid my-5">
        <div className="row">
         <div className="col-md-1"></div>
         <div className="col-md-10 border border-secondary p-3 my-5 border-2 rounded">
        <div className='row p-4'> 
          <div className="col-md-6">
            <h2 className='text-warning'>Simple fast and PowerFull</h2>
            <p><span className='fs-5'>Play Everything</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque,modi perspiciatis ducimus minus labore veritatis saepe.</p>
            <p><span className='fs-5'>Play Everything</span> :Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque,modi perspiciatis ducimus minus labore veritatis saepe.</p>
            <p><span className='fs-5'>Play Everything</span>:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias atque,modi perspiciatis ducimus minus labore veritatis saepe.</p>
          </div>
          <div className="col-md-6">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/T94PHkuydcw" title="Kun Faya Kun Full Video Song Rockstar | Ranbir Kapoor | A.R. Rahman, Javed Ali, Mohit Chauhan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        </div>
         <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}

export default Landing