import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Homepage() {
    const navigate = useNavigate();
    const ticketHandler = () => {
        ;   
    }
  return (
    <>
    <Container>
        <Row>
            <Col xs={12} sm={6} md={6} lg={4} id='card_pos'>
            <Card className='p-5 m-1 bg-light text-primary text-center anim'>
                <a onClick={()=>navigate('/TicketTracker')}className='display-5'  >Tickets</a>
            </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} id='card_pos'>
            <Card className='p-5 m-1 bg-light text-primary text-center anim'>
                <a onClick={()=>navigate('/Tasks')}className='display-5'  >Tasks</a>
            </Card>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4} id='card_pos'>
            <Card className='p-5 m-1 bg-light text-primary text-center anim'>
                <a onClick={ticketHandler}className='display-5'>POC's</a>
            </Card>
            </Col>
            
           
        </Row>
    </Container>
    
    </>
  )
}

export default Homepage