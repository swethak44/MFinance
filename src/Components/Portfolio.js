import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './portfolio.css';

export default function Portfolio() {
  return (
    <div>
        <div className='image'>
            <div class='text'>
                <h1>Portfolio Management Services</h1>
                <p class="text-black fs-6" >
                    Take the guesswork out of investing with Fincarts portfolio management services.<br/>
                    Our experts customize portfolios to suit your risk tolerance and financial goals,<br/> ensuring optimal returns. 
                    Connect now!
                </p>
            </div>
            
        </div>
        <div>
          <Container>
            <Row>
              <h2 className='mt-5 p-3'>Portfolio Management Advisory Service</h2>
              <Col lg={12}>
                  <p className=' fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px", margin: "20px" ,fontSize:"18px"}}>
                    Portfolio Management Service is a professional as well as licensed service provided by portfolio managers 
                    or investment advisory firms. It is regulated by SEBI (Securities and Exchange Board of India). 
                    Under portfolio management, tailor-made investment solutions are provided based on the clients objectives, 
                    risk tolerance, and investment preferences. The portfolio management services are favored by many high-net-worth individuals (HNIs). 
                    The ticket size for availing portfolio management services is Rs. 50 lakh. Unlike mutual funds, there is no pooling of assets, here, 
                    every investor has a unique portfolio based on their risk tolerance & needs!
                  </p>
                  <p className=' fw-light text-black' style={{ fontFamily: "sans-serif", textAlign: "left", padding: "20px", margin: "20px" ,fontSize:"18px"}}>
                    Portfolio management is backed by highly experienced and qualified portfolio managers who conduct research, analyze 
                    markets and trends, and accordingly make informed decisions. They monitor your portfolios, rebalance them, and make the 
                    necessary investment adjustments as per your needs!
                  </p>
              </Col>
            </Row>
            <div className='box-row'>
              


            </div>
          </Container>
        </div>
    </div>
  )
}
