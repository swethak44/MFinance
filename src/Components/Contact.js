import React from 'react';
import './contact.css';
import { Container,Row,Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
        <div className='background'>
            <div class='text'>
                <h1>Contact Us</h1>
                <p className='fs-5 p-3'>
                    At Fincart, we believe every financial journey is unique. Our certified financial advisor are<br/>
                    here to help you with risk analysis, investment planning, and achieving your financial goals.
                </p>
            </div> 
        </div>

        <div className='bgrnd'>
          <div className="container">
            <Row>
              <Col lg={10}>
              <div className='tbox'>
                <h3 className='mt-5 p-5'> Get in Touch</h3>
                <p>
                  Need advice or have questions? Contact us to schedule a discovery session with Fincart's Financial Planning Services. 
                  We'll assess your financial situation and create a plan just for you
                </p>
              </div>

              <div className='fbox'>

                </div>
                 
              </Col>
            </Row>
          </div>
        </div>
        
    </div>
  )
}
