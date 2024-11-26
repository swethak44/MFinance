import React from 'react';
import './insurance.css';
import { Container,Row,Col } from 'react-bootstrap';

export default function Insurance() {
  return (
    <div>
        <div className='backgroundimg'>
            <div class='text'>
                <h1>What medical expenditure does a <br/>Health Insurance Policy Cover?</h1>
                <p className='fw-light fs-4'>
                    Safeguard Your Health with Comprehensive Insurance Coverage
                </p>
                <p style={{textAlign:"left"}}>
                    Dont wait until its too late Protect yourself and your loved ones today with Fincarts best 
                    health insurance solutions. <br/>Our health insurance planner and advisor help you find the right plan. 
                    
                </p>
            </div> 
        </div>
        <div>
            <Container>
                <Row>
                    <h2 className='mt-5 p-3'>What is Health Insurance?</h2>
                    <Col lg={12}>
                        <p> 
                            Health insurance is a financial safety net that covers medical expenses arising from illnesses, injuries, or hospitalizations. It helps individuals and families manage healthcare costs by providing coverage for treatments, surgeries, and other medical services.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <h2 className='mt-5 p-3'>Why Is Health Insurance Important for Your Familys Well-being?</h2>
                    
                    <p>
                        Loved ones falling sick with any critical disease is emotionally draining. It disturbs the entire family and it certainly is a big financial burden. Further, medical inflation has remained high year on year. Health Insurance cant reduce the emotional upheaval but can take off the financial concerns.
                    </p> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Tax Benefits Under Section 80D</li>
                        </ul>
                    </Col> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Coverage of medical expenses</li>
                        </ul>
                    </Col> 
                    <Col lg={4}>
                        <ul style={{listStyleType:"none"}}>
                            <li className='fw-bold fs-5'>Lifetime Renewability Benefit</li>
                        </ul>
                    </Col> 
                </Row>
            </Container>
            
        </div>
    </div>
  )
}
